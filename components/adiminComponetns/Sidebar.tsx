import { HomeOutlined, PeopleAltOutlined } from "@mui/icons-material";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-white w-80 border p-3 h-screen  ">
      <h1 className=" py-1.5 p-3   text-xl font-extrabold mb-10">
        <span className="bg-red-600 text-white p-0.5 ">ZLO</span>TER
      </h1>
      <ul className="cursor-pointer space-y-1">
        <Link href='/admin'>
        <li className="p-3 hover:bg-slate-50 flex space-x-3">
          <HomeOutlined  />
          <h1>Dashboard</ h1>
        </li>
        </Link>
        <Link href="/admin/user" >
        <li className="p-3 hover:bg-slate-50 flex space-x-3">
          <PeopleAltOutlined />
          <h1>People</ h1>
        </li>
        </Link>
        
      </ul>
    </div>
  );
};

export default Sidebar;
