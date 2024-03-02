// conversation all routes designed and functionality all worked done by sajib 
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { getUser } from "./ChatApi/MessageRequest";

const Conversation = ({ data, currentUserId, online }) => {
    // console.log(currentUserId);
    const axiosPublic = useAxiosPublic()
    const [userData, setUserData] = useState(null)
    const userId = data.members.find((id) => id !== currentUserId)
    // console.log(userId);

    const url = `https://rentify-server-drab.vercel.app/users/find/${userId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [url]) 
    // console.log("fahima apu pic gayeb",userData);

    return (
        <div>
            <div className="follower-conversation">
                <div className=" flex items-center gap-2  relative cursor-pointer">
                    {online ?
                        <div className=" bg-[#A9FD2B] h-[15px] w-[15px] rounded-full absolute mb-9"></div>
                        :
                        <div className=" bg-red-500 absolute h-[15px] w-[15px] rounded-full mb-9"></div>
                    }
                    <img className="followerImage rounded-full h-[60px] w-[60px]" src={userData?.image} alt="" />
                    <div className="name flex flex-col" style={{ fontSize: "0.8rem" }}>
                        <span className=" text-xl font-bold ">{userData?.name}</span>
                        <span className=" font-bold">{online ? " Online" : " Offline"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Conversation;