import React from "react";
import Video from "./Video";
import Sidebar from "./Sidebar";
import { useAuth } from "../context/AuthProvider";
import ListItems from "./ListItems";

const Home = () => {
  const { data } = useAuth();

  return (
    <div className="flex">
      <Sidebar />
      <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
        <ListItems />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {data.map((item) => {
            if (item.type !== "video") return false;
            return <Video key={item.video.videoId} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
