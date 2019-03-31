import React from "react"
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer'
import Banner from "./banner"
import { configure } from 'enzyme';
import 'jest-styled-components'

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<Banner />', () => {
  it('renders 2 <p> tags', () => {
    const wrapper = shallow(<Banner />);
    // This won't work
    expect(wrapper.find("p").length).not.toBe(2);
    // This will work
    const renderedWrapper = mount(<Banner />)
    expect(renderedWrapper.find("p").length).toBe(2);
    // This works for both mount and shallow
    expect(renderedWrapper).toHaveStyleRule('background-color', 'red');
  });

  it('ok with renderer', () => {
    const tree = renderer.create(<Banner />).toJSON()
    expect(tree).toMatchSnapshot()
  })
});
