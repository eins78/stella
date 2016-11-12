/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import Nav from './Nav'

it('renders', () => {
  const component = renderer.create(
    <Nav sitemap={[['one', {}], ['two', {}]]} />
  )
  expect(component.toJSON()).toMatchSnapshot()
})
