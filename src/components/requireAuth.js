import React,{Component} from 'react';
import {connect} from 'react-redux';

export default ChildComponent=>{
    class ComposedComponent extends Component {

        
    componentDidMount(){
        this.shouldNavigateAway();
    }
    componentDidUpdate(){
        this.shouldNavigateAway();
    }
    shouldNavigateAway(){
        if(!this.props.auth){
           this.props.history.push('/');
        }
    }

        render (){
            return ( 
               <ChildComponent/>
            )
       }
    }
    return ComposedComponent;
    
};
import requireAuth from '../components/'