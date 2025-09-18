import { BiEnvelope, BiUser } from "react-icons/bi";
import { GoSignOut } from "react-icons/go";

const Profile = () => {
  return (
    <div className="text-text-dark/90 w-full space-y-6 p-4">
      <div className="flex items-center gap-x-4">
        <BiUser className="text-xl" />
        <p className="text-lg font-bold capitalize">ibrahim ali</p>
      </div>
      <div className="flex items-center gap-x-4">
        <BiEnvelope className="text-xl" />
        <div>
          <p className="capitalize">email</p>
          <p className="text-secondary">ibrahim@gmail.com</p>
        </div>
      </div>
      <div className="flex items-center gap-x-4 text-red-600">
        <GoSignOut className="text-xl" />
        <p className="capitalize">sign out</p>
      </div>
    </div>
  );
};

export default Profile;
