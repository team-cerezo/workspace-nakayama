import RascaloidDispatcher from '../dispatcher'
import actionTypes from './action-types';

export const updateProjectName = (name) => {
    RascaloidDispatcher.dispatch({
        type: actionTypes.UPDATE_PROJECT,
        payload:{ name }
    });
};

export const updateDescription = (description) => {
    RascaloidDispatcher.dispatch({
        type: actionTypes.UPDATE_DESCRIPTION,
        payload:{ description }
    });
};

export const addNewProject = (name,description) => {
    const body = new URLSearchParams({ name,description });
    fetch('/projects',{
        method: 'POST',
        headers:{
            'X-Bouncr-Credential': 'eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyMSIsIm5hbWUiOiJUZXN0IHVzZXIxIiwicGVybWlzc2lvbnMiOlsicHJvamVjdDpyZWFkIiwicHJvamVjdDpjcmVhdGUiLCJwcm9qZWN0OnVwZGF0ZSIsInByb2plY3Q6ZGVsZXRlIl19.lfegO1IXi1hlBETymqw8nqRaq7POrnriJU_5YK2R-PI'
        },
        body})
        .then(() => {
            RascaloidDispatcher.dispatch({
                type: actionTypes.ADD_NEW_PROJECT,
                payload: { name: name,description : description }
            });
        })
};

export const showProjects = () => {
    fetch('/projects',{
        method: 'GET',
        headers:{
            'accept': 'application/json',
            'X-Bouncr-Credential': 'eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyMSIsIm5hbWUiOiJUZXN0IHVzZXIxIiwicGVybWlzc2lvbnMiOlsicHJvamVjdDpyZWFkIiwicHJvamVjdDpjcmVhdGUiLCJwcm9qZWN0OnVwZGF0ZSIsInByb2plY3Q6ZGVsZXRlIl19.lfegO1IXi1hlBETymqw8nqRaq7POrnriJU_5YK2R-PI'
        }
    })
        .then(responce => responce.json())
        .then(projects => {
            //[{name:}, {}, {},]
            RascaloidDispatcher.dispatch({
                type: actionTypes.SHOW_PROJECTS,
                payload: projects
            });
        })
};

