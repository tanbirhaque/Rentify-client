
const Conversation = ({ data, currentUserId }) => {
    const userId = data.members.find((id) => id !== currentUserId)
    console.log(userId);
    return (
        <div>
            <h2>Conversation</h2>
        </div>
    );
};

export default Conversation;