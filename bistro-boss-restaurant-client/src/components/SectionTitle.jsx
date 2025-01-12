const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-4">
      <p className="text-yellow-600 dark:text-yellow-400 mb-2">
        --- {subHeading} ---
      </p>
      <h3 className="text-3xl uppercase border-y-4 py-4 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
