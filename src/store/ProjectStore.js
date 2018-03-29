import { ReduceStore } from 'flux/utils';

import RascaloidDispatcher from '../dispatcher';
import actionTypes from '../action/action-types';


class ProjectStore extends ReduceStore{
    getInitialState() {
        return {name:null ,description:null};
    }

    reduce(state, { type, payload }) {
        switch (type) {
            case actionTypes.ADD_NEW_PROJECT:
                return {...payload};

            case actionTypes.UPDATE_PROJECT:
                const { name } =payload;
                return {...state,name};

            case actionTypes.UPDATE_DESCRIPTION:
                const { description } = payload;
                return {...state,description};
                
            default:
                return state;
        }
    }
}

export default new ProjectStore(RascaloidDispatcher);