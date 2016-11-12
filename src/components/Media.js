import React from 'react'
import {parse as parseUrl} from 'url'
import {extname} from 'path'

const Media = ({src, alt, caption}) => {
  if (!src) return false

  // TMP: only support images
  if (!['.jpg', '.jpeg', '.png', '.gif'].includes(extname(src))) {
    return false
  }

  // point to media folder if src is local path
  const imgSrc = parseUrl(src).host ? src : `/media/${src}`

  return (<div id='media'>
    <figure>
      <img alt={alt || caption} src={imgSrc} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  </div>)
}

export default Media
