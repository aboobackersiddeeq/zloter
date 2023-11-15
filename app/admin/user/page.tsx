 
import Navbar from "@/components/adiminComponetns/Navbar"
import Sidebar from "@/components/adiminComponetns/Sidebar"
import UserCard from "@/components/adiminComponetns/UserCard"

 
 
 const page = () => {
   return (
    <div className="flex">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="w-full">

      <Navbar />
        <div className="p-2 ">
            <h1 className="text-2xl p-4 text-blue-400  mb-5">User Management</h1>
           <div className=" flex  flex-wrap  ">
              <UserCard />
              <UserCard/>
              <UserCard/>
              <UserCard/>
              <UserCard/>
           </div>
        </div>
      </div>
    </div>
   )
 }
 
 export default page
