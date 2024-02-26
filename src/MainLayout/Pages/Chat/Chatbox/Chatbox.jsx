import { useEffect, useState } from "react";
import './Chatbox.css'
import { getMessages } from "../ChatApi/MessageRequest";
import { format } from "timeago.js";
import InputEmoji from 'react-input-emoji'
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Chatbox = ({ chat, currentUserId, setSendMessage, receiveMessage }) => {
    const axiosPublic = useAxiosPublic();
    const [userData, setUserData] = useState([])
    const [messages, setMessages] = useState(null)
    const [newMessage, setNewMessage] = useState("")
    // console.log(currentUserId);
    const userId = chat?.members?.find((id) => id !== currentUserId)
    // console.log(userId);

    useEffect(() => {
        if (receiveMessage !== null && receiveMessage.chatId === chat._id) {
            console.log(receiveMessage);
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
        if (message) {
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
                    <div className="Chat-header">
                        {/* Chatbox header */}
                        <div className="follower">
                            <div className="flex items-center gap-2">
                                <img className="followerImage rounded-full h-[80px] w-[80px]" src={userData[0]?.image} alt="" />
                                <div className="name flex flex-col" style={{ fontSize: "0.8rem" }}>
                                    <span className=" text-2xl font-bold">{userData[0]?.name}</span>
                                </div>
                            </div>
                        </div>
                        <hr className=" w-[85%] mx-auto border-2 mt-2" />
                    </div>
                    {/* Chat message */}
                    {/* own chat */}
                    <div className="chat-body">
                        {
                            messages?.map((message) => (
                                <div
                                    key={message._id}
                                    className={message.senderId === currentUserId ? "message own" : "message"}>
                                    <span>{message?.text}</span>
                                    <span>{format(message?.createdAt)}</span>
                                </div>
                            ))
                        }
                    </div>
                    {/* chat sender */}
                    <div className="chat-sender">
                        <div>+</div>
                        <InputEmoji
                            value={newMessage}
                            onChange={handleChange}
                        ></InputEmoji>
                        <div className=" btn btn-warning btn-outline" onClick={handleSend}>
                            Send
                        </div>
                    </div>
                </>
            </div>
        </div>
    );
};

export default Chatbox;