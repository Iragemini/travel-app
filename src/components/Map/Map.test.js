import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Map from './Map';
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

const setUp = (props) => shallow(<Map {...props}/>);

describe("verification map components", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  })

  it('should map contain wrapper', () => {
    const wrapper = component.find('.map-wrapper');
    expect(wrapper.length).toBe(1);
  })
  
  it('should video contain title', () => {
    const wrapper = component.find('h4');
    expect(wrapper.length).toBe(1);
  })

  it('should video contain MapContainer', () => {
    const wrapper = component.find('MapContainer');
    expect(wrapper.length).toBe(1);
  })
})