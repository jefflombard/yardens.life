import React from 'react'
import PropTypes from 'prop-types'

export const HTMLInfo = ({ info, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: info }} />
)

const Info = ({ info, className }) => (
  <div className={className}>{info}</div>
)

Info.propTypes = {
    info: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = info.propTypes

export default Info
