/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import {site} from '../../spec/fixtures.js'

import Page from './Page'

const fixtures = {
  site,
  page: {
    'title': 'Page Title',
    'date': '1970-01-01T00:00:00.000Z',
    'media': [ { 'source': 'img.jpg', 'caption': 'caption' } ],
    'material': [ 'material A', 'material B', ' materialC' ],
    'content': 'content',
    'colophon': 'colophon'
  }
}

it('renders', () => {
  const component = renderer.create(
    <Page site={fixtures.site} />
  )
  expect(component.toJSON()).toMatchSnapshot()
})
