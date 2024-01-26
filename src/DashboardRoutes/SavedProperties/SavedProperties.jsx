import { NavLink } from "react-router-dom";
import './Saved.css'
import SavedCards from "./SavedCards";


const SavedProperties = () => {
    return (
        <div>
            <div className="savedbgimg">
                <div className=" bg-[#000000B2] rounded-lg">
                    <div className=" max-w-screen-2xl mx-auto py-24 w-[1350px] ">
                        <h2 className="text-6xl font-bold text-white font-serif pl-4">Saved Properties</h2>
                        <p className="text-lg font-normal text-gray-200 font-serif pl-4 pt-4">All Your Saved Properties will be displayed here</p>
                    </div>
                </div>
            </div>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <SavedCards></SavedCards>
                <SavedCards></SavedCards>
                <SavedCards></SavedCards>
                <SavedCards></SavedCards>
                <SavedCards></SavedCards>
                <SavedCards></SavedCards>
            </div>
        </div>
    );
};

export default SavedProperties;
