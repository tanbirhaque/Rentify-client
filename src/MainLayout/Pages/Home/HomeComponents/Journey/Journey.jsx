import CommonHeading from "../../../../Shared/CommonHeading/CommonHeading";


const Journey = () => {
    return (
        <>
            <div className="max-w-screen-xl mx-auto">
                <div className="px-80">
                    <CommonHeading small={'Your Journey with us'} big={"What Kind Of Place You Are Looking For?"}></CommonHeading>
                </div>
                <div className="grid justify-center lg:grid-cols-3 gap-4 mt-7 px-6">
                    <div className="max-w-96 bg-base-100 shadow-xl mb-10">
                        <img src="https://i.ibb.co/W6B2pVK/simple-3.jpg?fbclid=IwAR2CsSxxKc3VwG-W6v3DT_ZQg2tdbna4372J12-wV4U6fO0sWzoMN8Mz5sc" alt="" />
                        <div className="card-body">
                            <h1 className="text-xl font-semibold">Apartment Life</h1>
                            <p>Lorem ipsum dolor sit amet consec tet adipisicing elit. Reprehe nderit volupta labore error amet.</p>
                            <button className="text-[#e33226] card-actions justify-start">view more </button>
                        </div>

                    </div>
                    <div className="max-w-96 bg-base-100 shadow-xl mb-10">
                        <img src="https://i.ibb.co/W6B2pVK/simple-3.jpg?fbclid=IwAR2CsSxxKc3VwG-W6v3DT_ZQg2tdbna4372J12-wV4U6fO0sWzoMN8Mz5sc" alt="" />
                        <div className="card-body">
                            <h1 className="text-xl font-semibold">Apartment Life</h1>
                            <p>Lorem ipsum dolor sit amet consec tet adipisicing elit. Reprehe nderit volupta labore error amet.</p>
                            <button className="text-[#e33226] card-actions justify-start">view more </button>
                        </div>

                    </div>
                    <div className="max-w-96 bg-base-100 shadow-xl mb-10">
                        <img src="https://i.ibb.co/W6B2pVK/simple-3.jpg?fbclid=IwAR2CsSxxKc3VwG-W6v3DT_ZQg2tdbna4372J12-wV4U6fO0sWzoMN8Mz5sc" alt="" />
                        <div className="card-body">
                            <h1 className="text-xl font-semibold">Apartment Life</h1>
                            <p>Lorem ipsum dolor sit amet consec tet adipisicing elit. Reprehe nderit volupta labore error amet.</p>
                            <button className="text-[#e33226] card-actions justify-start">view more </button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Journey;