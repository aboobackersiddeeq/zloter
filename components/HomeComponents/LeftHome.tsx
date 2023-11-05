import HomeNavbar from "./HomeNavbar";
import { PostCard } from "./PostCard";

const LeftHome = () => {
  return (
    <div className="lg:pr-12" >
      <br />
      <HomeNavbar/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
    </div>
  );
};

export default LeftHome;
