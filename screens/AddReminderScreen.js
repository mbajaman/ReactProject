import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons';

import NoteComponent from '../components/NoteComponent'

export default class AddScreenComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  } 

  static navigationOptions = {
        header: null,
    };
    
  render() {
    return (
      <View>
        <NoteComponent navigation={this.props.navigation}/>
      </View>
    );
  }
}