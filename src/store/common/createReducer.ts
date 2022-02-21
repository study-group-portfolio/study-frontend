import produce from 'immer';
import { AnyAction } from 'redux';

export default function createReducer(initialState: any, handlerMap: any) {
    return function(state = initialState, action: AnyAction) {
        return produce(state, (draft: any) => {
            const handler: (draft: any, action: AnyAction) => (void) = handlerMap[action.type];

            if (handler) {
                handler(draft, action);
            }
        })
    }
}