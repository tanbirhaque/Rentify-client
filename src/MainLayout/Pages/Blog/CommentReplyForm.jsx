import { useForm } from "react-hook-form";
import ButtonBlue from "../../Shared/buttons/Blue/ButtonBlue";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useCommentsReply from "../../../Hooks/useCommentsReply";

const CommentReplyForm = ({ comment }) => {
    const [, refetch] = useCommentsReply();
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    console.log(comment)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        if (user) {
            const commentsReply = {
                commentId: comment._id,
                replierName: user?.displayName,
                replierEmail: user?.email,
                replierPhoto: user?.photoURL,
                message: data.message,
                date: new Date().toLocaleDateString("en-GB"),
            }
            console.log(commentsReply)
            axiosPublic.post("/commentsReply", commentsReply).then((res) => {
                console.log(res.data);
                if (res.data) {
                    refetch();
                    Swal.fire(
                        `Hey ${user?.displayName}! Your comment Reply is successfully send`
                    );
                    reset();
                }
            });
        } else {
            // this login will allow user to add booking for their desired property only if they are user.
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Looks like you're not logged in!",
                footer: `<a href='/login' className='font-bold underline'>Please Log In</a>`,
                showConfirmButton: false,
            });
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" flex justify-center mb-2">
                    <input
                        {...register("message")}
                        placeholder="type your reply*"
                        required
                        className="py-3 bg-[#f1f0f0] rounded-md px-5 w-[70%]"
                    />
                    <ButtonBlue titleBlue={`send reply`}></ButtonBlue>
                </div>
            </form>
        </div>
    );
};

export default CommentReplyForm;