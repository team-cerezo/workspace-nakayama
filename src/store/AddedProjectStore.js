import { ReduceStore } from 'flux/utils';

import RascaloidDispatcher from '../dispatcher';
import actionTypes from '../action/action-types';


class AddedProjectStore extends ReduceStore{
    getInitialState() {
        return [{ name:null,description:null,id:null }];
    }

    reduce(state, { type, payload }) {
        switch (type) {

            case actionTypes.SHOW_PROJECTS:
                return payload;
                
            default:
                return state;
        }
    }
}

export default new AddedProjectStore(RascaloidDispatcher);