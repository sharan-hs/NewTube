import React, { useState } from "react";

const Comment = ({ comment }) => {
  return (
    <div className="flex items-center gap-2 mt-3">
      <div className="w-9 h-9">
        <img
          className="rounded-full h-full w-full"
          src={comment?.author?.avatarThumbnailUrl}
          alt="User-Profile Image"
        />
      </div>
      <div className="mt-3">
        <p>{comment?.author?.title}</p>
        <p>{comment?.content}</p>
      </div>
    </div>
  );
};

export default Comment;
