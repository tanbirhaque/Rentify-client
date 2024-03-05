import { NavLink, useLoaderData } from "react-router-dom";
import "./Saved.css";
import SavedCards from "./SavedCards";
import useSavedProperties from "../../../Hooks/useSavedProperties";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import PageBanner from "../../../MainLayout/Shared/banner for pages/PageBanner";
import savedBannerImg from "../../../assets/home-1/property-1.jpg"

const SavedProperties = () => {
  const { user, loading } = useContext(AuthContext);
  const [saved, refetch] = useSavedProperties();
  // console.log(saved);

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  return (
    <div className="bg-[#f3f3f3]">
      {/* <div className="savedbgimg">
        <div className=" bg-[#000000B2] rounded-lg">
          <div className=" max-w-screen-2xl mx-auto py-24 w-[1350px] ">
            <h2 className="text-6xl font-bold text-white font-serif pl-4">
              Saved Properties
            </h2>
            <p className="text-lg font-normal text-gray-200 font-serif pl-4 pt-4">
              All Your Saved Properties will be displayed here
            </p>
          </div>
        </div>
      </div> */}
      <div>
        <PageBanner heading={"Saved Properties"} img={savedBannerImg} title={"Dashboard"}></PageBanner>
      </div>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-y-10 gap-x-8  px-5 lg:px-16">
        {saved.map((item) => (
          <SavedCards key={item._id} item={item} refetch={refetch}></SavedCards>
        ))}
      </div>
    </div>
  );
};

export default SavedProperties;
