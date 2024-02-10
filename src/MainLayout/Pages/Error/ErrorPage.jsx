//component added by "Fahima"

import { Link } from "react-router-dom";
import Button from "../../Shared/buttons/Button";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 mt-20">
      <img src="https://i.ibb.co/DVpjDHx/404.png" alt="error-page" />
      <h1 className="text-4xl font-semibold">Oops! Page Not Found</h1>
      <p className="text-[#666666] text-base text-center">
        The page you are looking for might have been removed had its name <br />
        changed or is temporarily unavailable.
      </p>
      <Link to="/">
        <Button
          initialColor={"#002172"}
          title={"Back To Home"}
          padding={"14px 35px"}
        />
      </Link>
    </div>
  );
};

export default ErrorPage;
