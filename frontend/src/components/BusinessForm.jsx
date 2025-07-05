function BusinessForm({ businessName, location, onChange, onSubmit, loading }) {
  return (
    <form
      onSubmit={onSubmit}
      className="h-full bg-white/70 backdrop-blur-lg shadow-2xl border border-white/40 rounded-2xl p-8 flex flex-col justify-center"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Enter Business Info</h2>

      <div className="mb-4">
        <label className="block text-sm text-gray-600 mb-1">Business Name</label>
        <input
          type="text"
          name="businessName"
          value={businessName}
          onChange={onChange}
          placeholder="e.g. Cake & Co"
          className="text-gray-500 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm text-gray-600 mb-1">Location</label>
        <input
          type="text"
          name="location"
          value={location}
          onChange={onChange}
          placeholder="e.g. Mumbai"
          className="text-gray-500 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-indigo-500 text-white font-semibold py-2 rounded-lg hover:bg-indigo-600 transition"
        disabled={loading}
      >
        {loading ? "Loading..." : "Get Business Data"}
      </button>
    </form>
  );
}

export default BusinessForm;
