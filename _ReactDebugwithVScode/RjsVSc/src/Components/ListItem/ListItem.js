import './ListItem.css'

import React from 'react'

const ListItem = (props) => {
	let {name, ...type} = props
	return (
		<li className='ListItem'>
    <div className="flex-row space-between">
      <a href={ `${name}` }>
        <p className='ListItem-name'>
          { name }
        </p>
      </a>
      <p className='ListItem-type'>
        { type }
      </p>
    </div>
  </li>
	)
}

export default ListItem
