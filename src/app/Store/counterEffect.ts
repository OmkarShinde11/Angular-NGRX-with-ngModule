import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of, switchMap, tap, withLatestFrom } from "rxjs";
import {  decrementType, incremetType, initType, setInit } from "./counterAction";
import { Store } from "@ngrx/store";
import { selectcounter } from "./counterSelector";


@Injectable()

export class CounterEffect{

    loadCounter=createEffect(()=>this.actions$.pipe(
        ofType(initType),
        switchMap(()=>{
            const storedCounter=localStorage.getItem('counter');
            if(storedCounter){
                return of (new setInit({value:+storedCounter}))
            }
            return of(new setInit({value:0}))
        })
    ))


    saveCounter=createEffect(()=>this.actions$.pipe(
        ofType(incremetType,decrementType),
        withLatestFrom(this.store.select(selectcounter)),// it gives a latest data from that state.
        tap((data)=>{
            console.log(data[1]);
            localStorage.setItem('counter',data[1].toString())
        })
    ), { dispatch: false }
    )
    constructor(private actions$:Actions,private store:Store<{counter:number}>){}
}