import React from "react";

const SidebarItem = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1"
    >
      <div className="text-xl cursor-pointer ">{item.icon}</div>
      <span className="cursor-pointer">{item.name}</span>
    </div>
  );
};

export default SidebarItem;
