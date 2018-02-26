import { Container } from 'flux/utils';

import Iteration from '../component/Iteration';
import DummyStore from '../store/DummyStore';

const getStores = () => [DummyStore];

const calculateState = (prevState, { match: { params: { projectId, iterationId } } }) => {
    return {
        dummy: DummyStore.getState(),
        projectId,
        iterationId
    };
};

const IterationContainer = Container.createFunctional(Iteration, getStores, calculateState, { withProps: true });

export default IterationContainer;
