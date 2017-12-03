import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class ImportButtonComponent extends Component {

	render(){
		return(
			<View>
				<Button 
					buttonStyle={styles.button} 
					fontWeight='bold' 
					backgroundColor='green' 
					title='IMPORT' 
				/>
			</View>
		);
	}
}
const styles = StyleSheet.create({
    button: {
    	width: '50%',
    	borderRadius:30
    }
});