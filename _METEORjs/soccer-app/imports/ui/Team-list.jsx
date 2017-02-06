import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';


export default class TeamList extends Component {
	render() {
		return (
			<div>
				<ListItem primaryText={this.props.player.name} leftAvatar={<Avatar src="MIXED.png"/>} rightIcon={<ActionDeleteForever />} />
			</div>
		)
	}
}
