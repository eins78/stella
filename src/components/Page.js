import React from 'react'
import Moment from 'moment'
import ReactMarkdown from 'react-markdown'
import isEmpty from 'lodash/isEmpty'

// import {Debug} from '../index.js'
import Media from './Media'

const t = (key) => ({
  'Date': 'Date'
}[key] || String(key))

// inline-only markdown
export const Md = (props) =>
  <Markdown {...props} escapeHtml
    unwrapDisallowed allowedTypes={['Text', 'Strong', 'Emph', 'Code']} />

const Markdown = ({source, children, ...restProps}) =>
  (!!source || !!children) &&
    <ReactMarkdown {...restProps} source={source || children} />

const Date = ({time}) => {
  let m
  try { m = Moment(new Date(time)) } catch (e) {}
  const dateTime = !m ? null : m.format()
  const text = !m ? time : m.format('YYYY-MM-DD')
  return <time dateTime={dateTime}>{text}</time>
}

const Article = (props) => {
  const {title, date, content, media, colophon} = props
  const material = Array.isArray(props.material)
    ? props.material : [props.material]

  // const media = Object.keys(props)
  //   .filter((k) => ['.jpg', '.jpeg', '.png', '.gif'].includes(extname(k)))

  window.props = props

  return <article id='content'>
    <section id='main'>

      <h1>{title}</h1>

      {(date || !isEmpty(material)) &&
        <dl className='metadata'>

          {date && <dt>{t('Date')}</dt>}
          {date && <dd data-item='date'><Date time={date} /></dd>}

          {material && <dt data-item='material'>Material</dt>}
          {material.map((str, i) => <dd data-item='material' key={i}>{str}</dd>)}
        </dl>
      }

      <Markdown source={content} className='content' />

      <small className='colophon'>
        <Markdown source={colophon} />
      </small>
    </section>

    {/* <Debug {...props} /> */}

    {/* <aside className='category-nav-top'>
      <h3>Other Projects</h3>
      <nav className='page-navigation'>
        <p><a href='../../works/cafe-klein-arabistan/'>Café „Klein Arabistan“</a></p>
        <p id='project-count'>1/6</p>
        <p><a href=''>{''}</a></p>
      </nav>
    </aside> */}

    {!isEmpty(media) &&
      <section id='media'>
        <h3>Media</h3>
        {/* <nav className='js-only' id='gallery'>
          <p id='gallery-count'><em>№</em> <span>1/1</span></p>
          <p><a href='#' id='next-image'>Next image</a></p>
          <p><a href='#' id='previous-image'>Previous image</a></p>
        </nav> */}
        {media.map(Media)}
      </section>
    }

    {/* <aside className='category-nav-bottom'>
      <h3>Other Projects</h3>
      <nav className='page-navigation'>
        <p><a href='../../works/cafe-klein-arabistan/'>Café „Klein Arabistan“</a></p>
        <p id='project-count'>1/6</p>
        <p><a href=''>{''}</a></p>
      </nav>
    </aside> */}

  </article>
}

export default Article
