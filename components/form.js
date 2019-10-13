export default ({ input, changeInput, addItem }) => (
  <form
    onSubmit={addItem}
    className="w-full border-b-2 border-green-300 pb-2 mb-2"
  >
    <div className="flex justify-between">
      <input
        type="text"
        value={input}
        onChange={changeInput}
        placeholder="Search for your product"
        className="w-3/4 p-2 flex-grow text-gray-700"
      />
      <button type="submit" className="block bg-primary py-2 px-4 mx-4">
        Add
      </button>
    </div>
  </form>
);
