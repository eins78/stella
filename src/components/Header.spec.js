/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import * as fixtures from '../../spec/fixtures.js'

import Header from './Header'

it('renders', () => {
  const component = renderer.create(
    <Header site={fixtures.site} />
  )
  expect(component.toJSON()).toMatchSnapshot()
})
