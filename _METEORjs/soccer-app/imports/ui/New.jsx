
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Players } from  '../api/players';


const styles = {
	button: {
		height			: 'inherit',
		maxHeight 	: '66%',
		width       : '100%'
	},
	i: {
		fontSize: 24,
		marginRight: 16
	},
	label: {
		fontSize: 20,
		fontWeight: 'bold',
		textDecoration: 'underline',
		larger: {
			fontFamily: '"Avenir", "Lucida Sans", sans-serif',
			fontSize: 28,
			fontWeight: 'bolder',
			letterSpacing: -.75,
			textDecoration: 'underline'
		}
	},
	notes: {
		background: '#26a69a',
		borderRadius: 3,
		boxShadow: 'inset 2px 2px 4px rgba(0,0,0,.33)',
		boxSizing: 'border-box',
		color: 'white',
		height: '100%',
		margin: '0 auto',
		maxHeight: '66%',
		fontSize: 14,
		fontFamily: '"fira mono", "courier", monospace, sans-serif',
		padding: '4px 6px',
		width: '100%'
	}
};


export default class New extends Component {

	submitPlayer(event) {
		event.preventDefault();

		Players.insert(
			{
				name            : this.refs.name.value,
				team            : this.refs.team.value,
				ballManipulation: this.refs.ballManipulation.value,
				coverageSpeed   : this.refs.coverageSpeed.value,
				blockingAbility : this.refs.blockingAbility.value,
				gameStrategy    : this.refs.gameStrategy.value,
				kickingAbility  : this.refs.kickingAbility.value,
				playmaking      : this.refs.playmaking.value,
				passingAbility  : this.refs.passingAbility.value,
				tacklingAbility : this.refs.tacklingAbility.value,
				notes           : this.refs.notes.value,
				createdAt       : new Date()
			}
		);
		browserHistory.push('/');
	}

	render() {
		return (
			<div>
				<div className="row">
					<form className="col s12" onSubmit={this.submitPlayer.bind(this)}>

						<h2 style={styles.label.larger}>
							Add a New Player
						</h2>

						<div className="row row-01">

							<div className="input-field col s6 xs12">
								<input placeholder="Player Name" ref="name" type="text" className="validate"/>
							</div>

							<div className="input-field col s6 xs12">
								<input placeholder="Team Name" ref="team" type="text" className="validate"/>
							</div>
						</div>

						<div className="row row-02">
							<div className="col s6 xs12">
								<fieldset>
									<div className="label-wrapper">
										<label className="label-text" style={styles.label}>Ball Manipulation</label>
									</div>

									<select placeholder="Ball Manipulation" ref="ballManipulation" type="number" className="browser-default">
										<option value="0">0 - No Skill</option>
										<option value="1">1 - Novice Skill</option>
										<option value="2">2 - Veteran Skill</option>
										<option value="3">3 - Elite Skill</option>
									</select>
								</fieldset>
							</div>

							<div className="col s6 xs12">
								<fieldset>
									<div className="label-wrapper">
										<label className="label-text" style={styles.label}>Coverage Speed</label>
									</div>

									<select placeholder="Coverage Speed" ref="coverageSpeed" type="number" className="browser-default">
										<option value="0">0 - No Skill</option>
										<option value="1">1 - Novice Skill</option>
										<option value="2">2 - Veteran Skill</option>
										<option value="3">3 - Elite Skill</option>
									</select>
								</fieldset>
							</div>
						</div>

						<div className="row row-03">
							<div className="col s6 xs12">
								<fieldset>
									<div className="label-wrapper">
										<label className="label-text" style={styles.label}>Blocking Ability</label>
									</div>

									<select placeholder="Blocking Ability" ref="blockingAbility" type="number" className="browser-default">
										<option value="0">0 - No Skill</option>
										<option value="1">1 - Novice Skill</option>
										<option value="2">2 - Veteran Skill</option>
										<option value="3">3 - Elite Skill</option>
									</select>
								</fieldset>
							</div>

							<div className="col s6 xs12">

								<fieldset>

									<div className="label-wrapper">
										<label className="label-text" style={styles.label}>Game Strategy</label>
									</div>

									<select placeholder="Game Strategy" ref="gameStrategy" type="number" className="browser-default">
										<option value="0">0 - No Skill</option>
										<option value="1">1 - Novice Skill</option>
										<option value="2">2 - Veteran Skill</option>
										<option value="3">3 - Elite Skill</option>
									</select>

								</fieldset>
							</div>
						</div>

						<div className="row row-04">
							<div className="col s6 xs12">
								<fieldset>
									<div className="label-wrapper">
										<label className="label-text" style={styles.label}>Kicking Ability</label>
									</div>

									<select placeholder="Kicking Ability" ref="kickingAbility" type="number" className="browser-default">
										<option value="0">0 - No Skill</option>
										<option value="1">1 - Novice Skill</option>
										<option value="2">2 - Veteran Skill</option>
										<option value="3">3 - Elite Skill</option>
									</select>
								</fieldset>
							</div>

							<div className="col s6 xs12">

								<fieldset>
									<div className="label-wrapper">
										<label className="label-text" style={styles.label}>Playmaking</label>
									</div>

									<select placeholder="Playmaking" ref="playmaking" type="number" className="browser-default">
										<option value="0">0 - No Skill</option>
										<option value="1">1 - Novice Skill</option>
										<option value="2">2 - Veteran Skill</option>
										<option value="3">3 - Elite Skill</option>
									</select>
								</fieldset>
							</div>
						</div>

						<div className="row row-05">
							<div className="col s6 xs12">
								<fieldset>

									<div className="label-wrapper">
										<label className="label-text" style={styles.label}>Passing Ability</label>
									</div>

									<select placeholder="Passing Ability" ref="passingAbility" type="number" className="browser-default">
										<option value="0">0 - No Skill</option>
										<option value="1">1 - Novice Skill</option>
										<option value="2">2 - Veteran Skill</option>
										<option value="3">3 - Elite Skill</option>
									</select>

								</fieldset>
							</div>

							<div className="col s6 xs12">
								<fieldset>
									<div className="label-wrapper">
										<label className="label-text" style={styles.label}>Tackling Ability</label>
									</div>

									<select placeholder="Tackling Ability" ref="tacklingAbility" type="number" className="browser-default">
										<option value="0">0 - No Skill</option>
										<option value="1">1 - Novice Skill</option>
										<option value="2">2 - Veteran Skill</option>
										<option value="3">3 - Elite Skill</option>
									</select>
								</fieldset>
							</div>
						</div>

						<div className="row row-06">
							<div className="input-field col s12">

								<textarea placeholder="Notes" ref="notes" type="text" className="materialize-textarea" rows="5" style={styles.notes}/>

							</div>
						</div>

						<div className="row row-07">
							<div className="input-field col s12">

								<button ref="team" className="btn waves-effect waves-light" type="submit" action="#" href="#" style={styles.button}>
									<h4><i className="material-icons inline" style={styles.i}>send</i>add player</h4>
								</button>

							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
