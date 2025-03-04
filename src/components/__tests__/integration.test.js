import React from 'react';
import {mount} from 'enzyme';
import Root from '../../ Root';
import moxios from 'moxios';
import App from '../App';
import { timeout } from 'q';
 
beforeEach(()=>{
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments',{
        status:200,
        response:[{name:'Fetched #1'},{name:'Fetched #2'}]
    });
});
afterEach(()=>{
    moxios.uninstall();
});
it ('can fetch a list of comments and display them',(done)=>{
    const wrapped=mount(
        <Root>
            <App/>
        </Root>
    );
    wrapped.find('.btn-outline-primary').simulate('click');
    setTimeout(()=>{ 
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done();
    },100)
});
