import React from 'react'
import {Link} from 'react-router'

const NavLink = ({to, href, ...restProps}) =>
  <Link {...restProps} to={to || href} activeClassName='active' />

const Nav = ({sitemap}) => (
  <nav id='primary'>
    <ol>
      {sitemap.map(([key, page]) =>
        <li key={key}>
          <NavLink href={'/' + key}>{key}</NavLink>
          {/* <ol>
            <li>
              <a href='../../works/insert-coin/'>insert coin</a>
            </li>
          </ol> */}
        </li>
      )}
    </ol>
  </nav>
)

export default Nav
