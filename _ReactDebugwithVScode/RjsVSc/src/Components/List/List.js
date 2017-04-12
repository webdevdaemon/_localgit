import './List.css'

import ListItem from '../ListItem/index'
import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const List = ({input, list, ...props}) => {

	// const data = props.data,
	// 	{input, list} = data

	const listResults = (arr, str) => {
		let arrList = arr,
			inputVal = str,
			inputRegX = new RegExp(`^(${inputVal[0]})(${inputVal.slice(1, 0)})`, 'i')

		console.log('%c RegX = ', 'font-size:36px;color:red;')
		console.log(inputRegX)

		return arrList.filter((obj) => {
			console.log(obj.name, inputRegX.test(obj.name))
			return inputRegX.test(obj.name)
		})
			.map(
				(item, dex) => {
					console.log(item.name)
					return (
						<ListItem name={ item.name } type={ item.type } html={ item.html } key={ `item-${dex}` } />
					)
				}
		)
	}

	let results = listResults(list, input)

	console.log('%c results = ', 'font-size:36px;color:red;')
	console.log(results)

	return (!props.active) ? null :
		(
		<ReactCSSTransitionGroup component='ul' className='List' animation='slide' transitionEnterTimeout={ 500 } transitionLeaveTimeout={ 500 }>
    { results }
  </ReactCSSTransitionGroup>
		)
}

export default List
