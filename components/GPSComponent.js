import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default class GPSComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			LatLng: {
				latitude: null,
				longitude: null
			},
		};
	}
	
	componentDidMount () {
		navigator.geolocation.getCurrentPosition((position) => {
			console.log('Before setting the state :' + this.state.LatLng);
			console.log('Current latitude: ' + position.coords.latitude);
			console.log('Current longitude: ' + position.coords.longitude);
			console.log('After setting the state :' + this.state.LatLng);
		});
	}
	
    render() {
        return (
			<MapView
				LatLng={this.state.LatLng}
				style={styles.map}
			>

			<MapView.Marker
            coordinate={{
            	latitude: 49.260633,
            	longitude: -123.246005
            }}
            title={"Current Location"}
            pinColor={'blue'}
         	/>
         	
			</MapView>
    	)
	}
}

const styles = StyleSheet.create({
	map: {
		...StyleSheet.absoluteFillObject,
	},
});