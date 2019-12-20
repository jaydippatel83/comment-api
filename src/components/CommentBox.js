import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import '../../src/index.css';

class CommentBox extends Component {

    state = { Comment: '' };

    handleChange = (event) => {
        this.setState({ Comment: event.target.value });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.saveComment(this.state.Comment);
        this.setState({ Comment: "" });
    }

    render() {
        return (
            <div className="container">
                <div className="row text-center ">
                    <div className="col-12 mt-4 ml-auto mr-auto ">
                        <form onSubmit={this.handleSubmit} className="ui form" >
                            <h4 className="mt-3">Add a Comment</h4>
                            <textarea placeholder="Tell us more" style={{ minHeight: 100 }} rows="3" onChange={this.handleChange} value={this.state.Comment} />
                            <div className="mt-3 d-flex">
                                <button  className="btn btn-outline-success btn-sm btn-block mr-3">Submit Comment</button>
                                <button  onClick={this.props.fetchComments} className="btn  btn-outline-primary btn-sm btn-block">Fetch Comment</button>
                            </div>
                        </form >
                       

                    </div>
                </div>
            </div>
        );
    }
}
export default connect(null, actions)(CommentBox);

