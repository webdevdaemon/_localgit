import './SearchForm.css'

import React from 'react'

const SearchForm = (props) => {
	console.log(props.data)
	let inputValue = props.inputValue
	return (
		<div className='SearchForm'>
    <form className='search-form'>
      <input type='text' className='search' placeholder='Search Node Docs...' value={ inputValue } onChange={ props.updateInputValue } />
      <input className="submit" type="image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/479875/search-icon-grey.png" alt="Search" />
    </form>
  </div>
	)
}

export default SearchForm
