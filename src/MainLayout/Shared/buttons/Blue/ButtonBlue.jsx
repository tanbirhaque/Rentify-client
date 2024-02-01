// =============== Tanbir-Dev ===========================
const ButtonBlue = ({ titleBlue, padX='px-5', padY='py-2.5', textSize }) => {
  return (
    <>
      {/* dynamic button component to use anywhere. Do not change any class */}
      <button className={`font-semibold ${padX} ${padY} rounded-lg  ${textSize? textSize : 'text-sm' } text-center bg-[#002172] text-white relative overflow-hidden group z-10 hover:text-white duration-1000`}>
        <span className="absolute bg-[#Ec3323] w-52 h-40 left-1/2 -translate-x-1/2  top-1/2 -translate-y-2/4 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-900 duration-500 origin-center transform transition-all"></span>
        {titleBlue}
      </button>
    </>
  );
};

export default ButtonBlue;




// =============== Fahima-Dev ===============================
// const ButtonBlue = ({ titleBlue }) => {
//   return (
//     <>
//       {/* dynamic button component to use anywhere. Do not change any class */}
//       <button className="w-full h-full p-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 bg-[#002172] text-white relative overflow-hidden group z-10 hover:text-white duration-1000">
//         <span className="absolute bg-[#Ec3323] w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-900 duration-500 origin-center transform transition-all"></span>
//         {titleBlue}
//       </button>
//     </>
//   );
// };

// export default ButtonBlue;
