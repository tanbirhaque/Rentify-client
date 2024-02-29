// This page make by Roknuzzaman sajib
// all fixed & full page created been responsive
import { LuCopyCheck } from "react-icons/lu";
import { Helmet } from "react-helmet";
import PageBanner from "../../Shared/banner for pages/PageBanner";

const Condition = () => {
  return (
    <>
      <Helmet>
        <title>Rentify | Condition</title>
      </Helmet>
      <div>
        {/* Banner section */}
        <PageBanner
          heading={"Our Terms and Condition"}
          title={"Terms & Conditions"}
          img={"https://i.ibb.co/yqkYvBM/breadcrumb-3.jpg"}
        />
        {/* Text section */}
        <div className="lg:max-w-screen-2xl w-11/12 mx-auto my-14">
          <div>
            <h2 className=" text-3xl font-bold mb-6">Legal Disclaimer </h2>
            <p className="text-xl space-y-5 text-gray-500">
              The information provided on Rentify&#39;s website is for general
              informational purposes only. While we strive to keep the
              information accurate and up-to-date, we make no representations or
              warranties of any kind, express or implied, about the
              completeness, accuracy, reliability, suitability, or availability
              with respect to the website or the information, products,
              services, or related graphics contained on the website for any
              purpose. Any reliance you place on such information is therefore
              strictly at your own risk.
            </p>
            <h2 className=" text-3xl font-bold my-6">
              Credit Reporting Terms of Service
            </h2>
            <p className=" text-xl space-y-3 text-gray-400">
              Access to credit reporting services provided by Rentify is subject
              to acceptance of the following terms. Users must provide accurate
              and complete information for credit reporting purposes and agree
              to use the services responsibly and in compliance with applicable
              laws.
            </p>
            <div className=" ml-4 mt-6 text-xl space-y-4 text-gray-500">
              <li className=" flex items-center justify-start gap-3 mb-6">
                <LuCopyCheck className=" text-red-500" />
                <p>Accurate and complete information required.</p>
              </li>
              <li className=" flex items-center justify-start gap-3 mb-6">
                <LuCopyCheck className=" text-red-500" />
                <p>Responsible usage in compliance with laws.</p>
              </li>
              <li className=" flex items-center justify-start gap-3 mb-6">
                <LuCopyCheck className=" text-red-500" />
                <p>No guarantee of report accuracy.</p>
              </li>
              <li className=" flex items-center justify-start gap-3 mb-6">
                <LuCopyCheck className=" text-red-500" />
                <p>User responsibility for review and verification.</p>
              </li>
              <li className=" flex items-center justify-start gap-3 mb-6">
                <LuCopyCheck className=" text-red-500" />
                <p>Rentify reserves right for suspension or termination.</p>
              </li>
            </div>
            <h2 className="text-3xl font-bold my-7">
              Ownership of Site Agreement to Terms of Use
            </h2>
            <p className="text-xl space-y-5 text-gray-500">
              Rentify owns and operates this website. By accessing or using our
              website, you agree to be bound by these Terms and Conditions. If
              you do not agree with any part of these terms, you may not access
              the website.
            </p>
            <h2 className=" text-3xl font-bold my-7">Provision of Services</h2>
            <p className=" text-xl space-y-3 text-gray-400">
              At Rentify, we are committed to delivering exceptional services
              tailored to meet the diverse needs of our customers. Our primary
              goal is to ensure that our services are reliable, accessible, and
              of the highest quality.
            </p>
            <div className=" ml-4 mt-6 text-xl space-y-4 text-gray-500">
              <li className=" flex items-center justify-start gap-3 mb-6">
                <LuCopyCheck className=" text-red-500" />
                <p>Maintain service availability and performance.</p>
              </li>
              <li className=" flex items-center justify-start gap-3 mb-6">
                <LuCopyCheck className=" text-red-500" />
                <p>Provide timely support and assistance.</p>
              </li>
              <li className=" flex items-center justify-start gap-3 mb-6">
                <LuCopyCheck className=" text-red-500" />
                <p>Continuously monitor and improve services.</p>
              </li>
              <li className=" flex items-center justify-start gap-3 mb-6">
                <LuCopyCheck className=" text-red-500" />
                <p>Welcome customer feedback for enhancements.</p>
              </li>
              <li className=" flex items-center justify-start gap-3 mb-6">
                <LuCopyCheck className=" text-red-500" />
                <p>Highly professional administration. </p>
              </li>
            </div>
            <h2 className=" text-3xl font-bold my-6">
              Limitation of Liability
            </h2>
            <p className="text-xl space-y-3 text-gray-400">
              In no event shall Rentify or its affiliates be liable for any
              direct, indirect, incidental, special, consequential, or punitive
              damages, including, but not limited to, loss of profits, data,
              use, goodwill, or other intangible losses arising out of or in any
              way connected with the use of or inability to use the website.
            </p>
            <h2 className=" text-3xl font-bold my-7">
              Accounts, Passwords and Security
            </h2>
            <p className=" text-xl space-y-3 text-gray-400">
              If you create an account on our website, you are responsible for
              maintaining the confidentiality of your account and password and
              for restricting access to your computer. You agree to accept
              responsibility for all activities that occur under your account or
              password. [Your Company Name] reserves the right to refuse
              service, terminate accounts, remove or edit content, or cancel
              orders at its sole discretion.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Condition;
