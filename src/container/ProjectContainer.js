import { Container } from 'flux/utils';

import Project from '../component/Project';
import DummyStore from '../store/DummyStore';

const getStores = () => [DummyStore];

const calculateState = (prevState, { match: { params: { projectId } } }) => {
    return {
        dummy: DummyStore.getState(),
        projectId
    };
};

const ProjectContainer = Container.createFunctional(Project, getStores, calculateState, { withProps: true });

export default ProjectContainer;
