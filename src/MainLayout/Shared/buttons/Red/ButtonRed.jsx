// import "./buttonRed.css";

const ButtonRed = ({ titleRed }) => {
  return (
    <>
    {/* removed mb-2 tailwind class from the button tag by -Tanbir for design purpose */}
      <button className="w-full h-full p-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#ec3323] text-white relative overflow-hidden group z-10 hover:text-white duration-1000">
        <span className="absolute  bg-[#002172] w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-900 duration-500 origin-center transform transition-all"></span>
        {titleRed}
      </button>
    </>
  );
};

export default ButtonRed;
