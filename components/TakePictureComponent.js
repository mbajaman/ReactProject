import React, {Component} from 'react';
import {Text, View, StyleSheet } from 'react-native';
import { SocialIcon } from 'react-native-elements';

export default class TakePictureComponent extends Component {

	render(){
		return(
			<View>
				<SocialIcon 
  					button 
  					type='instagram'					
  					title='TAKE NEW' 
				/>
			</View>
		);
	}
}