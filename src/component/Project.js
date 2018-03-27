import React from 'react';
import { Link } from 'react-router-dom';
export default ({ projectId }) => (
    <div>
        <h1>Project {projectId}</h1>
        <ul>
            <li>TODO イテレーションのデータを保持するStoreを作る</li>
            <li>TODO イテレーションの一覧を表示する</li>
            <li>TODO イテレーション詳細へリンクする</li>
        </ul>
        <p><Link to={'/projects/' + projectId + '/iterations/456'}>XXX iteration</Link></p>
    </div>
);