//component added by "Fahima"

import { Rating } from "@smastrom/react-rating";
import useReviews from "../../../Hooks/useReviews";

const Reviews = ({ property_title }) => {
  const [reviews] = useReviews();
  //to filter reviews
  const sameName = reviews.filter(
    (name) => name.propertyTitle === property_title
  );



  return (
    <>      
      {/* dynamic */}
      {sameName.map((review) => (
        <div key={review._id}>
          <h3 className="poppins-font text-[24px] font-semibold my-6">
            {sameName?.length} Reviews
          </h3>
          <div>
            <div className="flex gap-5">
              <div className="min-w-[100px]">
                <img
                  className="rounded-full w-[100px] h-[100px]"
                  src={review?.reviewerImage}
                  alt="Reviewer image"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="poppins-font text-[18px] font-semibold">
                    {review?.reviewerName}
                  </h3>
                  <div>
                    <Rating
                      style={{ maxWidth: 80 }}
                      // value={5}
                      value={review?.rating}
                      // onChange={setRating}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[14px] text-[#666666] mt-[12px] mb-[8px]">
                    {review?.date}
                  </p>
                  <p className="text-[#666666]">{review?.reviewText}</p>
                </div>
                <div className="flex gap-5 mt-6">
                  <div>
                    <img
                      className="rounded-md w-[275px]"
                      src={review?.reviewImage}
                      alt={`${review?.propertyTitle} image`}
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-5" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Reviews;
