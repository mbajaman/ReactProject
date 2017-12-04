import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, TextInput, StyleSheet, AsyncStorage } from 'react-native';
import { Header, Button } from 'react-native-elements';

//External Components
import GPSComponent from '../components/GPSComponent'
import CameraComponent from '../components/CameraComponent'

export default class NoteComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			curDate: null, //Current Date and Time, also used as key for storing Reminders in AsyncStorage
			userTitle: this.props.title, //Reminder title
			userNotes: this.props.notes, //Remindder notes
		}
		this.displayData = this.displayData.bind(this);
	}

	static defaultProps = { //default properties are good to have. Good code!
		title: 'New Title',
		notes: 'New note'
	}

	componentDidMount() { //Set date / key and display info if it already exists!
		this.setState({
			curDate : new Date().toLocaleString()
		});
		if(this.props.status!=0){
			this.displayData();
		}
	}

	displayData = async () => {
		try{
			let user = await AsyncStorage.getItem(this.props.mykey); //Passing prop/key to fetch Reminder info
			let parsed = JSON.parse(user);
			this.setState({
				curDate: parsed.date,
				userTitle: parsed.title,
				userNotes: parsed.notes,
			});
		} catch(error) {
			console.log("No photos: "+ error)
		}
	}
	saveData() {
		const {navigate} = this.props.navigation;
		let obj = {
			title: this.state.userTitle,
			date: this.state.curDate,
			notes: this.state.userNotes,
		}
		AsyncStorage.setItem(obj.date, JSON.stringify(obj)); //Setting key value info for Reminder
		navigate('Home');
	}

	render(){
		const {navigate} = this.props.navigation; //navigation prop 
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
                          onPress = {this.saveData.bind(this)} //save text and date info!
                        />
                      }
                      outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
                    />
                </View>
				<TextInput  //Title
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
		        	<TextInput  //Notes
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
                  <CameraComponent cameraKey={this.props.mykey} status={this.props.status} /* Camera Key to set custom images for each reminder */ />
                </View>
        	</View>

		);
	}
}

//StyleSheet
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