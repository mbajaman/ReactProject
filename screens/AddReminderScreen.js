import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons';

import NoteComponent from '../components/NoteComponent'
import GPSComponent from '../components/GPSComponent'
import ImportButtonComponent from '../components/ImportButtonComponent'
import TakePictureComponent from '../components/TakePictureComponent'

export default class AddScreenComponent extends Component {

  static navigationOptions = {
        header: null,
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return (

            <View style={styles.theScreen}>
                <View style={styles.header}>
                    <Header
                      statusBarProps={{ barStyle: 'light-content' }}
                      leftComponent={
                        <Button 
                          buttonStyle={styles.button} 
                          fontWeight='bold' 
                          backgroundColor='#3D6DCC' 
                          title='CANCEL' 
                          onPress = {() => navigate('Home')}
                        />
                      }
                      centerComponent={{ text: 'NEW REMINDER', style: { fontSize: 15, color: '#fff' } }}
                      rightComponent={
                        <Button 
                          buttonStyle={styles.button} 
                          fontWeight='bold' 
                          backgroundColor='#3D6DCC' 
                          title='SAVE' 
                        />
                      }
                      outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
                    />
                </View>
                <NoteComponent />

                <View style={styles.bottomButtons}>
                  <View style={styles.buttonContainer}>
                    <ImportButtonComponent />
                  </View>
                  <View style={styles.buttonContainer}>
                    <TakePictureComponent />
                  </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    theScreen: {
      height: '100%'
    },    
    header: {
      width: '100%',
    },
    placeholder: {
      height: 280,
      width: 170,
      resizeMode: 'contain',
    },
    notesContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: '#fff',
      padding: 10,
    },
    button: {
      margin: 0,
      padding:0
    },
    bottomButtons: {
      position: 'absolute',
      bottom: 0,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      flex: 1,
    }
});