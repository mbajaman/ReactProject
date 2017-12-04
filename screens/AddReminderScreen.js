import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons';

//Main NoteComponent
import NoteComponent from '../components/NoteComponent'

export default class AddScreenComponent extends Component {

  static navigationOptions = { //removes StackNavigator header
        header: null,
    };
    
  render() { // Passing params to create Unique Reminders and status to determine if new or existing reminder.
    return (
      <View>
        <NoteComponent mykey={this.props.navigation.state.params.key} status={this.props.navigation.state.params.status} navigation={this.props.navigation}/>
      </View>
    );
  }
}