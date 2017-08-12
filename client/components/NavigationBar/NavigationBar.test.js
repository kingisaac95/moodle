
import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import { NavigationBar } from './NavigationBar.jsx';

/**
 * This function setup the component
 *
 * @returns {object}
 */
function setup() {
  return shallow(< NavigationBar />);
}
describe('NavigationBar', () => {
  const wrapper = setup();
  const menuItems = ['Home','About','Donate','Contact us'];

  it('renders the name of the application', () => {
    expect(wrapper.find('.brand-logo')
          .props()
          .children)
        .toBeA('string');
  });

  it('should have <div /> elements', () => {
    expect(wrapper.find('div')
          .length)
        .toBe(1);
  });

  it('should have a <nav /> element', () => {
    expect(wrapper.find('nav')
          .length)
        .toBe(1);
  });

  it('should render the <a /> elements', () => {
    expect(wrapper.find('a')
          .length)
        .toBe(5);
  });

  it('should have an <ul /> element', () => {
    expect(wrapper.find('ul')
          .length)
        .toBe(1);
  });

  it('should have 4 <li /> element for the navbar menu', () => {
    expect(wrapper.find('li')
          .length)
        .toBe(4);
  });

  menuItems.forEach((menuItem, index) => {
    it(`should have ${menuItem} as it menu option element`, () => {
      expect(wrapper.find('li').nodes[index].props.children.props.children)
      .toBe(menuItem);
    });
  });
});
