import React, {Component} from 'react';
import {Text, View, StyleSheet } from 'react-native';
import { SocialIcon } from 'react-native-elements';

export default class ImportButtonComponent extends Component {

	render(){
		return(
			<View>
				<SocialIcon 
  					button 
  					type='instagram'					
  					title='IMPORT' 
				/>
			</View>
		);
	}
}