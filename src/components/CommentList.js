import React,{Component} from 'react';
import {connect} from 'react-redux';
 

class CommentList extends Component{
    renderComments(){ 
        return this.props.comments.map((comment,index)=>{
             
            return <li className="list-group-item d-flex" key={index}> <p>({index+1})</p>
             { comment}</li>
        });
    }
    render(){
        return(
            <div className="conatiner" >
                <div className="row"> 
                    <div className="col mt-4 " style={{overflowY:'scroll',height:300}} >
                     <h4 className="text-center mt-3">Comment List</h4>
                       <ul className="list-group">{this.renderComments()}</ul>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {comments:state.comments}
}
export default connect(mapStateToProps)(CommentList);

 