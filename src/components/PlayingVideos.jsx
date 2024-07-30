import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/rapidAPI";
import ReactPlayer from "react-player";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import SuggestedVideo from "./SuggestedVideo";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Comment from "./Comment";

function PlayingVideo() {
  const [video, setVideo] = useState();
  const [relatedVideo, setRelatedVideo] = useState();
  const [comments, setComments] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideo();
    fetchComments();
  }, [id]);

  const fetchVideoDetails = () => {
    fetchData(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
    });
  };
  const fetchRelatedVideo = () => {
    fetchData(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setRelatedVideo(res);
    });
  };

  const fetchComments = () => {
    fetchData(`video/comments/?id=${id}`).then((res) => {
      console.log(res);
      setComments(res.comments);
    });
  };

  return (
    <div className=" flex justify-center flex-row h-[calc(100%-56px)]">
      <div className="w-full max-w-[1580px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[100%-400px] px-4 py-3 lg:py-6">
          <div className="h-[200px] md:h-[700px] ml-[-16px] mr-[-16px] lg:ml-0 lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height="100%"
              width="100%"
              controls
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
          <div className="font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {video?.title}
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex ">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={video?.author?.avatar[0]?.url}
                  />
                </div>
              </div>
              <div className="flex space-x-5">
                <div className="flex flex-col ml-3">
                  <div className="text-md font-semibold flex items-center">
                    {video?.author?.title}
                    {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                      <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                    )}
                  </div>
                  <div className=" text-sm">
                    {video?.author?.stats?.subscribersText} subscribers
                  </div>
                </div>
                <span className="mt-1 text-center bg-red-500 px-3 pt-2 rounded-full text-white cursor-pointer hover:bg-red-700 duration-200 ">
                  Subscribe
                </span>
              </div>
            </div>
            <div className="flex mt-4 md:mt-0">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                <AiOutlineLike className="text-xl mr-2" />
                {`${abbreviateNumber(video?.stats?.likes)} Likes`}
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-100 rounded-xl mt-4 text-sm">
            <p className="font-semibold">{`${abbreviateNumber(
              video?.stats?.views
            )} Views`}</p>
            <p> {video?.description}</p>
          </div>
          <div className="flex gap-x-6 font-semibold rounded-xl mt-4 text-xl">
            {video?.stats?.comments} <p>Comments</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-xl">
            {comments?.map((item) => {
              console.log(item);
              return <Comment key={item.commentId} comment={item} />;
            })}
          </div>
        </div>
        <div className="flex flex-col px-4 py-6  overflow-x-hidden lg:w-[350px] xl:w-[400px]">
          {relatedVideo?.contents?.map((item, index) => {
            if (item?.type !== "video") return false;
            return <SuggestedVideo key={index} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default PlayingVideo;
