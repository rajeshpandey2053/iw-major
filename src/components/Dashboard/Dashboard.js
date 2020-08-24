import React from "react";
import {useParams} from 'react-router-dom';

import "./dashboard.scss";
import "./Sidebar";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets/Widgets";
import PostDetail from "./PostDetail/PostDetail";
import Feed from "./Feed/Feed";

const Dashboard = () => {
    const {postSlug} = useParams()
    return (
        <div className="container dashboard-wrapper">
            <div className="row dashboard-content-wrapper">
                {/* Sidebar */}
                <div id="sidebar" className='col-md-3 col-3'>
                    <Sidebar/>
                </div>
                {/* Feed */}
                <div id="feed" className="col-md-6 col-6">
                    {postSlug ? <PostDetail/> : <Feed/>}
                </div>

                {/* Widgets */}
                <div id="widgets" className='col-md-3 col-3'>
                    <Widgets/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
