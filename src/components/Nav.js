import React from 'react'

const Nav = () => (
  <nav id='primary'>
    <ol>
      <li>
        <a href='../../works/'>Works</a>
        <ol>
          <li>
            <a href='../../works/insert-coin/'>insert coin</a>
          </li>
          <li>
            <a href='../../works/cafe-klein-arabistan/'>Café „Klein Arabistan“</a>
          </li>
          <li>
            <a href='../../works/schwarzer-koffer/'>Schwarzer Koffer</a>
          </li>
          <li>
            <a href='../../works/auch-ich-in-arkadien/'>„Auch ich in Arkadien!“</a>
          </li>
          <li>
            <a href='../../works/lampe-panta-rhei/'>Lampe „Panta Rhei“</a>
          </li>
          <li>
            <a href='../../works/bitcoin-vending-machine/'>Bitcoin Vending Machine</a>
          </li>
        </ol>
      </li>
      <li>
        <a href='../../info/'>Info</a>
        <ol>
          <li>
            <a href='../../info/contact/'>contact</a>
          </li>
        </ol>
      </li>
    </ol>
  </nav>
)

export default Nav
