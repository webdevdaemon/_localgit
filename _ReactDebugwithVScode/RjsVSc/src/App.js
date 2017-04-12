import './App.css'

import React, { Component } from 'react'

import List from './Components/List/index'
// import ReactAddonsCSSTransitionGroup from 'react-addons-css-transition-group'
import SearchForm from './Components/SearchForm/index'
import Title from './Components/Title/index'
import _ from 'lodash'

const apiUrl = 'https://nodejs.org/dist/latest-v6.x/docs/api/all.json'

class App extends Component {

	constructor() {
		super()
		this.state = {
			raw: [],
			list: [],
			info: [],
			input: '',
		}
		this._jsonParsr = this._jsonParsr.bind(this)
		this._updateInputValue = this._updateInputValue.bind(this)
	}

	_updateInputValue(e) {
		console.log(e.target.value)
		this.setState({
			input: e.target.value
		})

	}

	_jsonParsr(jsn) {
		let arr = [],
			raw = [],
			list = [],
			info = []
		for (var x in jsn) {
			arr.push(jsn[x])
		}
		raw = _.flatten(arr)
		list = raw.map(m => {
			let neo = {}
			neo.name = m["textRaw"] || m["displayName"] || m["name"]
			neo.item = m
			neo.html = m["desc"] || ""
			neo.type = m["type"] || ""
			return (neo.name) ? neo : undefined
		}).filter(mo => mo !== undefined)
		info = list.map(mod => [mod.name, mod.type, mod.html])
		return ({
			raw,
			list,
			info
		})
	}

	componentWillMount() {}

	componentDidMount() {
		fetch(apiUrl)
			.then(response => response.json())
			.then(jRes => this._jsonParsr(jRes))
			.then(stateObject => {
				let {raw, list, info} = stateObject
				this.setState({
					raw,
					list,
					info
				})
				// console.log(stateObject)
				return Promise.resolve(stateObject)
			})
			.catch(err => console.log("ERROR:  ", err))
	}

	render() {
		return (
			<div className="App">
     <Title/>
     <SearchForm data={ this.state } updateInputValue={ this._updateInputValue } inputValue={ this.state.input } />
     <List {...this.state} active={ (this.state.input.length === 0) ? false : true } />
   </div>
		)
	}
}

export default App

// WEBPACK FOOTER //
// src/App.js
