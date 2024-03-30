const Popupcard = ({ togglePopup, showPopup, selectedCard }) => {
  return (
    <div className="relative">
      {showPopup && selectedCard && (
        <div className="fixed inset-0 flex items-center justify-center bg-background-0 bg-opacity-50">
          <div className="flex flex-row rounded-3xl bg-textcolor-0 text-background-0 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-1/2">
            <img
              className="grayscale hover:grayscale-0 w-1/2 rounded-t-lg object-cover md:h-auto  md:rounded-none md:rounded-l-lg flex-row"
              src={selectedCard.img} // Use selected card image
              alt={selectedCard.name}
            />
            <div className="flex flex-col justify-start p-8">
              <h5 className="mb-4 text-3xl font-medium text-neutral-800 dark:text-neutral-50">
                {selectedCard.name} {/* Display selected card name */}
              </h5>
              <p className="mb-6 text-lg text-neutral-600 dark:text-neutral-200">
                {selectedCard.description}
              </p>
              <button
                className="mt-6 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 border-2"
                onClick={() => togglePopup(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Popupcard;
