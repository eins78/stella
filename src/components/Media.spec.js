/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import Media from './Media'

it('renders', () => {
  const component = renderer.create(
    <Media src='img.jpg' caption='caption txt' alt='alt txt' />
  )
  expect(component.toJSON()).toMatchSnapshot()
})
