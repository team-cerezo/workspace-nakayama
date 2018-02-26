import React from 'react';
import { Link } from 'react-router-dom'

export default ({ projectId }) => (
    <div>
        <h1>Project {projectId}</h1>
        <p><Link to={'/projects/' + projectId + '/iterations/456'}>XXX iteration</Link></p>
    </div>
);