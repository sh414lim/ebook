import {createAction,handleActions} from "redux-actions";

const SMPLE_ACTION="auth/SAMPLE_ACTION";

export const sampleAction =createAction(SMPLE_ACTION);

const initlState={};

const auth=handleActions(
{
    [SMPLE_ACTION]: (state,action) =>state,
},
initlState,
);

export default auth;
