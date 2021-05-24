import "firebase/firestore";
import "firebase/auth";
import {auth} from "../../fbase";
import {signlnWithGoogle} from "../../fbase";

function HoohleSignin(props){
    auth.onAuthStateChanged(user=>{
        if(user !== null){
            console.log("로그인")
        }
    })
    return(
        <div>
            <button onClick ={signlnWithGoogle}>로그인</button>
        </div>
    )
}

export default HoohleSignin;