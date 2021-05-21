// import {createAction,handleActions} from "redux-actions";
import {auth} from "../firebase_config";

// const SMPLE_ACTION="auth/SAMPLE_ACTION";

// export const sampleAction =createAction(SMPLE_ACTION);

// const initlState={};

// const auth=handleActions(
// {
//     [SMPLE_ACTION]: (state,action) =>state,
// },
// initlState,
// );

export function signUp(email,password){
    return auth().createUserWithEmailAndPassword(email,password);
}

export function signin(email,password){
    return auth().signInWithEmailAndPassword(email,password);
};

export default auth;
