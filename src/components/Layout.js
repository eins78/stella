import React from 'react'

import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({children, ...restProps}) => (
  <div {...restProps}>

    {/* <Head>
      <meta charset='utf-8' />
      <title>MFA</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head> */}

    <div id='wrapper'>

      <Header />
      <hr />

      <a className='sr-only' href='#content'>Skip to Content</a>
      <Nav />
      {children}
      <hr />

    </div>

    <Footer />
  </div>
)

export default Layout
