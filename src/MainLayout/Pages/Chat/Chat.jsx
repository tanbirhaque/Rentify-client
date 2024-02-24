import { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import LogoSearch from '../../Shared/logoSearch/LogoSearch';
import './Chat.css'
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAllUser from '../../../Hooks/useAllUser';
import Conversation from './Conversation';

const Chat = () => {
    const axiosPublic = useAxiosPublic()
    const [users] = useAllUser();
    const { user } = useAuth();
    const currentUser = users.find((item) => item.email === user?.email)
    console.log(currentUser?._id);
    const { data: chats = [], refetch } = useQuery({
        queryKey: ['chats'],
        queryFn: async () => {
            // when data import from database then chage the url & use axios public 
            const res = await axiosPublic.get(`/chat/${currentUser?._id}`)
            console.log(res.data)
            return res.data;
        }
    })
    console.log(chats);

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
                                    <div key={chat._id}>
                                        <Conversation
                                            data={chat}
                                            currentUserId={currentUser?._id}
                                        ></Conversation>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* Right side */}
                <div className="Right-side-chat">
                    <h3>Right chats</h3>
                </div>
            </div>
        </div>
    );
};

export default Chat;

