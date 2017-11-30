import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, TextInput, StyleSheet} from 'react-native';

export default class MyFirstComponent extends Component {

	constructor() {
		super();
		this.state = {
			title: '',
			curDate: null,
			text: 'Enter'
		}
	}

	componentDidMount() {
	      this.setState({
	        curDate : new Date().toLocaleString()
	      })
	}

	render(){
		return(
			<View style={styles.conatiner}>
				<TextInput 
					style={{height: 40, width: 200, padding: 10}}
		       		onChangeText={(title) => this.setState({title})}
		       		autoFocus= {true}
		        	value={this.state.title}
		        	placeholder = {"Title"}
		        	returnKeyType = {"next"}
	        	/>
	        	<Text> Date: {this.state.curDate} </Text>
	        	<TextInput 
					style={{width: 350, padding: 10}}
					multiline={true}
					autoGrow={true}
	        		maxHeight={300}
		       		onChangeText={(text) => this.setState({text})}
		        	placeholder = {"Reminder Notes"}
		        	/>
        	</View>

		);
	}
}
const styles = StyleSheet.create({
	container: {
    padding: 20,
  },
});