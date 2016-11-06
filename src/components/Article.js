import React from 'react'

const IMAGE = require('../insert-coin_1024x680.jpg')

const Article = () => (
  <article id='content'>
    <section id='main'>
      <h1>insert coin</h1>
      <dl className='metadata'>
        <dt>Date</dt>
        <dd data-item='date'><time dateTime='2009-11-01T00:00:00+11:00'>2009-11-01</time></dd>
        <dt data-item='material'>Material</dt>
        <dd data-item='material'>Fotomontage</dd>
      </dl>
      <p>insert coin/drehkreuz</p>
      <p>concept for intervention in public space</p><small id='colophon'>{''}</small>
      <p><small id='colophon'>project: WECHSELSTROM (1) professor: Liz Bachhuber</small></p>
    </section>
    <aside className='category-nav-top'>
      <h3>Other Projects</h3>
      <nav className='page-navigation'>
        <p><a href='../../works/cafe-klein-arabistan/'>Café „Klein Arabistan“</a></p>
        <p id='project-count'>1/6</p>
        <p><a href=''>{''}</a></p>
      </nav>
    </aside>
    <section id='media'>
      <h3>Media</h3>
      <nav className='js-only' id='gallery'>
        <p id='gallery-count'><em>№</em> <span>1/1</span></p>
        <p><a href='#' id='next-image'>Next image</a></p>
        <p><a href='#' id='previous-image'>Previous image</a></p>
      </nav>
      <div id='media'>
        <figure>
          <img
            height='680'
            width='1024'
            alt=''
            src={IMAGE}
          />
        </figure>
      </div>
    </section>
    <aside className='category-nav-bottom'>
      <h3>Other Projects</h3>
      <nav className='page-navigation'>
        <p><a href='../../works/cafe-klein-arabistan/'>Café „Klein Arabistan“</a></p>
        <p id='project-count'>1/6</p>
        <p><a href=''>{''}</a></p>
      </nav>
    </aside>
  </article>
)

export default Article
