import { Helmet } from "react-helmet";
import PageBanner from "../../../Shared/banner for pages/PageBanner";
import { useState } from "react";
import useBlogsComment from "../../../../Hooks/useBlogsComment";
import useCommentsReply from "../../../../Hooks/useCommentsReply";
import { useLoaderData, useParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import useAuth from "../../../../Hooks/useAuth";
import CommentForm from "../CommentForm";
import CommentReplyForm from "../CommentReplyForm";
import ButtonRed from "../../../Shared/buttons/Red/ButtonRed";

const NewBlogsDetails = () => {
    const { user } = useAuth();
    // const axiosPublic = useAxiosPublic();
    const [showReply, setShowReply] = useState("");
    // console.log(showReply)
    const blogs = useLoaderData();
    const [comments, refetch] = useBlogsComment();
    const [commentsReply] = useCommentsReply();
    console.log(commentsReply);
    const { id } = useParams();
    const blog = blogs.find((item) => item._id == id);
    const currentUserBlogs = blogs.filter((item) => item.bloggerInfo.bloggerEmail == user?.email)
    const newComments = comments.filter((item) => item.blogId == blog._id);

    return (
        <>
            <Helmet>
                <title>Rentify | Blogs Details</title>
            </Helmet>
            <div>
                <PageBanner
                    heading={"Blogs"}
                    title={"Blogs Details"}
                    img={"https://i.ibb.co/M6r72CP/breadcrumb-4.jpg"}
                />
            </div>
            <div className=" w-[95%] mx-auto mb-5">
                {/* blogs title */}
                <div>
                    <h2 className=" text-2xl font-bold my-4">{blog?.title}</h2>
                </div>
                <div className=" flex md:flex-row flex-col justify-center items-start gap-7">
                    {/* Left site */}
                    <div className=" md:w-[65%] w-full">
                        {/* blog details */}
                        <div className=" border shadow-xl rounded" >
                            <img className=" rounded-t-md md:h-[700px] h-[500px] w-full" src={blog?.img} alt="" />
                            <div className=" p-5 text-slate-400">
                                <h2>{blog?.details.slice(0, 310)}</h2>
                                <p className="text-slate-400 italic border-x-4 border-[#002172] rounded-ss-xl rounded-ee-xl my-3 p-3">{blog?.details.slice(310, 504)}</p>
                                <h2>{blog?.details.slice(504,)}</h2>
                            </div>
                        </div>
                        {/* Comment section */}
                        <div>
                            <div className="border items-center gap-8 px-5 my-7">
                                <h2 className=" text-3xl font-bold mt-2">
                                    {newComments.length} comment
                                </h2>
                                {/* Comment */}
                                {newComments.map((comment) => (
                                    <div key={comment._id} className="border-b py-6 px-5 my-7">
                                        <div>
                                            {/* main comment part */}
                                            <div className=" flex md:flex-row flex-col justify-start items-center gap-8 mb-2">
                                                {/* main comment photo part */}
                                                <img
                                                    className="h-28 w-28 rounded-full"
                                                    src={comment?.img}
                                                    alt=""
                                                />
                                                {/* main comments name, date and message part */}
                                                <div className=" w-full">
                                                    <div className=" flex justify-between">
                                                        <div>
                                                            <h2 className=" text-3xl font-bold mb-1">
                                                                {comment?.name}
                                                            </h2>
                                                            <p className=" text-gray-400 mb-3">{comment?.date}</p>
                                                        </div>
                                                        <div>
                                                            <button onClick={() => setShowReply(comment._id)}>
                                                                <ButtonRed titleRed={`Reply`}></ButtonRed>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <p className=" leading-8 text-xl text-gray-400">
                                                        {comment?.message}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* comments reply part */}
                                        <div className=" w-[80%] mx-auto">
                                            <h2 className=" text-xl font-bold mb-3 mt-1">
                                                Reply Comments
                                            </h2>
                                            {commentsReply.map((item) => (
                                                <div key={item._id}>
                                                    {/* total replays get*/}
                                                    {item.commentId == comment._id ? (
                                                        <div>
                                                            <div className=" flex md:flex-row flex-col justify-start items-center gap-3 mb-2">
                                                                {/* reply photo part */}
                                                                <img
                                                                    className="h-12 w-12 rounded-full"
                                                                    src={item?.replierPhoto}
                                                                    alt=""
                                                                />
                                                                {/* name, date and message part */}
                                                                <div className=" w-full">
                                                                    <div className=" flex justify-between">
                                                                        <div>
                                                                            <h2 className=" font-bold">
                                                                                {item?.replierName}
                                                                            </h2>
                                                                            <p className=" text-gray-400 text-sm">
                                                                                {item?.date}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <p className="leading-5 text-sm text-gray-400">
                                                                        {item?.message}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                        {/* CommentReplyForm section */}
                                        <div>
                                            {showReply == comment._id ? (
                                                <CommentReplyForm
                                                    comment={comment}
                                                    refetch={refetch}
                                                ></CommentReplyForm>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </div>
                                ))}
                                {/* Form section */}
                                <div>
                                    <h2 className=" text-3xl font-bold my-3">Leave A Comment</h2>
                                    {/* <p className=" text-xl text-gray-400">
                                    Your email address will not be published. Required fields are  marked</p> */}
                                    {/* comment form */}
                                    <CommentForm blog={blog} refetch={refetch} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right site */}
                    <div className=" border shadow-xl p-5 rounded md:w-[35%] w-full">
                        {/* Search bar part */}
                        <div>
                            <label className="font-bold text-lg mb-3">Search Blogs</label>
                            <form>
                                <div className=" bg-white px-2 rounded-md flex items-center my-3 mr-3">
                                    <FaSearch className=" text-black absolute ml-2"></FaSearch>
                                    <input className=" text-black bg-none pl-7 py-1 pr-2 rounded w-full border" placeholder="Search your destination....." type="text" name="" id="" />
                                </div>
                            </form>
                        </div>
                        {/* Recent blogs part */}
                        <div>
                            <h2 className=" text-xl font-bold my-3">Recent post</h2>
                            <div>
                                {
                                    currentUserBlogs?.map((item) => (
                                        <div key={item._id} className=" flex items-center gap-2">
                                            <img className=" w-24 h-16 rounded-lg" src={item?.img} alt="" />
                                            <div>
                                                <h2 className=" font-bold">{item?.title}</h2>
                                                <h2 className=" text-slate-400">{item?.date}</h2>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewBlogsDetails;