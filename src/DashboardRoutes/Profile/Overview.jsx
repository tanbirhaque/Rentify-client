

const Overview = () => {
    return (
        <div>
             <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/94.jpg"
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                  alt="Profile"
                />
                <h1 className="text-xl font-bold">John Doe</h1>
                <p className="text-gray-700">Software Developer</p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <a
                    href="#"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                  >
                    Contact
                  </a>
                
                </div>
              </div>
              <hr className="my-6 border-t border-gray-300" />
            
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">About Me</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                finibus est vitae tortor ullamcorper, ut vestibulum velit
                convallis. Aenean posuere risus non velit egestas suscipit.
                Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis
                in faucibus orci luctus et ultrices posuere cubilia Curae;
                Aliquam erat volutpat. Nulla vulputate pharetra tellus, in
                luctus risus rhoncus id.
              </p>

              <h3 className="font-semibold text-center mt-3 -mb-2">Find me on</h3>
              <div className="flex justify-center items-center gap-6 my-6">
                <a
                  className="text-gray-700 hover:text-orange-600"
                  aria-label="Visit LinkedIn"
                  href=""
                  target="_blank"
                >
                  {/* LinkedIn SVG */}
                </a>
                <a
                  className="text-gray-700 hover:text-orange-600"
                  aria-label="Visit YouTube"
                  href=""
                  target="_blank"
                >
                  {/* YouTube SVG */}
                </a>
                <a
                  className="text-gray-700 hover:text-orange-600"
                  aria-label="Visit Facebook"
                  href=""
                  target="_blank"
                >
                  {/* Facebook SVG */}
                </a>
                <a
                  className="text-gray-700 hover:text-orange-600"
                  aria-label="Visit Instagram"
                  href=""
                  target="_blank"
                >
                  {/* Instagram SVG */}
                </a>
                <a
                  className="text-gray-700 hover:text-orange-600"
                  aria-label="Visit Twitter"
                  href=""
                  target="_blank"
                >
                  {/* Twitter SVG */}
                </a>
              </div>

              <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">Web Developer</span>
                  <p>
                    <span className="text-gray-700 mr-2">at ABC Company</span>
                    <span className="text-gray-700">2017 - 2019</span>
                  </p>
                </div>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  finibus est vitae tortor ullamcorper, ut vestibulum velit
                  convallis. Aenean posuere risus non velit egestas suscipit.
                </p>
              </div>
              {/* Additional experience sections go here */}
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Overview;