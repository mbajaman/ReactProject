import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, StyleSheet } from 'react-native';
import { SocialIcon } from 'react-native-elements';

export default class TakePictureComponent extends Component {

	render(){
		return(
			<View>
				<SocialIcon 
					style={styles.button} 
					fontWeight='bold' 
  					button type='instagram'					
  					title='TAKE PICTURE' 
				/>
			</View>
		);
	}
}
const styles = StyleSheet.create({
    button: {
    	width: '50%'
    }
});