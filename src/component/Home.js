import React from 'react';
import { Link } from 'react-router-dom'

export default () => (
    <div>
        <h1>Home</h1>
        <ul>
            <li>TODO プロジェクトのデータを保持するStoreを作る</li>
            <li>TODO プロジェクトの一覧を表示する</li>
            <li>TODO プロジェクト詳細へリンクする</li>
        </ul>
        <p><Link to="/projects/123">XXX project</Link></p>
    </div>
);