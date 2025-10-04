import { BiEnvelope, BiUser } from "react-icons/bi";
import { GoSignOut } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { authClient } from "../../lib/auth-client";
import useSession from "../../lib/auth-session";

const Profile = () => {
  const navigate = useNavigate();
  const { data: session, refetch } = useSession();
  const signOutHandler = async () => {
    const { error } = await authClient.signOut();
    if (error) {
      toast.error(`error: ${error.message}`);
      console.error(error.message);
    } else {
      refetch()
      toast.success("You signed out, see you");
      navigate("/sign-in");
    }
  };

  if (!session) {
    return (
      <div className="flex h-full items-center justify-center py-12 text-red-500">
        <p>you signed out</p>
      </div>
    );
  }

  return (
    <>
      {session && (
        <div className="text-text-dark/90 w-full space-y-6 p-4">
          <div className="flex items-center gap-x-4 dark:text-secondary">
            <BiUser className="text-xl" />
            <p className="text-lg font-bold capitalize">{session?.user.name}</p>
          </div>
          <div className="flex items-center gap-x-4 dark:text-secondary">
            <BiEnvelope className="text-xl" />
            <div >
              <p className="capitalize">email</p>
              <p >{session?.user.email}</p>
            </div>
          </div>
          <button
            onClick={signOutHandler}
            className="flex cursor-pointer items-center gap-x-4 text-red-500 hover:text-red-700"
          >
            <GoSignOut className="text-xl" />
            <p className="capitalize">sign out</p>
          </button>
        </div>
      )}
    </>
  );
};

export default Profile;
