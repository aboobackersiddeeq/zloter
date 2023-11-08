import LeftHome from "@/components/HomeComponents/LeftHome";
import RightHome from "@/components/HomeComponents/RightHome";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="  lg:flex lg:justify-between  container mx-auto xl:px-28 2xl:px-52 md:px-4 ">
        <div className="lg:w-4/6">
          <LeftHome />
        </div>
        <div>
          <RightHome />
        </div>
      </div>
    </main>
  );
}
