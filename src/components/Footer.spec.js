/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import * as fixtures from '../../spec/fixtures.js'

import Footer from './Footer'

it('renders', () => {
  const component = renderer.create(
    <Footer site={fixtures.site} />
  )
  expect(component.toJSON()).toMatchSnapshot()
})
