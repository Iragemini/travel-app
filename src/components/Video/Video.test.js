import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Video from './Video';
//import toJson from 'enzyme-to-json'

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() })

global.shallow = shallow
global.render = render
global.mount = mount
//global.toJson = toJson

// Fail tests on any warning
console.error = message => {
  throw new Error(message)
}

const setUp = (props) => shallow(<Video {...props}/>);

describe("verification video components", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  })

  it('should video contain video', () => {
    const wrapper = component.find('.video');
    expect(wrapper.length).toBe(1);
  })
  
  it('should video contain title', () => {
    const wrapper = component.find('h4');
    expect(wrapper.length).toBe(1);
  })

  it('should video contain video Reactplayer', () => {
    const wrapper = component.find('ReactPlayer');
    expect(wrapper.length).toBe(1);
  })
})

