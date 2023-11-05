import { Avatar } from "@mui/material"

 
const RecentlySaved = () => {
  return (
    <div>
      <h1 className="font-semibold my-5 mt-10">Recently saved</h1>
      <div className="mb-4">
        <div className="flex">
          <img src="../sample.png" alt="img" className="w-6 h-6 mr-1"/>
          <p className="text-xs  p-1 ">The woman in javascript in plain English</p>
        </div>
        <h2 className="font-extrabold text-sm my-2 ">
          How I scaled Amazon’s Load Generator to run on 1000s of machines
        </h2>
        <p className="text-sm">Jun 2 <span>. 4 min read</span> <span>⭐</span></p>
      </div>
       

      
      <p className="text-xs text-green-600">See all(2)</p>
    </div>
  )
}

export default RecentlySaved