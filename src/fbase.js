import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig={
    apiKey:process.env.REACT_APP_API_KEY,
    authDomain:process.env.REACT_APP_AUTH_DOMAIN,
    DETABASEurl:process.env.REACT_APP_DATABASE_URL,
    projectld:process.env.REACT_APP_PROJECT_ID,
    storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderld:process.env.REACT_APP_MESSGIN_ID,
    appold:process.env.REACT_APP_APP_ID,
    
};


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const provider =new firebase.auth.GoogleAuthProvider();

export const auth=firebase.auth();
// export const firestore=firebase.firestore();


// provider.setCustomParameters({prompt:'select_account'});
export const signlnWithGoogle=()=>auth.signlnWithPropup(provider);


export const firebaselnstance=firebase //소셜 로그인
export const authService =firebase.auth(); //로그인 모듈
export const dbService =firebase.firestore();//NoSQL 데이터 베이스
export const storageService=firebase.storeage();// 이미지 저장 스토리지

export default firebase;