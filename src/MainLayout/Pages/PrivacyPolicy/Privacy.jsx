// This page make by Roknuzzaman sajib
// all fixed & full page created been responsive
import { NavLink } from "react-router-dom";
import { LuCopyCheck } from "react-icons/lu";
import { Helmet } from "react-helmet";
import PageBanner from "../../Shared/banner for pages/PageBanner";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Rentify | Privacy</title>
      </Helmet>
      <div>
        {/* banner section */}
        <PageBanner
          heading={"Our Privacy"}
          title={"Privacy Policy"}
          img={"https://i.ibb.co/y46DtNC/breadcrumb-2.jpg"}
        />
        {/* body section */}
        <div className="lg:max-w-screen-2xl w-11/12 mx-auto my-32">
          <div>
            {/* Information Collection */}
            <h3 className=" text-3xl font-bold mb-6">Information Collection</h3>
            <p className="text-xl space-y-5 text-gray-500">
              {" "}
              We collect personal information voluntarily provided by users,
              such as name, email, and phone number, to facilitate property
              inquiries and transactions. Additionally, we automatically gather
              data through cookies for website analytics and optimization.
              <br /> <br />
              We ensure transparency in our information collection practices,
              adhering to legal requirements and user preferences. Personal data
              collected is used solely for the purposes stated in our Privacy
              Policy, including but not limited to property inquiries,
              transaction processing, and user communication. Users have the
              option to manage cookie preferences and can opt out if desired.
              For more details on how we collect and use information, please
              refer to our Privacy Policy.
            </p>
            {/* Cookies section */}
            <h2 className=" text-3xl font-bold my-6">How We Use Cookies</h2>
            <p className=" text-xl space-y-4 text-gray-500">
              Cookies enhance user experience by remembering preferences and
              analyzing website traffic. They help us provide personalized
              content and improve functionality. Users can manage cookie
              preferences, though this may affect website functionality.
              Continued use implies consent to cookie usage per our Privacy
              Policy.
            </p>
            <div className=" mt-6 text-xl space-y-4 text-gray-500">
              <li className=" flex items-center justify-start gap-3 mb-6">
                <LuCopyCheck className=" text-red-500" />
                <p>
                  By continuing to browse our website, you consent to the use of
                  cookies.
                </p>
              </li>
              <li className=" flex items-center justify-start gap-3 mb-6">
                <LuCopyCheck className=" text-red-500" />
                <p>
                  Cookies are used to enhance your browsing experience and
                  provide personalized content.
                </p>
              </li>
              <li className=" flex items-center justify-start gap-3 mb-6">
                <LuCopyCheck className=" text-red-500" />
                <p>
                  We utilize cookies for website analytics, advertising, and
                  session management purposes.
                </p>
              </li>
              <li className=" flex items-center justify-start gap-3 mb-6">
                <LuCopyCheck className=" text-red-500" />
                <p>
                  Users can manage cookie preferences through their browser
                  settings or opt-out if desired.
                </p>
              </li>
              <li className=" flex items-center justify-start gap-3 mb-6">
                <LuCopyCheck className=" text-red-500" />
                <p>
                  Users can manage cookie preferences through their browser
                  settings or opt-out if desired.
                </p>
              </li>
            </div>
            {/* Data Protection section */}
            <h2 className=" my-6 text-3xl font-bold">Data Protection</h2>
            <p className="text-xl space-y-4 text-gray-500">
              We prioritize the security and confidentiality of your personal
              information. Robust measures are in place to safeguard against
              unauthorized access, alteration, or disclosure of data. Our
              protocols adhere to industry standards, ensuring the integrity of
              user information and maintaining user trust.
              <br />
              <br />
              Furthermore, access to personal data is restricted to authorized
              personnel only, who are bound by strict confidentiality
              obligations. Regular reviews and updates to our security measures
              are conducted to address emerging threats and vulnerabilities,
              ensuring continuous protection of user data. For detailed
              information on our data protection practices, please refer to our
              comprehensive Privacy Policy.
            </p>
            {/* Policy For data deletion */}
            <h2 className=" my-6 text-3xl font-bold">
              Data Retention and Deletion
            </h2>
            <p className=" text-xl space-y-4 text-gray-500">
              We retain personal information only as long as necessary for the
              purposes stated in our Privacy Policy. This includes managing
              property inquiries, processing transactions, and providing ongoing
              support. We adhere to strict retention periods based on data type
              and legal requirements.
              <br /> <br />
              Upon request or at the end of the retention period, we securely
              delete or anonymize personal data. Users can request data deletion
              from our Privacy Officer. However, certain data may be retained
              for legitimate business purposes or legal obligations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
