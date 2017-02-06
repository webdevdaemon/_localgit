// modules
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import RaisedButton from 'material-ui/RaisedButton';
// exported Component/Module Main-App
import Appbar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
// Components
import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Player from './Player';

export default class App extends Component {

	constructor(props) {
		super(props);

		// setting up strategy
		this.state = { players: [] };
	}

	componentWillMount() {
		this.setState({ players: [
			{
				_id: 1,
				name: "Yander Salamander",
				ballManipulation: 2,
				coverageSpeed: 3,
				blockingAbility: 1,
				gameStrategy: 2,
				kickingAbility: 2,
				playmaking: 2,
				passingAbility: 3,
				duelTacklingAbility: 3,
			},
			{
				_id: 2,
				name: "Blaze Grundleduster",
				ballManipulation: 2,
				coverageSpeed: 3,
				blockingAbility: 1,
				gameStrategy: 2,
				kickingAbility: 2,
				playmaking: 2,
				passingAbility: 3,
				duelTacklingAbility: 3,
			},
			{
				_id: 3,
				name: "Hands McFist",
				ballManipulation: 2,
				coverageSpeed: 3,
				blockingAbility: 1,
				gameStrategy: 2,
				kickingAbility: 2,
				playmaking: 2,
				passingAbility: 3,
				duelTacklingAbility: 3,
			}
		]})
	}

	renderPlayers() {
		return this.state.players.map(player => <TeamList key={player._id} player={player} />)
	}

	render()	{
		return  (
			<MuiThemeProvider>
				<div className="container">
					<Appbar title="Soccer Application" iconClassNameRight="muidocs-icon-navigation-expand-more" showMenuIconButton={ false } />
					<div className="row">
						<div className="col s12 m7">
							<Player />
						</div>
						<div className="col s12 m5">
							<h2>Team List</h2>
							<Divider />
							<List>{this.renderPlayers()}</List>
							<Divider />
						</div>
						<div className="col s12 m5"><TeamStats/></div>
					</div>
				</div>
			</MuiThemeProvider>
		)
	}
}
