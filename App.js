import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from "./screens/HomeScreen"
import AddReminderScreen from "./screens/AddReminderScreen"
import NoteComponent from './components/NoteComponent'

export const ReminderApp = StackNavigator({
	Home: {
		screen: HomeScreen
	},
	Add: {
		screen: AddReminderScreen
	},
	Note: {
		screen: NoteComponent
	}
});

export default class App extends Component {
    render() {
      return (
      	<ReminderApp />
      )
    }
}