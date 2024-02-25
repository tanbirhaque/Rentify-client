import { useEffect, useRef, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import LogoSearch from '../../Shared/logoSearch/LogoSearch';
import './Chat.css'
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAllUser from '../../../Hooks/useAllUser';
import Conversation from './Conversation';
import { Link } from 'react-router-dom';
import { CiSettings } from 'react-icons/ci';
import Chatbox from './Chatbox/Chatbox';
import { io } from "socket.io-client"

const Chat = () => {
    const axiosPublic = useAxiosPublic()
    const [chats, setChats] = useState([]);
    const [currentChat, setCurrentChat] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const [sendMessage, setSendMessage] = useState(null)
    const [receiveMessage, setReceiveMessage] = useState(null)
    const [users] = useAllUser();
    const { user } = useAuth();
    const socket = useRef();
    const currentUser = users.find((item) => item.email === user?.email)
    console.log(currentUser?._id);

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
    console.log(chats);

    
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
        <div className=' w-[86%] mx-auto my-10'>
            <div className="Chat">
                {/* left side */}
                <div className="Left-side-chat">
                    <LogoSearch></LogoSearch>
                    <div className="Chat-container">
                        <h2>Left chats</h2>
                        <div className="Chat-List">
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
                <div className="Right-side-chat">
                    {/* Navbar in right side */}
                    <div className=' flex justify-end'>
                        <div className="navIcons flex justify-center items-center gap-10">
                            <Link to="../home">
                                <img src="https://i.ibb.co/n1Vkx0F/home.png" alt="" />
                            </Link>
                            <CiSettings className=' text-4xl from-bold' />
                            <img src="https://i.ibb.co/HDSYmVM/noti.png" alt="" />
                            <Link to="../chat">
                                <img src="https://i.ibb.co/qswp6SB/comment.png" alt="" />
                            </Link>
                        </div>
                    </div>
                    {/* Chatbox */}
                    {currentChat ?
                        <Chatbox
                            chat={currentChat}
                            currentUserId={currentUser?._id}
                            setSendMessage={setSendMessage}
                            receiveMessage={receiveMessage}
                        ></Chatbox> :
                        <div className=' text-3xl font-bold text-center mt-5'>
                            Tap on a chat to start conversation
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Chat;

