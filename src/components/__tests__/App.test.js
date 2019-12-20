import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let wrapped;

beforeEach(()=>{
    wrapped=shallow(<App/>);
});
 
it('show a Comment Box',()=>{
    const wrapped=shallow(<App/>);
    
    expect(wrapped.find(CommentBox).length).toEqual(1);
});
it('show a Comment List',()=>{
    const wrapped=shallow(<App/>);
    expect(wrapped.find(CommentList).length).toEqual(1);
});