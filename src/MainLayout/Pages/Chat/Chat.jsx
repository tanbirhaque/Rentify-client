// chat all routes designed and functionality all worked done by sajib 
import { useEffect, useRef, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import './Chat.css'
import useAxiosPublic from '../../../Hooks/useAxiospublic';
import useAllUser from '../../../Hooks/useAllUser';
import Conversation from './Conversation';
import { Link, useParams } from 'react-router-dom';
import { CiSettings } from 'react-icons/ci';
import Chatbox from './Chatbox/Chatbox';
import { io } from "socket.io-client"
import { FaFacebookMessenger } from 'react-icons/fa';
import useGetRole from '../../../Hooks/useGetRole';

const Chat = () => {
    const axiosPublic = useAxiosPublic()
    const [chats, setChats] = useState([]);
    const [currentChat, setCurrentChat] = useState(null)
    console.log("look after ONLY chat:", chats);
    console.log("look after current chat:", currentChat);
    const [onlineUsers, setOnlineUsers] = useState([])
    const [sendMessage, setSendMessage] = useState(null)
    const params = useParams();
    // console.log("get current chat",currentChat)
    const [receiveMessage, setReceiveMessage] = useState(null)
    const [users] = useAllUser();
    const [userRole] = useGetRole();
    const { role } = userRole || {};
    const { user } = useAuth();
    const socket = useRef();
    const currentUser = users.find((item) => item.email === user?.email)

    // data send on socket io
    useEffect(() => {
        if (sendMessage !== null) {
            socket.current.emit("send-message", sendMessage)
        }
    }, [sendMessage])

    // get current users data by use fetch
    const url = `http://localhost:5000/chat/${currentUser?._id}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setChats(data))
    }, [url])
    // console.log(chats);

    // Chatbox redirect  useEffect chats data get by use fetch
    const memberUrl = `http://localhost:5000/chat/find/${params?.id}/${currentUser?._id}`;
    useEffect(() => {
        fetch(memberUrl)
            .then(res => res.json())
            .then(data => setCurrentChat(data))
    }, [memberUrl])


    // socket io ref
    useEffect(() => {
        socket.current = io('http://localhost:8800')
        socket.current.emit("new-user-add", currentUser?._id)
        socket.current.on("get-users", (users) => {
            setOnlineUsers(users)
        })
    }, [currentUser])

    // received data on socket io
    useEffect(() => {
        socket.current.on("receive-message", (data) => {
            console.log("data receive in parent chat.jsx", data);
            setReceiveMessage(data)
        })
    }, [])

    const checkOnlineStatus = (chat) => {
        const chatMember = chat.members.find((member) => member !== currentUser?._id)
        const online = onlineUsers.find((user) => user.userId === chatMember)
        return online ? true : false
    }

    return (
        <div className=' w-[97%] mx-auto mt-5'>
            <h2 className=' text-xl font-bold ml-3 my-5'>Chat box</h2>
            <div className="flex md:flex-row flex-col justify-start items-start gap-3">
                {/* left side */}
                <div className="Left-side-chat border-2 w-[25%] h-screen p-4 rounded-xl">
                    {/* <LogoSearch></LogoSearch> */}
                    <div className="Chat-container">
                        {/* current user profile */}
                        <div className=' w-full flex flex-col items-center justify-center border-b pb-2'>
                            <img className=' h-[90px] w-[90px] rounded-full' src={user?.photoURL} alt="" />
                            <h2 className=' font-bold my-2'>{user?.displayName}</h2>
                            <h3 className=' text-slate-400'>{role}</h3>
                        </div>
                        <div className="Chat-list mt-2">
                            {
                                chats?.map((chat) => (
                                    <div key={chat._id} onClick={() => setCurrentChat(chat)}>
                                        <Conversation
                                            data={chat}
                                            currentUserId={currentUser?._id}
                                            online={checkOnlineStatus(chat)}
                                        ></Conversation>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* Right side */}
                <div className="Right-side-chat border-2 w-[75%] h-screen rounded-xl">
                    {/* Chatbox */}
                    {currentChat ?
                        <Chatbox
                            chat={currentChat}
                            currentUserId={currentUser?._id}
                            setSendMessage={setSendMessage}
                            receiveMessage={receiveMessage}
                            onlineUsers={onlineUsers}
                        ></Chatbox> :
                        <div className=' flex flex-col justify-center items-center gap-2 text-3xl font-bold mt-72 text-white'>
                            <div className="flex items-center bg-white p-4  w-70 rounded-md">
                                <FaFacebookMessenger
                                    className=' text-5xl font-bold text-[#002172]'
                                ></FaFacebookMessenger>
                                <h2 className="font-bold poppins-font text-2xl lg:text-[38px] ml-2 text-[#002172]"> <span className='text-[#e33226]'>Chat</span> with</h2>
                                <img
                                    className="w-[60px] ml-2"
                                    src="https://i.ibb.co/GsQpf2D/logo.png"
                                />
                                <h4 className="font-bold poppins-font text-2xl lg:text-[38px] ml-2 text-[#002172]">
                                    Renti<span className="text-[#e33226]">fy</span>
                                </h4>
                            </div>
                            <div className=' text-slate-600'>
                                Tap on a users to start conversation
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Chat;

