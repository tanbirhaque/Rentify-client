import { FaSearch } from "react-icons/fa";
import './LogoSearch.css'
const LogoSearch = () => {
    return (
        <div className="LogoSearch">
            <img src="https://i.ibb.co/XXScbkc/logo.png" alt="" />
            <div className="Search">
                <input type="text" placeholder="#Explore" />
                <div className="s-icon">
                    <FaSearch></FaSearch>
                </div>
            </div>
        </div>
    );
};

export default LogoSearch;