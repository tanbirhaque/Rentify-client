import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const AddProperties = () => {

    const {user} = useContext(AuthContext)
    const handleAddJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const job = form.job.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const maxprice = form.maxprice.value;
        const minprice = form.minprice.value;
        const category = form.category.value;
    
        
        };

    return (
        <div>
        <section className="py-1 bg-blueGray-50 w-[1350px]">
      <div className="w-full  px-4 mx-auto mt-6">
        <div className="relative flex flex-col  break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
               Add Property
              </h6>
            
            </div>
          </div>
          <hr className="mb-5"></hr>
          <form className="px-4" onSubmit={handleAddJob}>
          {/* form email and job row */}
          <div className="md:grid grid-cols-3 gap-4 mb-8">
            <div className="form-control    ">
              <label className="label ">
                <span className="label-text ">Email</span>
              </label>
              <label className="input-group ">
                <input
                  defaultValue={user?.email}
                  readOnly
                  type="email"
                  placeholder="Place Your Email"
                  name="email"
                  className="input form-border input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control w-full  ">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="">
                <select
                  name="category"
                  required
                  className="select select-bordered w-full"
                >
                  <option value="" disabled selected>
                    Select a category
                  </option>
                  <option value="Web Development">Web Development</option>
                  <option value="Graphics Design"> Graphics Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                </select>
              </label>
            </div>
         
            <div className="form-control w-full  ">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="">
                <select
                  name="category"
                  required
                  className="select select-bordered w-full"
                >
                  <option value="" disabled selected>
                    Select a category
                  </option>
                  <option value="Web Development">Web Development</option>
                  <option value="Graphics Design"> Graphics Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                </select>
              </label>
            </div>
          </div>
     

         
         

       

          
          
         

          <button type="submit" className="btn btn-block bg-gray-800 form-border text-white mb-7">Add Property</button>
         

   
      
      

        </form>
         
        </div>
      
      </div>
    </section>
        </div>
    );
};

export default AddProperties;