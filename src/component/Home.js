import React from 'react';
import { Link } from 'react-router-dom';
import { updateProjectName,addNewProject, updateDescription, showProjects } from '../action/actions';
import '../css/home.css'

export default ({ project,addedProjects }) => (
    <div onload={showProjects()}>

        <h1>Home</h1>
        <ul>
            <li>TODO プロジェクトのデータを保持するStoreを作る</li>
            <li>TODO プロジェクトの一覧を表示する</li>
            <li>TODO プロジェクト詳細へリンクする</li>
        </ul>
        <p><Link to="/projects/123">XXX project</Link></p>

        <input type="text" placeholder="PJ名"
            onChange={event => updateProjectName(event.target.value)} />
        <input type="text" placeholder="PJについての説明"
            onChange={event => updateDescription(event.target.value)} />
        <button onClick={event => addNewProject(project.name,project.description)}>add</button>

        <table class="projects">
            <thead>
                <tr>
                    <th>id</th>
                    <th>PJ名</th>
                    <th>説明</th>
                </tr>
            </thead>
            {addedProjects.map(addedproject => (
                <tbody>
                    <tr>
                        <td>{addedproject.id}</td>
                        <td>{addedproject.name}</td>
                        <td>{addedproject.description}</td>
                    </tr>
                </tbody>
            ))}
        </table>

    </div>
);
