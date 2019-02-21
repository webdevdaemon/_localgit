import './UserListItem.css'
import React from 'react'
import PropTypes from 'prop-types'

const UserListItem = ({data:user, ...props}) => (

	<li key={ user.id } className='UserListItem' style={ { backgroundColor: user.bg_color } }>
		<div className='user-display'>
            <div className='avatar-wrap'>
				<img src={ user.avatar } alt={ user.username } />
			</div>
            <div className='username-wrap full-name'>
				<h2 className='first-name'>{ user.first_name }</h2>
				<h2 className='last-name'>{ user.last_name }</h2>
            </div>
		</div>
		<div className='username-wrap'>
			<h2>{ user.username }</h2>
		</div>
	</li>
)
UserListItem.propTypes = { data: PropTypes.object }
UserListItem.defaultProps = {}

export default UserListItem
