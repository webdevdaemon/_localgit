import './SearchForm.css'

import React from 'react'
import SearchIcon from 'react-icons/lib/fa/search'
// import PropTypes from 'prop-types'
import Button from '../Button/index'


class SearchForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {inputValue: ''}
	}

	render() {
		return (
			<form className="SearchForm">
				<fieldset>
					<label htmlFor='user-search'>
						Search User Profiles
					</label>
					<input type='text'
						onChange={this.props.onChange}
						className='SearchBox'
						id='user-search'
					/>
					<SearchIcon />
					<Button>Robot</Button>
				</fieldset>
			</form>
		)
	}
}

SearchForm.propTypes = {}
SearchForm.defaultProps = {}

export default SearchForm
