import { useEffect, useState } from "react";
import './Chatbox.css'
import { getMessages } from "../ChatApi/MessageRequest";
import { format } from "timeago.js";
import InputEmoji from 'react-input-emoji'
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import ButtonRed from "../../../Shared/buttons/Red/ButtonRed";

const Chatbox = ({ chat, currentUserId, setSendMessage, receiveMessage, chats, onlineUsers }) => {
    const axiosPublic = useAxiosPublic();
    const [userData, setUserData] = useState([])
    const [online, setOnline] = useState(false)
    const [messages, setMessages] = useState(null)
    const [newMessage, setNewMessage] = useState("")
    // console.log(currentUserId);
    const userId = chat?.members?.find((id) => id !== currentUserId)
    // console.log(userId);
    console.log(online);

    // online offline condition
    // const chatMember = chat.members.find((member) => member !== currentUser?._id)
    // const online = onlineUsers.find((user) => user.userId === chatMember)
    // return online ? true : false

    const checkOnlineStatus = (chat) => {
        const chatMember = chat.members.find((member) => member !== currentUserId)
        const online = onlineUsers.find((user) => user.userId === chatMember)
        setOnline(online)
    }

    useEffect(() => {
        chats.map((chat) => (
            checkOnlineStatus(chat)
        ))
    }, [chats])


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
                console.log(data);
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
        <div>
            <div className="ChatBox-container">
                <>
                    <div className="Chat-header p-3">
                        {/* Chatbox header */}
                        <div className="follower">
                            <div className="flex items-center gap-2">
                                <img className="followerImage rounded-full h-[50px] w-[50px]" src={userData[0]?.image} alt="" />
                                <div className="name flex flex-col" style={{ fontSize: "0.8rem" }}>
                                    <span className="text-xl font-bold">{userData[0]?.name}</span>
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
                    <div className="chat-body">
                        {
                            messages?.map((message) => (
                                <div
                                    key={message._id}
                                    className={message?.senderId === currentUserId ? "message own" : "message"}>
                                    <span className=" font-bold cursor-default">{message?.text}</span>
                                    <span className=" cursor-auto">{format(message?.createdAt)}</span>
                                </div>
                            ))
                        }
                    </div>

                    {/* chat sender */}
                    <div className="chat-sender">
                        <div>+</div>
                        <div className=" h-[300px] w-full">
                            <InputEmoji
                                value={newMessage}
                                onChange={handleChange}
                                placeholder="Type a message"
                                fontSize={20}
                                height={80}
                            ></InputEmoji>
                        </div>
                        <div className=" btn" onClick={handleSend}>
                            <ButtonRed
                                titleRed={`Send`}
                            >
                            </ButtonRed>
                        </div>
                    </div>
                </>
            </div>
        </div>
    );
};

export default Chatbox;