import tv4 from 'tv4';
import stateSchema from './stateSchema';

export default ({dispatch,getState})=>(next)=>(action)=>{
next(action);
if (!tv4.validate(getState(),stateSchema));
 console.warn("invalid");
 
};