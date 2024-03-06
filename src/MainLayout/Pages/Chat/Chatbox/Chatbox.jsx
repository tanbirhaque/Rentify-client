// chatbox all routes designed and functionality all worked done by sajib 
import { useEffect, useState } from "react";
import './Chatbox.css'
import { getMessages } from "../ChatApi/MessageRequest";
import { format } from "timeago.js";
import InputEmoji from 'react-input-emoji'
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import ButtonRed from "../../../Shared/buttons/Red/ButtonRed";
import { FaRegClock } from "react-icons/fa";
import useAuth from "../../../../Hooks/useAuth";

const Chatbox = ({ chat, currentUserId, setSendMessage, receiveMessage, onlineUsers }) => {
    const axiosPublic = useAxiosPublic();
    const [userData, setUserData] = useState(null)
    const [messages, setMessages] = useState(null)
    const [newMessage, setNewMessage] = useState("")
    const { user } = useAuth();
    // console.log("current chat", chat);
    const userId = chat?.members?.find((id) => id !== currentUserId)
    // console.log(userId);
    // console.log(online);
    const chatMember = chat?.members?.find((member) => member !== currentUserId)
    const online = onlineUsers.find((user) => user.userId === chatMember)
    // console.log("", online);

    // receiveMessage useEffect
    useEffect(() => {
        if (receiveMessage !== null && receiveMessage.chatId === chat._id) {
            // console.log(receiveMessage)
            setMessages([...messages, receiveMessage])
        }
    }, [receiveMessage])

    // get user by use fetch
    const url = `http://localhost:5000/users/find/${userId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [url])


    // console.log(userData);

    // get message data by use useEffect
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const { data } = await getMessages(chat?._id)
                setMessages(data)
                // console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        if (chat !== null) fetchMessages();
    }, [chat])

    const handleChange = (newMessage) => {
        setNewMessage(newMessage)
    }

    const handleSend = (e) => {
        e.preventDefault()
        const message = {
            chatId: chat?._id,
            senderId: currentUserId,
            text: newMessage
        }
        if (message.text) {
            axiosPublic.post("/message", message)
                .then(res => {
                    setMessages([...messages, res.data])
                    setNewMessage("")
                    console.log(res.data)
                })
        }
        const receiverId = chat?.members?.find((id) => id !== currentUserId)
        setSendMessage({ ...message, receiverId })
    }


    return (
        <div className="min-h-[750px]">
            <div className="p-3">
                {/* Chatbox header */}
                <div className="follower">
                    <div className="flex items-center gap-2">
                        <img className="followerImage rounded-full h-[50px] w-[50px]" src={userData?.image} alt="" />
                        <div className="name flex flex-col" style={{ fontSize: "0.8rem" }}>
                            <span className="text-xl font-bold">{userData?.name}</span>
                            {/* header online condition */}
                            {online ?
                                <div className=" flex items-center gap-1">
                                    <div className=" bg-[#A9FD2B] h-[15px] w-[15px] rounded-full"></div>
                                    <h2 className=" font-bold ">online</h2>
                                </div>
                                : <div className="flex items-center gap-1">
                                    <div className=" bg-red-500 h-[15px] w-[15px] rounded-full"></div>
                                    <h2 className=" font-bold">offline</h2>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <hr className=" mx-auto mt-2" />
            </div>
            {/* Chat message */}
            {/* own chat */}
            <div className="chat-body overflow-y-auto chatScroll">
                {
                    messages?.map((message) => (
                        <div
                            key={message._id}
                            className={message?.senderId === currentUserId ? "flex self-end justify-end mt-5" : "flex mt-5"}>
                            <div className=" flex flex-col gap-3">
                                {/* user and owner condition */}
                                {message?.senderId === currentUserId ?
                                    <div>
                                        <div className="flex flex-row-reverse items-start gap-2">
                                            <img className=" h-[42px] w-[42px] rounded-full " src={user?.photoURL} alt="" />
                                            <div className=" flex flex-col justify-end items-end gap-1">
                                                <span className=" p-2 cursor-default border text-center rounded text-slate-400 ">{message?.text}</span>
                                                <span className=" cursor-auto text-slate-400 text-xs flex items-center gap-1"> <FaRegClock></FaRegClock> {format(message?.createdAt)}</span>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <div className="flex items-start gap-2">
                                            <img className=" h-[42px] w-[42px] rounded-full " src={userData?.image} alt="" />
                                            <div className="flex flex-col justify-start items-start gap-1">
                                                <span className=" p-2 cursor-default border text-center rounded text-slate-400">{message?.text}</span>
                                                <span className=" cursor-auto text-slate-400 text-xs flex items-center gap-1"> <FaRegClock></FaRegClock> {format(message?.createdAt)}</span>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* chat sender */}
            <div className=" flex items-center mt-7 mx-4">
                <div className=" w-full">
                    <InputEmoji
                        value={newMessage}
                        onChange={handleChange}
                        placeholder="Type a message"
                        fontSize={20}
                        borderRadius={8}
                    ></InputEmoji>
                </div>
                <div className="" onClick={handleSend}>
                    <ButtonRed
                        titleRed={`Send`}
                    >
                    </ButtonRed>
                </div>
            </div>
        </div>
    );
};

export default Chatbox;