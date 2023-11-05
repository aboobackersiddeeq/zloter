import { Avatar } from "@mui/material";

export const StaffPicks = () => {
  return (
    <div>
      <h1 className="font-semibold my-5 mt-12">Staff Picks</h1>
      <div className="mb-4">
        <div className="flex">
          <Avatar alt="" src=" " sx={{ width: 22, height: 22 }} />
          <p className="text-xs  p-1 ">Carlos Arguelles</p>
        </div>
        <h2 className="font-extrabold text-sm ">
          How I scaled Amazons Load Generator to run on 1000s of machines
        </h2>
      </div>
      <div className="mb-4">
        <div className="flex">
          <Avatar alt="" src=" " sx={{ width: 22, height: 22 }} />
          <p className="text-xs  p-1 ">Carlos Arguelles</p>
        </div>
        <h2 className="font-extrabold text-sm ">
          How I scaled Amazon’s Load Generator to run on 1000s of machines
        </h2>
      </div>
      <div className="mb-4">
        <div className="flex">
          <Avatar alt="" src=" " sx={{ width: 22, height: 22 }} />
          <p className="text-xs  p-1 ">Carlos Arguelles</p>
        </div>
        <h2 className="font-extrabold text-sm ">
          How I scaled Amazon’s Load Generator to run on 1000s of machines
        </h2>
      </div>

      
      <p className="text-xs text-green-600">See the full list</p>
    </div>
  );
};
