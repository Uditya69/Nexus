import { Button } from "@/components/ui/button";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import Cookies from "universal-cookie";

const cookies = new Cookies();
export const LogOut=({isAuth,setIsAuth,setIsInChat})=>{
    const Singoutuser = async()=>{
        await signOut(auth);
        cookies.remove('auth-token');
        setIsAuth(false);
        setIsInChat(false);
    };
    return(
        <div>
            {isAuth &&(<Button onClick={Singoutuser}>Signout</Button>)}
        </div>
    )

}