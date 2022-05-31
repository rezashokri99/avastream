import { useContext } from "react";
import { AuthContext } from "../../store/auth";
import UserInfo from "../../components/profile/user-info";
import UserCard from "../../components/profile/user-card";

const UserProfile = ({ username }) => {

    const {authState} = useContext(AuthContext)
    if(authState.user && authState.user.username === username){
        return ( 
            <div className="my-[50px] py-[50px] px-[15px] sm:w-[540px] sm:mx-auto md:w-[720px] lg:w-[960px] xl:w-[1140px] rtl text-right">
                <UserInfo />
                <UserCard />
            </div>
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