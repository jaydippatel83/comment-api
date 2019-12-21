import React, { Component } from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
    renderButton() {
        if (this.props.auth) {
            return (
                <button className="btn btn-danger " onClick={() => this.props.changeAuth(false)}>
                    Sign Out
                </button>
            );
        }
        else {
            return (
                <button onClick={() => this.props.changeAuth(true)} className="btn btn-primary ">
                    Sign In
                </button>
            );
        }

    }
    renderHeader() {
        return (
            <ul className="list-inline pointer hero-bkg-animated ">
                <li className="list-inline-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="list-inline-item">
                    <Link to="/post">Post</Link>
                </li>
                <li className="list-inline-item">
                    {this.renderButton()}
                </li>
            </ul>
        );
    }
    render() {
        return (
            <div className="container ">
                <div className="row mt-4 p-3 jay">
                    <div className="col-lg-8 col-sm-12 col-xs-12 mr-auto ml-auto">
                        {this.renderHeader()}
                        <Route path="/post" component={CommentBox} />
                        <Route path="/" component={CommentList} />
                    </div>
                </div>
            </div>
        )
    }
};
function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps,actions)(App);