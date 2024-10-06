import { Action, createReducer, on } from "@ngrx/store";
// import { increment } from '../Store/counterAction';
import {Increment,Decrement, counterAction, setInit}  from '../Store/counterAction';
let initialState=0;

// let counterReducer=createReducer(initialState,on(increment,(state,payload)=>state + payload.value));   //here when we update any state then instead of change the state directly produce a new value.

//above code under the hood

function CounterReducer(state=initialState,action:counterAction | Action){
    if(action.type=='[Counter] Increment'){
        return state + (action as Increment).payload.value;
    }
    else if(action.type=='[Counter] decrement'){
        return state - (action as Decrement).payload.value;
    }
    else if (action.type=='[Counter] set'){
        return state=(action as setInit).payload.value;
    }
    else{
        return state;
    }
}

export default CounterReducer;