//component added by "Fahima"

import CommonHeading from "../../Shared/CommonHeading/CommonHeading";

const Story = () => {
  return (
    <div className="p-20">
      <CommonHeading small={"About Us"} big={"Rentify Awesome Story"} />
      <div className="flex justify-center items-center text-[#666666] max-w-[546px] mx-auto text-center md:my-5">
        <p>
          Smart Home Design offers remote control of appliances, energy
          optimization, and advanced security, ensuring convenience, efficiency,
          and peace of mind through personalized AI integration.
        </p>
      </div>
      {/* img div */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
        <img
          src="https://i.ibb.co/KWXJyYN/about-img-4.jpg"
          alt="about-img"
          className="rounded-lg"
        />
        <img
          src="https://i.ibb.co/w0jRnHD/about-img-5.jpg"
          alt="about-img"
          className="rounded-lg"
        />
        <img
          src="https://i.ibb.co/dGNVPZ8/about-img-6.jpg"
          alt="about-img"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Story;
