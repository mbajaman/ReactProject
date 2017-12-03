import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import GPSComponent from '../components/GPSComponent'

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
					style={{height: 40, width: 200, padding: 10, fontSize: 20}}
		       		onChangeText={(title) => this.setState({title})}
		       		autoFocus= {true}
		        	value={this.state.title}
		        	placeholder = {"Title"}
		        	returnKeyType = {"next"}
	        	/>
	        	<Text style={{fontSize: 20, marginBottom: 10}}> Date: {this.state.curDate} </Text>
	        	<GPSComponent />
	        	<View style={styles.textContainer}>
		        	<TextInput 
						style={{width: 350, padding: 10, marginTop: 10}}
						multiline={true}
						autoGrow={true}
		        		maxHeight={100}
			       		onChangeText={(text) => this.setState({text})}
			        	placeholder = {"Reminder Notes"}
			        	/>
		        </View>
        	</View>

		);
	}
}
const styles = StyleSheet.create({
	container: {
    padding: 20,
  },
  textContainer :{
  	height: 100,
  }
});