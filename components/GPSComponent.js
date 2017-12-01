import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default class GPSComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
	      region: {
			  latitude: 49,
			  latitudeDelta: 0,
			  longitude: -123,
			  longitudeDelta: 0,
		  },
    	};
	}
	
	componentDidMount () {
		navigator.geolocation.getCurrentPosition((position) => {
			console.log('Before setting the state: ' + this.state.region.latitude + ', ' + this.state.region.longitude);
			console.log('Current location: ' + position.coords.latitude + ', ' + position.coords.longitude);
			this.setState({
				region: {
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
					latitudeDelta: position.coords.accuracy/1500,
			  		longitudeDelta: position.coords.accuracy/1500
				},
			});
			console.log('After setting the state: ' + this.state.region.latitude + ', ' + this.state.region.longitude);
		});
	}
	
    render() {
        return (
			<MapView
			region={this.state.region}
        	style={{height: 200, marginTop: 10}}
			>

			<MapView.Marker
            coordinate={this.state.region}
            title={"Current Location"}
            pinColor={'blue'}
         	/>
         	
			</MapView>
    	)
	}
}