import { Avatar } from "@mui/material";

const RecommendedTopics = () => {
  return (
    <div>
      <h1 className="font-semibold my-5 mt-10">Recommended topics</h1>
       <div className="flex flex-wrap  w-full mb-4  ">
        <button className="rounded-2xl bg-slate-100 text-sm font-semibold p-2 px-4 m-1">Programming</button>
        <button className="rounded-2xl bg-slate-100 text-sm font-semibold p-2 px-4 m-1">writing</button>
        <button className="rounded-2xl bg-slate-100 text-sm font-semibold p-2 px-4 m-1">Self Improvment</button>
        <button className="rounded-2xl bg-slate-100 text-sm font-semibold p-2 px-4 m-1">Javascript</button>
        <button className="rounded-2xl bg-slate-100 text-sm font-semibold p-2 px-4 m-1">Amazon web</button>
       </div>

      <p className="text-xs text-green-600">See more topics</p>
    </div>
  );
};

export default RecommendedTopics;
