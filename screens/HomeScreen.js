import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableHighlight } from 'react-native';
import { Header } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons';

export default class HomeScreenComponent extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    static navigationOptions = {
        header: null,
    };
    
    render() {
        const {navigate} = this.props.navigation;
        
        return (
            <View>
                <View style={styles.header}>
                    <Header
                      statusBarProps={{ barStyle: 'light-content' }}
                      leftComponent={{ icon: 'menu', color: '#fff' }}
                      centerComponent={{ text: 'MY REMINDERS', style: { fontSize: 15, color: '#fff' } }}
                      rightComponent={{ icon: 'home', color: '#fff' }}
                      outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
                    />
                </View>
                <View style={styles.notesContainer}>
                    <TouchableHighlight onPress={() => navigate('Add')}>
                        <Image style={styles.placeholder} source={require('../assets/note-placeholder.png')} />
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
});