import { NavLink } from "react-router-dom";
import './privacy.css'

const Privacy = () => {
    return (
        <div>
            <div className="privacybgimg">
                <div className=" bg-[#000000B2]">
                    <div className=" max-w-screen-2xl mx-auto py-24">
                        <h2 className="text-6xl font-bold text-white font-serif">Bog Grid</h2>
                        <div className="mt-2">
                            <NavLink to='/' className='navAfter relative font-medium text-base text-white mx-3'>Home</NavLink>
                            <NavLink to='/privacy' className='navAfter relative font-medium text-base text-white mx-3 '>Privacy Policy</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    {/* Informaion Collection */}
                    <h3 className=" text-3xl font-bold space-y-3">Information Collection</h3>
                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla minus quasi. Voluptatem, company name saepe ullam autem magni quod sint tempore, eius molestias aliquam debitis. Neque saepe dignissimos repudiandae fuga.
                        <br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eveniet quas dignissimos activities ea pariatur corrupti rerum deserunt, ipsum, ipsa eos veniam aspernatur fuga, optio soluta? Libero neque reiciendis cupiditate dolores nam. Earum eius similique sapiente. Iure, sit non. At fuga ipsam veniam.
                    </p>
                    {/* Cookies section */}
                    <h2 className=" text-3xl font-bold my-5">How We Use Cookies</h2>
                    <p className=" space-y-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eveniet quas dignissimos doloribus ea pariatur corrupti rerum deserunt, ipsum, ipsa eos veniam aspernatur fuga, optio soluta? Libero neque reiciendis cupiditate dolores nam. Earum eius similique sapiente. Iure, sit non. At fuga ipsam veniam.
                    </p>
                    {/* Collection, Process, and Use of Personal Data section */}
                    <h2 className=" text-3xl font-bold my-5">The Collection, Process, and Use of Personal Data</h2>
                    <p className=" space-y-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla minus quasi. Voluptatem, facilis saepe ullam autem magni quod sint tempore, eius molestias aliquam debitis. Neque saepe dignissimos repudiandae fuga.
                    </p>
                    {/* Protection section */}
                    <h2 className=" my-5 space-y-3">Data Protection</h2>
                    
                </div>
            </div>
        </div>
    );
};

export default Privacy;