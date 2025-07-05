import { useState } from "react";
import BusinessForm from "./components/BusinessForm";
import BusinessCard from "./components/BusinessCard";
import "./App.css";
import { Toaster, toast } from "react-hot-toast";

function App() {
  const [form, setForm] = useState({ businessName: "", location: "" });
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.businessName.trim() || !form.location.trim()) {
      toast.error("Please fill in both fields.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/business-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      setData({ ...result, ...form });
      setFlipped(true);
      toast.success("Business data loaded");
    } catch (err) {
      toast.error("Failed to load business data");
    } finally {
      setLoading(false);
    }
  };

  const regenerateHeadline = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/regenerate-headline?name=${form.businessName}&location=${form.location}`
      );
      const result = await response.json();
      setData((prev) => ({ ...prev, headline: result.headline }));
      toast.success("Headline updated");
    } catch {
      toast.error("Failed to regenerate headline");
    }
  };

  const handleReset = () => {
    setForm({ businessName: "", location: "" });
    setData(null);
    setFlipped(false);
    toast("Form reset");
  };

  return (
    <div className="min-h-screen bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% flex items-center justify-center px-4">
      <Toaster />
      <div className="relative w-full max-w-md h-[520px] [perspective:1200px]">
        <div
          className={`relative w-full h-full transition-transform duration-[800ms] ease-in-out [transform-style:preserve-3d] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          <div className="absolute w-full h-full [backface-visibility:hidden]">
            <BusinessForm
              businessName={form.businessName}
              location={form.location}
              onChange={handleChange}
              onSubmit={handleSubmit}
              loading={loading}
            />
          </div>

          <div className="absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
            {data && (
              <BusinessCard
                data={data}
                onRegenerate={regenerateHeadline}
                onReset={handleReset}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
