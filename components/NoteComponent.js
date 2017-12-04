import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, TextInput, StyleSheet, AsyncStorage } from 'react-native';
import { Header, Button } from 'react-native-elements';

import GPSComponent from '../components/GPSComponent'
import CameraComponent from '../components/CameraComponent'

export default class NoteComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			curDate: null,
			userTitle: '',
			userNotes: '',
		}
		this.displayData = this.displayData.bind(this);
	}

	componentDidMount() {
		this.setState({
			curDate : new Date().toLocaleString()
		});
		if(this.props.status!=0){
			this.displayData();
		}
	}

	displayData = async () => {
		try{
			let user = await AsyncStorage.getItem('user');
			let parsed = JSON.parse(user);
			this.setState({
				curDate: parsed.date,
				userTitle: parsed.title,
				userNotes: parsed.notes,
			});
		} catch(error) {
			alert(error);
		}
	}
	saveData() {
		let obj = {
			title: this.state.userTitle,
			date: this.state.curDate,
			notes: this.state.userNotes,
		}
		AsyncStorage.setItem('user', JSON.stringify(obj));
	}

	render(){
		const {navigate} = this.props.navigation;
		return(
			<View style={styles.container}>
			<View style={styles.header}>
                    <Header
                      statusBarProps={{ barStyle: 'light-content' }}
                      leftComponent={
                        <Button 
                          buttonStyle={styles.button} 
                          fontWeight='bold' 
                          backgroundColor='#3D6DCC' 
                          title='CANCEL' 
                          onPress = {() => navigate('Home')}
                        />
                      }
                      centerComponent={{ text: 'NEW REMINDER', style: { fontSize: 15, color: '#fff' } }}
                      rightComponent={
                        <Button 
                          buttonStyle={styles.button} 
                          fontWeight='bold' 
                          backgroundColor='#3D6DCC' 
                          title='SAVE' 
                          onPress = {this.saveData.bind(this)}
                        />
                      }
                      outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
                    />
                </View>
				<TextInput 
					style={{height: 40, width: 200, padding: 10, fontSize: 20}}
                    onChangeText={(userTitle) => this.setState({userTitle})}
		       		autoFocus= {false}
		        	placeholder = {"Title"}
		        	returnKeyType = {"next"}
		        	defaultValue={this.state.userTitle}
	        	/>
	        	<Text style={{fontSize: 20, marginBottom: 10}}> Date: {this.state.curDate} </Text>
	        	<GPSComponent />
	        	<View style={styles.textContainer}>
		        	<TextInput 
						style={{width: 350, padding: 10, marginTop: 10}}
						multiline={true}
						autoGrow={true}
		        		maxHeight={100}
                    	onChangeText={(userNotes) => this.setState({userNotes})}
			        	placeholder = {"Reminder Notes"}
			        	defaultValue={this.state.userNotes}
			        	/>
		        </View>
		        <View style= {styles.bottomView}>
                  <CameraComponent status={this.props.status}/>
                </View>
        	</View>

		);
	}
}
const styles = StyleSheet.create({
	textContainer: {
		height: 100
	},
	header: {
      width: '100%',
    },
    placeholder: {
      height: 280,
      width: 170,
      resizeMode: 'contain',
    },
    button: {
      margin: 0,
      padding:0
    },
    bottomView: {
      height: '30%'
    },
});