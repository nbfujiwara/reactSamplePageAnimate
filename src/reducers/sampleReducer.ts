import { reducerWithInitialState } from 'typescript-fsa-reducers';

import {sampleActions} from "../actions/sampleAction";


export type ISampleState = {
    val:string
}
const initialState:ISampleState = {
    val:null
};


export const sampleReducer = reducerWithInitialState(initialState)
    .case(sampleActions.setSample, (state, payload) => {
        return Object.assign({}, state, {val:payload});
    })
;
