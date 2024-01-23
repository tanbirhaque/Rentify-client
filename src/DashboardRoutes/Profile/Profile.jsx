import React from 'react';

const Profile = () => {
    return (
    //     <div className="holder  ">
    //   <div  className="card border w-[1350px] hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5 h-[400px]">
    //     <img
    //       className="max-h-20 w-full h-[300px] opacity-80 absolute top-0"
    //       style={{ zIndex: -1 }}
    //       src="https://unsplash.com/photos/h0Vxgz5tyXA/download?force=true&w=640"
    //       alt=""
    //     />
    //     <div className="profile w-full flex m-3 ml-4 text-white">
    //       <img
    //         className="w-28 h-28 p-1 bg-white rounded-full"
    //         src="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
    //         alt=""
    //       />
    //       <div className="title mt-11 ml-3 font-bold flex flex-col">
    //         <div className="name break-words">Sarah</div>
    //         {/*  add [dark] class for bright background */}
    //         <div className="add font-semibold text-sm italic dark">Model</div>
    //       </div>
    //     </div>
    //     <div className="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
    //       <div className="add border rounded-l-2xl rounded-r-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">
    //         Contact
    //       </div>
    //       {/* <div className="add border rounded-r-2xl rounded-l-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">Bio</div> */}
    //     </div>
    //   </div>
    // </div>

 
    <div className="holder w-[1350px]  mx-auto">
    <div className="card border h-[400px]  hover:shadow-none relative flex flex-col mx-auto m-5">
     <div className='w-full '>
     <img
        className=" w-full  h-[200px]  opacity-80"
        style={{ zIndex: -1 }}
        src="https://i.ibb.co/SvDkgSC/03.png"
        alt=""
      />
     </div>
      <div className="profile w-full flex m-3 ml-4 text-white">
        <img
          className="w-36 h-36 p-1 bg-white rounded-full  absolute -mt-20"
          src="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
          alt=""
        />
       
      </div>
      
      <div className="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
        <div className="add border rounded-2xl rounded-r-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">
          Contact
        </div>
        
      </div>
      <div>
        <h2 className='text-3xl ml-44 font-bold'>Sarah Afrin</h2>
        <h2 className='text-gray-600 ml-44 font-normal'>sarah@rentify.com</h2>
      </div>
    </div>
   
    <div>
    <nav className="flex" aria-label="Navigation">
      <ul className="flex space-x-4">
        <li className="list-none">
          <a href="/#" className="text-blue-500" aria-current="page">
            Active
          </a>
        </li>
        <li className="list-none">
          <a href="/#" className="text-blue-500">
            Link
          </a>
        </li>
        <li className="list-none">
          <a href="/#" className="text-blue-500">
            Link
          </a>
        </li>
        <li className="list-none">
          <a href="/#" className="text-gray-400 cursor-not-allowed" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>
    </nav>
    </div>
  </div>
    );
};

export default Profile;