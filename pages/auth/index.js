import { useState } from "react";
import LoginForm from "../../components/auth/login";
import RegisterForm from "../../components/auth/register";

const AuthPage = () => {
    const [status, setStatus] = useState(true)
    return (
        <div className="py-[50px] px-[15px]">
            {
                status ?
                <LoginForm setStatus={setStatus} /> : 
                <RegisterForm setStatus={setStatus} />
            }
        </div>
    );
}
 
export default AuthPage;