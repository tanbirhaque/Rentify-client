// just i filter by woner email for get all propertis 
import useAuth from "../../Hooks/useAuth";
import useProperties from "../../Hooks/useProperties";
import PropertyCard from "../../MainLayout/Shared/PropertyCards/PropertyCard";

const OwnerProperties = () => {
    const { user } = useAuth();
    const [properties] = useProperties();

    // filter by present useremail for get the all owner add propertys
    const ownerProperties = properties?.filter(item => item.property_info.owner_details.owner_email === user?.email)
    console.log(ownerProperties)

    return (
        <div className="w-full max-w-[26rem] shadow-lg">
            <h2 className=" text-4xl font-bold text-center">Hi {user?.displayName} You added all property is here</h2>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" >
                {
                    ownerProperties.map(property => (
                        <PropertyCard key={property} property={property}>
                        </PropertyCard>
                    ))
                }
            </div>
        </div>
    );
};

export default OwnerProperties;