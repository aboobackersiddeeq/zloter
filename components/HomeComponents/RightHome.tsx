import RecentlySaved from "./RecentlySaved";
import RecommendedTopics from "./RecommendedTopics";
import { StaffPicks } from "./StaffPicks";
import { WhoToFollow } from "./WhoToFollow";
import { Footer } from "./Footer";

const RightHome = () => {
  return (
    <div className="w-full hidden lg:block lg:pl-3 ">
      <StaffPicks />
      <RecommendedTopics />
      <WhoToFollow/>
      <RecentlySaved/>
      <Footer/>
    </div>
  );
};

export default RightHome;
