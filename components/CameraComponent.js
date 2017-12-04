import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, StyleSheet, TouchableOpacity, Dimensions, Image, ScrollView, AsyncStorage } from 'react-native';
import { ImagePicker } from 'expo';
import { SocialIcon } from 'react-native-elements';

export default class CameraComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			photos: {
				photosArray: [],
			}
		};
		this.displayData = this.displayData.bind(this);
	}

	componentDidMount() {
		if(this.props.status!=0){
			this.displayData();	
		}
	}

	displayData = async () => {
		try{
			let user = await AsyncStorage.getItem(this.props.cameraKey);
			let parsed = JSON.parse(user);
			if(parsed.photosArray){
				this.setState({
					photos: {
						photosArray : parsed.photosArray
					}
				});
			}
		} catch(error) {
			console.log("No photos: "+ error)
		}
	}

	_mergeFunction() {
		AsyncStorage.mergeItem(this.props.cameraKey, JSON.stringify(this.state.photos));
	}

	//Gallery image picker to choose image from local files.
	_pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true, //Allows cropping and rotation.
			aspect: [5, 5], //Sets cropping ratios.
		});

		if(!result.cancelled) {
			this.state.photos.photosArray.push(result); // adds image to array 'photo'.
			this.setState({
				photos: this.state.photos //updates state.photo with new image.
			});
			this._mergeFunction();
		}
	};

	//Allows user to take a photo with Camera and add it to array 'photos' (state.photos).
	_takePhoto = async () => {
		console.log(this.state.token);
		let result = await ImagePicker.launchCameraAsync({
			allowsEditing: true,
			aspect: [5, 5],
			quality: 1,
		});

		if(!result.cancelled) {
			this.state.photos.photosArray.push(result); // adds image to array 'photo'.
			this.setState({
				photos: this.state.photos //updates state.photo with new image.
			});
			this._mergeFunction();
		}
	};

	render(){
		const width = Dimensions.get('window'); //Dynamic scaling for various devices.

		return(
			<View style={styles.container}>
				<View>
					<ScrollView
						contentContainerStyle = {styles.scrollView} >

						{this.state.photos.photosArray.map(function(p, index) {
							return(
								<TouchableOpacity key={index}>
									<Image 
									style={styles.image}
									source={{uri: p.uri}}
									key={index}
			                         />
		                         </TouchableOpacity>
							)
						})
						}
					</ScrollView>
				</View>
				<View style={styles.bottomContainer}>
					<View style={styles.buttons}>
						<SocialIcon 
		  					button type='instagram'					
		  					title='IMPORT' 
		  					onPress={ this._pickImage}
						/>
					</View>
					<View style={styles.buttons}>
						<SocialIcon 
		  					button type='instagram'					
		  					title='TAKE NEW'
		  					onPress = { this._takePhoto }
						/>
					</View>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		height: '100%',
		padding: 5
	},
	bottomContainer: {
		position: 'absolute',
		bottom: 0,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttons: {
		flex: 1
	},	
	image: {
		height: (Dimensions.get('window').height/3) - 17,
		width: (Dimensions.get('window').width/2) - 7,
		margin: 1,
	},
	scrollView: {
		flexWrap: 'wrap',
		flexDirection: 'row',
	},
});