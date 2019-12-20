import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';
import  Root from '../../ Root';


let wrepped;

beforeEach(() => {
    wrepped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});
afterEach(() => {
    wrepped.unmount();

})

it('has a text area or button', () => {
    expect(wrepped.find('textarea').length).toEqual(1);
    expect(wrepped.find('button').length).toEqual(1);
});
describe('the text area', () => {
    beforeEach(() => {
        wrepped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });
        wrepped.update();
    });
    it('has a text area that users can type in', () => {
        expect(wrepped.find('textarea').prop('value')).toEqual('new comment');
    });
    it('when form is submitted,text area gets emptied', () => {
        wrepped.find('form').simulate('submit');
        wrepped.update();
        expect(wrepped.find('textarea').prop('value')).toEqual('');
    });
});

