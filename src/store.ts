import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {ISampleState, sampleReducer} from "./reducers/sampleReducer";


export interface IAppState {
    sample:ISampleState,
}

const store = createStore(
    combineReducers<IAppState>({
        sample: sampleReducer,

    })
    ,composeWithDevTools()
);

export default store;
