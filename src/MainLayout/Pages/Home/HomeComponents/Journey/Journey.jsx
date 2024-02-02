// Journey section structure created by Konika Khan Developed and Design improvements by Tanbir
import CommonHeading from "../../../../Shared/CommonHeading/CommonHeading";
import "./Journey.css"

const Journey = () => {
    return (
        <>
            <div className="max-w-screen-xl mx-auto mb-[80px]">
                <div className="md:px-44 xl:px-80">
                    <CommonHeading small={'Your Journey with us'} big={"What Kind Of Place You Are Looking For?"}></CommonHeading>
                </div>
                <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6 mt-9 px-6  xl:px-0">
                    <div className="max-w-96 xl:min-w-[416px] bg-base-100 shadow-xl mb-10 advance_card relative transition-transform duration-300 ease-linear transform translate-y-0 hover:-translate-y-2">
                        <img src="https://angular.hibootstrap.com/enuf/assets/img/about/simple-1.jpg" alt="" />
                        <div className="p-5">
                            <h1 className="text-xl lg:text-[22px] poppins-font font-semibold text-black mb-2">Apartment Life</h1>
                            <p className="text-[#666666] mb-3">Lorem ipsum dolor sit amet consec tet adipisicing elit. Reprehe nderit volupta labore error amet.</p>
                            <button className="text-[#e33226] text-[16px] capitalize font-semibold card-actions justify-start">view more </button>
                        </div>
                    </div>
                    <div className="max-w-96 xl:min-w-[416px] bg-base-100 shadow-xl mb-10 advance_card relative transition-transform duration-300 ease-linear transform translate-y-0 hover:-translate-y-2">
                        <img src="https://angular.hibootstrap.com/enuf/assets/img/about/simple-2.jpg" alt="" />
                        <div className="p-5">
                            <h1 className="text-xl lg:text-[22px] poppins-font font-semibold text-black mb-2">Apartment Life</h1>
                            <p className="text-[#666666] mb-3">Lorem ipsum dolor sit amet consec tet adipisicing elit. Reprehe nderit volupta labore error amet.</p>
                            <button className="text-[#e33226] text-[16px] capitalize font-semibold card-actions justify-start">view more </button>
                        </div>
                    </div>
                    <div className="max-w-96 xl:min-w-[416px] bg-base-100 shadow-xl mb-10 advance_card relative transition-transform duration-300 ease-linear transform translate-y-0 hover:-translate-y-2">
                        <img src="https://i.ibb.co/W6B2pVK/simple-3.jpg?fbclid=IwAR2CsSxxKc3VwG-W6v3DT_ZQg2tdbna4372J12-wV4U6fO0sWzoMN8Mz5sc" alt="" />
                        <div className="p-5">
                            <h1 className="text-xl lg:text-[22px] poppins-font font-semibold text-black mb-2">Apartment Life</h1>
                            <p className="text-[#666666] mb-3">Lorem ipsum dolor sit amet consec tet adipisicing elit. Reprehe nderit volupta labore error amet.</p>
                            <button className="text-[#e33226] text-[16px] capitalize font-semibold card-actions justify-start">view more </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Journey;