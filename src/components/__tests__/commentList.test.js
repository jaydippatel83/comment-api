import React from 'react';
import {mount}  from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommentList from '../CommentList';
import Root from '../../ Root';

Enzyme.configure({ adapter: new Adapter() });

let wrapped;

 beforeEach(()=>{
    const initialState={
        comments:['Comment1','Comment2']
    };
    wrapped=mount(
        <Root initialState={initialState}>
            <CommentList/>
        </Root>
    );
});

it ('create one LI per comment',()=>{
 expect(wrapped.find('li').length); 
});

it ('shows the text for each comment',()=>{
    expect(wrapped.render().text().length); 
});