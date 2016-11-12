/* eslint-disable no-unused-vars */

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import libPath from 'path'
import sortBy from 'lodash/sortBy'
import toPairs from 'lodash/toPairs'
import flatten from 'lodash/flatten'
import merge from 'lodash/merge'
import find from 'lodash/find'
import get from 'lodash/get'
import set from 'lodash/set'
import omit from 'lodash/omit'

import Layout from './components/Layout'
import Page from './components/Page'
import './css/style.css'

const _pages = require('./pages.json').pages
const content = {
  pages: _pages,
  sitemap: buildSitemapFromPages(_pages)
}

export const Debug = (props) => <pre>{JSON.stringify(props, 0, 2)}</pre>

const App = (props) => {
  const {params, location, route, router, routes, routeParams, ...restProps} = props
  return <Layout {...restProps} sitemap={toPairs(route.content.sitemap)} />
}

const Home = (props) => <div>
  <h2>Home</h2>
</div>

const CategoryIndex = ({params, route}) => {
  const category = route.sitemap[params.category]
  return <nav className='category'>
    <ul>
      {toPairs(category.children).map(([key, page]) =>
        <li className={`page-#{page.slug}`} key={key}>
          <h2>
            <Link to={page.path}>{page.title}</Link>
          </h2>
          {page.thumb
            ? <img className='project-thumb' src={page.thumb.url} alt={page.title} />
            : <div className='project-thumb' style={{color: page.page.data.color}} />
          }
          {/* {% if child.date %}{% include 'partials/date.html' %}{% endif %} */}
          {/* {% include 'partials/listing/category.html' with { 'page' : child } %} */}
        </li>
      )}
    </ul>
  </nav>
}

const CategoryPage = ({params, route}) => {
  const {pages} = route // injected static data
  // NOTE: this query seems roundabout but also normalizes the pathname
  const page = find(pages, {pathName: `${params.category}/${params.page}`})
  return <Page {...page.data} />
}

const Root = () =>
  <Router history={browserHistory}>
    <Route path='/' component={App} content={content} >
      <IndexRoute component={Home} />
      <Route path=':category'>
        <IndexRoute component={CategoryIndex} sitemap={content.sitemap} />
        <Route path=':page' component={CategoryPage} pages={content.pages} />
      </Route>
    </Route>
  </Router>

ReactDOM.render(<Root />, document.getElementById('root'))

// helpers

function buildSitemapFromPages (pages) {
  return (pages.reduce((siteMap, page) => {
    const key = flatten(page.pathName.split('/')
      .map((k) => [k, 'children'])).slice(0, -1)

    return merge({}, siteMap, set({}, key, {
      path: '/' + page.pathName,
      title: get(page, 'data.title') || page.slug,
      slug: page.slug,
      page: page
    }))
  }, {}))
}
