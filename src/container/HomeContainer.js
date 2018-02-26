import { Container } from 'flux/utils';

import Home from '../component/Home';
import DummyStore from '../store/DummyStore';

const getStores = () => [DummyStore];

const calculateState = () => {
    return {
        dummy: DummyStore.getState()
    };
};

const HomeContainer = Container.createFunctional(Home, getStores, calculateState);

export default HomeContainer;
