import React from 'react'
import { pageLink } from '../data';
import PageLink from './PageLink';
const PageLinks = ({parentClass, itemClass}) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLink.map((link) => {
        return <PageLink id={link.id} link={link} itemClass={itemClass}/>
      })}
    </ul>
  )
}

export default PageLinks;