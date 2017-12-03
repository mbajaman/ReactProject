import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class CancelButtonComponent extends Component {

	render(){
		return(
			<View>
				<Button 
				buttonStyle={styles.button} 
				fontWeight='bold' 
				backgroundColor='#3D6DCC' 
				title='CANCEL' 
			/>
			</View>
		);
	}
}
const styles = StyleSheet.create({
    button: {
    	margin: 0,
    	padding:0,
    }
});