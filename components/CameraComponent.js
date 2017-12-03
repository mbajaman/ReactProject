import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, 
	View, 
	StyleSheet,
	TouchableOpacity,
	Dimensions,
	Image,
	ScrollView } from 'react-native';
import { ImagePicker } from 'expo';

export default class SelectPictureComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			photos: []
		};
	}

	//Gallery image picker to choose image from local files.
	_pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true, //Allows cropping and rotation.
			aspect: [5, 5], //Sets cropping ratios.
		});

		if(!result.cancelled) {
			this.state.photos.push(result); // adds image to array 'photo'.
			this.setState({
				photos: this.state.photos //updates state.photo with new image.
			});
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
			this.state.photos.push(result); // adds image to array 'photo'.
			this.setState({
				photos: this.state.photos //updates state.photo with new image.
			});
		}
	};

	render(){
		const width = Dimensions.get('window'); //Dynamic scaling for various devices.

		return(
			<View>
			<View style={styles.container}>
					<ScrollView
						contentContainerStyle = {styles.scrollView} >
						<TouchableOpacity onPress={ this.fbFetchPhoto.bind(this) } >
						{this.state.fbImage ? (
							<Image 
							style={styles.image}
							source={this.state.fbImage}
	                         />
							) : null }
							
                         </TouchableOpacity> 

						{this.state.photos.map(function(p, index) {
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
					<Text> Wee </Text>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
  container: {
	height: '100%',
	width: '100%',
    backgroundColor: '#000',
  },
  bottomContainer: {
  	height:50,
  	backgroundColor: "#663399",
  },
  image: {
  	height: (Dimensions.get('window').height/3) - 12,
  	width: (Dimensions.get('window').width/2) - 2,
  	margin: 1,
  },
  scrollView: {
  	flexWrap: 'wrap',
  	flexDirection: 'row',
  },
});

