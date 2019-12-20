import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

export default () => {
    return (
        <div className="container">
            <div className="row mt-4 border-2 p-3 shadow p-3 mb-5 bg-white rounded">
                <div className="col-lg-6 col-sm-12 col-xs-12">
                    <CommentBox />
                 </div>
                 <div className="col-lg-6 col-sm-12 col-xs-12">
                    <CommentList />
                 </div>
            </div>
        </div>
    )
};