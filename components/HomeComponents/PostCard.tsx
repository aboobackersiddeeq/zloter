import {
  BookmarkAddOutlined,
  MoreHorizOutlined,
  RemoveCircleOutlineOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";

export const PostCard = () => {
  return (
    <div className="p-4 ">
      <div id="postCardHeader" className="flex mb-2">
      <Avatar alt="A" src=" "  sx={{ width: 25, height: 25 }} />
        <p className="ml-2 text-sm">in JavaScript in Plain English <span className="text-gray-500">·Jul 15</span> <span>⭐Member-only</span> </p>
      </div>
      <div className="flex space-x-4">
        <div className="w-5/6">
          <p className="sm:text-xl  text-md font-bold">
            10 Life-Saving Utillity Classers in Node.js
          </p>
          <div className=" pt-0.5 hidden sm:block  ">
            <p className=" truncate-height ">
              Writing efficient and reusable code is a core principle of modern
              software development. With teh advent of Node.js, developers have
              gained the aility to constuct adn us classes that cand reducce
              code.writing efficient and reusable code is a core principle of
              modern software development. With teh advent of Node.js,
              developers have gained the aility to constuct
            </p>
          </div>
        </div>
        <div className="">
          <img
            src="../sample.png"
            alt="image"
            className="w-20 h-14 sm:w-24  sm:h-24  "
          />
        </div>
      </div>
      <div id="footer" className="flex justify-between mt-6 sm:w-5/6">
        <div className="flex space-x-2 text-sm">
          <button className=" rounded-2xl px-3 bg-slate-100">Node.js</button>
          <p>4 min read</p>
        </div>
        <div className="flex space-x-4">
          <BookmarkAddOutlined />
          <RemoveCircleOutlineOutlined />
          <MoreHorizOutlined />
        </div>
      </div>
    </div>
  );
};
