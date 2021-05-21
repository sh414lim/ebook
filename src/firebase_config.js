// import firebase from 'firebase/app';
// import "firebase/firestore";
// import "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyA3b-edWsGX4TS2AeER08CW6DymAzsh430",
//     authDomain: "musicweb-c6c70.firebaseapp.com",
//     projectId: "musicweb-c6c70",
//     storageBucket: "musicweb-c6c70.appspot.com",
//     messagingSenderId: "668873790188",
//     appId: "1:668873790188:web:693bb6b1e37ce8e3e14bc9",
//     measurementId: "G-84KE0ZKRL4",
//   };

//   firebase.initializeApp(firebaseConfig)

//   export const auth=firebase.auth;
//   export const database=firebase.database();

//   const provider = new firebase.auth.googleAuthProvider();
//   //googleAuthProvider 클래스를 authentication 라이브러리 에서 사용할 수 있도록 불러오는 코드

//   provider.setCustomParameters({prompt:'select_account'});
//   //signln 이랑 authentication 을 위해서 GoogleAuthProvider 를 사용할 때 마다 구글 팝업을 항상 띄운다느 의미]

//   export const signlnWithGoogle= ()=>auth.signInWithPopup(provider);
//   //signlnWPopup 메소드는 여러 파라미터를  받을 수 있다. 트위터 페이스북 깃허브 등으로 로그인이 필요 할 수 도 있음
//   //google 로  로그인 할것이므로 파라미터 위에서 정의한 provider을 넣어준다.

//   export default {firebase};


