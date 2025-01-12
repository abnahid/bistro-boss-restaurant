import { useState } from "react";

function RateUs() {
  const [recipe, setRecipe] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Recipe:", recipe);
    console.log("Suggestion:", suggestion);
    console.log("Review:", review);
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">RATE US!</h2>
      <div className="flex justify-center mb-4">
        <span className="text-3xl">★★★★★</span>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="recipe"
            className="block text-gray-700 font-bold mb-2"
          >
            Which recipe you liked most?
          </label>
          <input
            type="text"
            id="recipe"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="suggestion"
            className="block text-gray-700 font-bold mb-2"
          >
            Do you have any suggestion for us?
          </label>
          <input
            type="text"
            id="suggestion"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="review"
            className="block text-gray-700 font-bold mb-2"
          >
            Please leave your review:
          </label>
          <textarea
            id="review"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default RateUs;
