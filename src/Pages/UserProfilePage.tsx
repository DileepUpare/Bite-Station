import UserProfileForm from "@/Forms/User-Profile-Form/UserProfileForm";
import { useGetMyUser, useMyUpdateUser } from "@/api/UserApi";
import { Spinner } from "@material-tailwind/react";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useMyUpdateUser();

  if(isGetLoading){
    return <span> <Spinner className="h-12 w-12 text-gray-900/50 justify-center mt-40 mb-60 ml-[42vw] " onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}/></span>;
  }
  
  if(!currentUser){
    return <span>Unable to load user profile</span>;
  }

  return (
  <UserProfileForm currentUser={currentUser} onSave={updateUser} isLoading={isUpdateLoading}/>
  );
};

export default UserProfilePage;