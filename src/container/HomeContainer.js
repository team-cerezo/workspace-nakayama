import { Container } from 'flux/utils';

import Home from '../component/Home';
import ProjectStore from '../store/ProjectStore';
import AddedProjectStore from '../store/AddedProjectStore';

const getStores = () => [ProjectStore,AddedProjectStore];

const calculateState = () => {
    return {
        project : ProjectStore.getState(),
        addedProjects : AddedProjectStore.getState()
    };
};

const HomeContainer = Container.createFunctional(Home, getStores, calculateState);

export default HomeContainer;
