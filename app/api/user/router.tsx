import User from "@/models/User";
import { connectToDB } from "@/utils/Database"

export const GET =async (req:string) => {
    try {
        await connectToDB();
        const users = await User.find({})
        return new Response(JSON.stringify(users),{status:200})
    } catch (error) {
        return new Response("Failed to fetch all prompts",{status : 500})
        
    }
}