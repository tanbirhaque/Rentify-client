

const BuyReqCard = ({ items }) => {

    const { _id, requesterPhoto,requesterNumber,requesterEmail,requesterMessage,requesterName,family,children} = items
    return (
        <>
            
            <div className="card card-compact max-w-[414px] mt-10 rounded-none bg-base-100 shadow-md mx-auto mb-1">
                <figure className="w-full h-[294px]">
                    <img className="w-full h-full" src={requesterPhoto}  />

                </figure>
                <h1>{requesterNumber}</h1>
                <h1>{requesterMessage}</h1>
                <h1>{requesterEmail}</h1>
                <h1>{requesterName}</h1>
                <h1>{family}</h1>
                <h1>{children}</h1>
                <div className="card-body">
                    <button>accpet</button>
                    <button>reject</button>
                   
                  
                </div>
            </div>
        </>
    );
};

export default BuyReqCard;