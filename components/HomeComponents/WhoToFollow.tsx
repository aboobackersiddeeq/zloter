import { Avatar } from "@mui/material";

export const WhoToFollow = () => {
  return (
    <div>
      <h1 className="font-semibold my-5 mt-10">Who to follow</h1>
      <div className="mb-4">
        <div className="flex justify-between ">
          <div className="mr-3">
            <Avatar alt="" src=" " sx={{ width: 30, height: 30 }} />
          </div>
          <div>
            <p className="text-md font-extrabold   ">Carlos Arguelles</p>
            <p className="text-xs truncate-height-2">
              Cheif Decision scientist,Google. At cloudmize
            </p>
          </div>
          <div className="self-center">
            <button className="rounded-2xl text-sm border px-4 py-2  ">
              Follow
            </button>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex justify-between ">
          <div className="mr-3">
            <Avatar alt="" src=" " sx={{ width: 30, height: 30 }} />
          </div>
          <div>
            <p className="text-md font-extrabold   ">Carlos Arguelles</p>
            <p className="text-xs truncate-height-2">
              Cheif Decision scientist,Google. At cloudmize
            </p>
          </div>
          <div className="self-center">
            <button className="rounded-2xl text-sm border px-4 py-2  ">
              Follow
            </button>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex justify-between ">
          <div className="mr-3">
            <Avatar alt="" src=" " sx={{ width: 30, height: 30 }} />
          </div>
          <div>
            <p className="text-md font-extrabold   ">Carlos Arguelles</p>
            <p className="text-xs truncate-height-2">
              Cheif Decision scientist,Google. At cloudmize
            </p>
          </div>
          <div className="self-center">
            <button className="rounded-2xl text-sm border px-4 py-2  ">
              Follow
            </button>
          </div>
        </div>
      </div>

      <p className="text-xs text-green-600">See more suggestions</p>
    </div>
  );
};
