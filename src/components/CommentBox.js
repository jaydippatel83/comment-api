import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import '../../src/index.css';
import Notifications, { notify } from 'react-notify-toast';
import CloseIcon from '@material-ui/icons/Close';

const myColor = { background: 'green', text: "#FFFFFF"};
// notify.show("this is sample text", "custom", 5000, myColor);

  
class CommentBox extends Component {
    state = { Comment: '' };

    

    handleChange = (event) => {
        this.setState({ Comment: event.target.value });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.saveComment(this.state.Comment);
        this.setState({ Comment: "" });
        notify.show( "Data is Successfully Submited...!!!","custom",1000,myColor);
       
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
                                <div className="col-lg-3 pl-0">
                                    <button className="btn btn-outline-success  btn-block mr-3 ">Submit Comment</button>
                                    <Notifications 
                                    style={{backgroundColor:'green',padding:'20px'}}
                                    options={{ zIndex: 200, top: '15px', right: '10px',marginLeft:'auto !important' }} />
                                </div>
                                <div className="col-lg-3 pl-0">
                                    <button onClick={this.props.fetchComments} className="btn  btn-outline-primary  btn-block">Fetch Comment</button>
                                </div>

                            </div>
                        </form >


                    </div>
                </div>
            </div>
        );
    }
}
export default connect(null, actions)(CommentBox);

