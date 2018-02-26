import React from 'react';
import { Link } from 'react-router-dom'

export default () => (
    <div>
        <h1>Home</h1>
        <p><Link to="/projects/123">XXX project</Link></p>
    </div>
);