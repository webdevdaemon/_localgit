import './App.css'

import users from './medical_data.1'
import React, { Component } from 'react'

import TitleBlock from './_Components/TitleBlock/index'
import UserList from './_Components/UserList/index'
import SearchForm from './_Components/SearchForm/index'
// import PropTypes from 'prop-types'

class App extends Component {
	constructor(props) {
	  super(props)
	  this.state = { users, inputValue: '' }
	  this._filterUsers = this._filterUsers.bind(this)
	  this._onChange = this._onChange.bind(this)
	}

// complete filterusers function to pass down to searchform so that searchform can manipulate the 'userlist' state from below.

	_onChange(e) {
		// let val = e.target.value.trim()
		let filtered = this._filterUsers(this.state.inputValue.toLowerCase().trim())
		// let filtered = this.state.users.filter()

		this.setState({users: filtered}, () => {
			console.log('state state changed')
		})
	}

	_filterUsers(query) {
		console.log(query, users)
		return this.state.users.filter((user) => (
			query === user.first_name.slice(0, query.trim().length).toLowerCase() ||
			query === user.last_name.slice(0, query.trim().length).toLowerCase()
		))
	}

	componentDidMount() {
		console.log(this.state.users)
	}

	render() {
		return (
			<div className="App">
				<TitleBlock
					mainTitle='Find a User'
					subTitle='Search by Name Below...'
				/>
				<SearchForm
					filter={this._filterUsers}
					onChange={this._onChange}
				/>
				<UserList
					users={this.state.users}
				/>
			</div>
		)
	}
}

export default App
