import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, TextInput, StyleSheet, AsyncStorage } from 'react-native';
import GPSComponent from '../components/GPSComponent'

export default class NoteComponent extends Component {

	constructor() {
		super();
		this.state = {
			curDate: null,
			text: 'Enter'
		}
	}

	componentDidMount() {
        AsyncStorage.getItem("myKey").then((value) => {
            this.setState({"myKey": value});
        }).done();

        AsyncStorage.getItem("myKey2").then((value) => {
            this.setState({"myKey2": value});
        }).done();

		this.setState({
			curDate : new Date().toLocaleString()
		});
	}

    getInitialState() {
        return { };
    }

	render(){
		return(
			<View style={styles.conatiner}>
				<TextInput 
					style={{height: 40, width: 200, padding: 10, fontSize: 20}}
                    onChangeText={(userTitle) => this.saveTitle(userTitle)}
		       		autoFocus= {false}
		        	placeholder = {"Title"}
		        	returnKeyType = {"next"}
		        	defaultValue={this.state.myKey}
	        	/>
	        	<Text style={{fontSize: 20, marginBottom: 10}}> Date: {this.state.curDate} </Text>
	        	<GPSComponent />
	        	<View style={styles.textContainer}>
		        	<TextInput 
						style={{width: 350, padding: 10, marginTop: 10}}
						multiline={true}
						autoGrow={true}
		        		maxHeight={100}
                    	onChangeText={(userNote) => this.saveNote(userNote)}
			        	placeholder = {"Reminder Notes"}
			        	defaultValue={this.state.myKey2}
			        	/>
		        </View>
        	</View>

		);
	}

	saveTitle(value) {
        AsyncStorage.setItem("myKey", value);
        this.setState({"myKey": value});
    }

    saveNote(value) {
        AsyncStorage.setItem("myKey2", value);
        this.setState({"myKey2": value});
    }
}
const styles = StyleSheet.create({
	container: {
		padding: 20
	},
	textContainer: {
		height: 100
	}
});