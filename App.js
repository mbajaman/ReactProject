import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreenComponent from "./components/HomeScreenComponent"
import AddScreenComponent from "./components/AddScreenComponent"

export const ReminderApp = StackNavigator({
	Home: {
		screen: HomeScreenComponent
	},
	Add: {
		screen: AddScreenComponent
	}
});

export default class App extends Component {
    render() {
      return (
      	<ReminderApp />
      )
    }
}