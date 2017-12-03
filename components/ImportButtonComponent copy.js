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
					backgroundColor='#3D6DCC' 
					title='IMPORT' 
				/>
			</View>
		);
	}
}
const styles = StyleSheet.create({
    button: {
		position: "absolute", 
		bottom: 0, 
		left: 0    
	}
});