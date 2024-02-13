const Footer = () => {
  return (
    <div className="bg-[#f9f9f9]">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img
                className="mr-3"
                src="https://i.ibb.co/GsQpf2D/logo.png"
                alt="Website Logo Png from imgbb"
              />
              <span className="font-bold poppins-font text-[38px]">
                Renti<span className="text-[#002172]">fy</span>
              </span>
            </a>
            <p className="mt-2 lg:text-base text-sm font-medium text-gray-700">
              Rentify is one of the best and trusted real estate service provider for rent and sale property. 
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-[#002172] tracking-widest text-base mb-3">
              Popular Cities
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                  New York
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                  Sydney
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                  Dubai
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                  Florida
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-[#002172] tracking-widest text-base mb-3">
              About Us
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                    How We Work
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                    Our Team
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                    Help Center
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                    Privacy Policy
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-[#002172] tracking-widest text-base  mb-3">
                Contact Us
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                    Phone: +1 123-456-7890
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                    Email: @rentify.com
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                    Address: 123 Main Street
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                    Bussiness Hours: 24/7
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-[#002172]  tracking-widest text-base  mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                    Buildings
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                    Office Space
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                    Apartments
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                    Houses
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-black text-sm text-center sm:text-left font-semibold">
              © 2024 Rentify —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-black ml-1"
                target="_blank"
              >
               All rights reserved at <span className="text-black font-bold">@rentify.com</span>
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-[#002172]" href="https://www.facebook.com" target=" ">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="ml-3 text-[#002172]" href="https://twitter.com/home?lang=en" target=" ">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a className="ml-3 text-[#002172]" href="https://www.instagram.com" target=" ">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a className="ml-3 text-[#002172]" href="https://www.linkedin.com/feed" target=" ">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
