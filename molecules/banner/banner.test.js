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
    // const wrapper = shallow(<Banner />);
    // expect(wrapper.find("p").length).toBe(2);
    const renderedWrapper = mount(<Banner />)
    expect(renderedWrapper.find("p").length).toBe(2);
    expect(renderedWrapper).toHaveStyleRule('background-color', 'red');
  });

  it('ok with renderer', () => {
    const tree = renderer.create(<Banner />).toJSON()
    expect(tree).toMatchSnapshot()
  })
});
