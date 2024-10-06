import { Action, createAction, props } from "@ngrx/store";

// export let increment=createAction(
//     '[Counter] Increment',
//     props<{value:number}>(),
// )

export const incremetType='[Counter] Increment';
export const decrementType='[Counter] decrement';
export const initType='[Counter] init';
export const setType='[Counter] set'

export class Increment implements Action{
    type=incremetType;
    constructor(public payload:{value:number}){}
}

export class Decrement implements Action{
    type=decrementType;
    constructor(public payload:{value:number}){}
}

export class LocadInit implements Action{
    type=initType;
}

export class setInit implements Action{
    type=setType;
    constructor(public payload:{value:number}){}
}

export type counterAction= Increment | Decrement | LocadInit | setInit;
