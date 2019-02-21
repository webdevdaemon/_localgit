import './UserList.css'
import UserListItem from '../UserListItem/index'
import React from 'react'
import PropTypes from 'prop-types'

const UserList = (props) => {

	const user_list = props.users.map(
		(user, index) => (
			<UserListItem
				key={'medID-'+(index+1000)}
				data={user}
				full-name={`${user.first_name} ${user.last_name}`}
				
			/>
		)
	)

	<div className="UserList-wrap">
		<h3 className='UserList-title'>Users</h3>
		<ul className='UserList'>
			{ console.log(props.users) }
			{
				user_list
			}
		</ul>
	</div>
}
UserList.propTypes = { user: PropTypes.object }
UserList.defaultProps = {}

export default UserList
