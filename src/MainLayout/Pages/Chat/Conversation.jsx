import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";

const Conversation = ({ data, currentUserId, online }) => {
    const axiosPublic = useAxiosPublic()
    const [userData, setUserData] = useState([])
    const userId = data.members.find((id) => id !== currentUserId)
    // console.log(userId);
    const url = `http://localhost:5000/users/find/${userId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [url])
    console.log(userData);

    return (
        <div>
            <div className="follower-conversation">
                <div className=" flex items-center gap-1 mb-3 bg-[#f8f7f7 ] hover:bg-[#e8e6e6] py-3 pl-3 rounded-md">
                    {online && <div className="online-dot ml-8 mb-12"></div>}
                    <img className="followerImage rounded-full h-[60px] w-[60px]" src={userData[0]?.image} alt="" />
                    <div className="name flex flex-col" style={{ fontSize: "0.8rem" }}>
                        <span className=" text-xl font-bold">{userData[0]?.name}</span>
                        <span className=" font-bold">{online ? "Online" : "Offline"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Conversation;