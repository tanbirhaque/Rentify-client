
const ManagePropertiesTable = ({property}) => {
    const { property_info } = property || {};
    const { property_details, property_img, property_title, property_location, property_for, ownership_duration, owner_details, verify_status }= property_info || {};

  return (
    <>
      <td>
        <div className="flex flex-col lg:flex-row gap-2 items-center">
        <img className="w-[80px] rounded" src={property_img} alt="" />
        <h2 className="font-bold">{property_title}</h2>
        </div>
      </td>
      <td>{property_location?.address?.city}</td>
      <td className="capitalize">{property_for}</td>
      <td><span className="text-base">$</span>{property_details?.property_price}</td>
      <td>{ownership_duration}</td>
      <td>{owner_details?.owner_email}</td>
      <td>{verify_status? "True" : "False"}</td>
    </>
  );
};

export default ManagePropertiesTable;
