import React,{Component} from 'react';
import {connect} from 'react-redux';
 

class CommentList extends Component{
    renderComments(){ 
        return this.props.comments.map((comment,index)=>{
             
            return <li className="list-group-item d-flex li-hover" key={index}> <p>({index+1})</p>
             { comment}</li>
        });
    }
    render(){
        return(
            <div className="conatiner" >
                <div className="row"> 
                    <div className="col-lg-12 ml-auto mr-auto mt-4 ">
                     <div className={this.props.comments.length===0 ?'d-none':'d-block'}>
                     <h4 className="text-center mt-3">Comment List</h4>
                       <ul className="list-group">{this.renderComments()}</ul>
                     </div>
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

 