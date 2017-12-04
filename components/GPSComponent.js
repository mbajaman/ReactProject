import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, AsyncStorage } from 'react-native';
import MapView from 'react-native-maps';

export default class GPSComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
	      region: {
			  latitude: 49.2817719,
			  latitudeDelta: 0,
			  longitude: -123.1173224,
			  longitudeDelta: 0,
		  }
    	};
	}
	
	componentDidMount () {
			navigator.geolocation.getCurrentPosition((position) => { //current position
				this.setState({
					region: {
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
						latitudeDelta: position.coords.accuracy/5000,
				  		longitudeDelta: position.coords.accuracy/5000
					},
				});
			});	
	}
	
    render() {
        return (
			<MapView //Location viewer and also saves reminder location
				region={this.state.region}
	        	style={{height: 200}}
				showsUserLocation={true}
				provider={'google'}
				showsMyLocationButton={true}
				loadingEnabled={true}>

				<MapView.Marker
				  coordinate={this.state.region}
				  image={{uri: 'http://www.myiconfinder.com/uploads/iconsets/256-256-a5485b563efc4511e0cd8bd04ad0fe9e.png'}}
				/>

			</MapView>
    	)
	}
}