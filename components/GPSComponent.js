import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
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
		  },
    	};
		this.onRegionChange = this.onRegionChange.bind(this);
	}

	onRegionChange(region) {
		console.log(region);
		this.setState({
			region
		});
	}
	
	componentDidMount () {
		navigator.geolocation.getCurrentPosition((position) => {
			console.log('Before setting the state: ' + this.state.region.latitude + ', ' + this.state.region.longitude);
			console.log('Current location: ' + position.coords.latitude + ', ' + position.coords.longitude);
			this.setState({
				region: {
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
					latitudeDelta: position.coords.accuracy/5000,
			  		longitudeDelta: position.coords.accuracy/5000
				},
			});
			console.log('After setting the state: ' + this.state.region.latitude + ', ' + this.state.region.longitude);
		});
	}
	
    render() {
        return (
			<MapView
				region={this.state.region}
				onRegionChange={this.onRegionChange}
	        	style={{height: 200}}
				showsUserLocation={true}
				provider={'google'}
				showsMyLocationButton={true}
				loadingEnabled={true}
			>
         	
			</MapView>
    	)
	}
}