import { useContext } from "react";
import { AuthContext } from "../../store/auth";

const UserProfile = ({ username }) => {

    const {authState} = useContext(AuthContext)
    if(authState.user && authState.user.username === username){
        return ( 
            <div>Profile : {username}</div>
         );

    }else{
        return (
            <div>شما اجازه دسترسی به این پروفایل را ندارید!ً</div>
        )
    }

}


export const getServerSideProps = (context) => {
    const { username } = context.params;

    return {
        props: {
            username
        }
    }
}


export default UserProfile;