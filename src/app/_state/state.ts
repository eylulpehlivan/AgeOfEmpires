import * as character from './character.reducers'
// import * as message from './message/message.reducers';

export interface AppState {
    characterState: character.State;
    // messageState : message.State
}

export const reducers = {
    characterState: character.reducer,
    // message : message.reducer
};