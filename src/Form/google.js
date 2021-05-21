import "firebase/firestore";
import "firebase/auth";
import {signlnWithGoogle} from "..//firebase_config";
import {auth} from "../firebase_config";


function GoogleSignin(props){
    auth.onAuthStateChanged(user =>{
        //user.currentUser 를 통해 현재 로그인 중인 사용자에 대한 정보를 이용할 수 있다.
        //ex)user.currentUser.emall , user.currentUser.displayName .. etc

        if(user !== null){
            console.log("로그인이 완료 되었습니다")
        }
    })
    return(
        <>
        <div>
            <button onClick ={signlnWithGoogle}>로그인</button>
        </div>
        <div>
            <button onClick={()=>{
                auth.signOut();
                console.log("로그아웃 합니다");
            }}>Exit</button>
        </div>
        </>
    )
}

export default GoogleSignin;