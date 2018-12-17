import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();


export const sampleActions = {
    setSample: actionCreator<string>('SET_SAMPLE'),
};