import React, { Component } from 'react';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
// import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

// import FontIcon from 'material-ui/FontIcon';
// import SvgIconFace from 'material-ui/svg-icons/action/face';
import { blue200,  indigo900 } from 'material-ui/styles/colors';

const styles = {
	chip: {
		margin      : '4',
		width       : 'inherit'
	},
	wrapper: {
		display     : 'flex',
		flexWrap    : 'wrap'
	},
	button: {
		margin: 12
	},
};

export default class Player extends Component {
	render() {
		return (
			<Card>
				<CardMedia overlay={ <CardTitle title="Monitor Jones" subtitle="Part Man, Part Computer" /> } >
					<img src="code.jpg" />
				</CardMedia>
				<CardText>
					<div style={styles.wrapper}>
						<Chip backgroundColor={blue200} style={styles.chip} >
							<Avatar size={32} color={blue200} backgroundColor={indigo900}>1</Avatar>
							ball manipulation
						</Chip>
						<Chip backgroundColor={blue200} style={styles.chip} >
							<Avatar size={32} color={blue200} backgroundColor={indigo900}>2</Avatar>
							coverage speed
						</Chip>
						<Chip backgroundColor={blue200} style={styles.chip} >
							<Avatar size={32} color={blue200} backgroundColor={indigo900}>3</Avatar>
							blocking ability
						</Chip>
						<Chip backgroundColor={blue200} style={styles.chip} >
							<Avatar size={32} color={blue200} backgroundColor={indigo900}>4</Avatar>
							game strategy
						</Chip>
						<Chip backgroundColor={blue200} style={styles.chip} >
							<Avatar size={32} color={blue200} backgroundColor={indigo900}>5</Avatar>
							kicking ability
						</Chip>
						<Chip backgroundColor={blue200} style={styles.chip} >
							<Avatar size={32} color={blue200} backgroundColor={indigo900}>6</Avatar>
							playmaking
						</Chip>
						<Chip backgroundColor={blue200} style={styles.chip} >
							<Avatar size={32} color={blue200} backgroundColor={indigo900}>7</Avatar>
							passing ability
						</Chip>
						<Chip backgroundColor={blue200} style={styles.chip} >
							<Avatar size={32} color={blue200} backgroundColor={indigo900}>8</Avatar>
							tackling ability
						</Chip>
					</div>
				</CardText>
				<CardActions>
					<p> {"<---(CardActions Here)--->"} </p>
				</CardActions>
			</Card>
		)
	}
}
