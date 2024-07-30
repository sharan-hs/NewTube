import React from "react";

function ListItems() {
  const categories = [
    "All",
    "Music",
    "React",
    "Computer programming",
    "Football",
    "Movie musicals",
    "India national cricket team",
    "News",
    "Mixes",
    "Dance",
    "Hindi cinema",
    "Live",
    "Comedy",
    "Trekking",
    "Party",
    "Cricket",
    "Badminton",
    "Coding",
  ];
  return (
    <div className="overflow-x-scroll px-4">
      <div className="flex space-x-4 ">
        {categories.map((category) => {
          return (
            <div
              key={category}
              className="mb-4 flex-none bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-4 py-2 font-medium text-gray-700 cursor-pointer"
            >
              {category}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListItems;
