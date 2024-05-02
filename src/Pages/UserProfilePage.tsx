import UserProfileForm from "@/Forms/User-Profile-Form/UserProfileForm";
import { useGetMyUser, useMyUpdateUser } from "@/api/UserApi";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useMyUpdateUser();

  if(isGetLoading){
    return <span> Loading...</span>;
  }
  
  if(!currentUser){
    return <span>Unable to load user profile</span>;
  }

  return (
  <UserProfileForm currentUser={currentUser} onSave={updateUser} isLoading={isUpdateLoading}/>
  );
};

export default UserProfilePage;