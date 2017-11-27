import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons';

export default class App extends React.Component {
  render() {
    return (
    <View>
    	<View style={styles.header}>
	    	<Header
	    	  statusBarProps={{ barStyle: 'light-content' }}
			  leftComponent={{ icon: 'menu', color: '#fff' }}
			  centerComponent={{ text: 'MY REMINDERS', style: { color: '#fff' } }}
			  rightComponent={{ icon: 'home', color: '#fff' }}
			  outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
				/>
		</View>
	      <View style={styles.notesContainer}>
	        <Image 
	        	source={require('./assets/note-placeholder.png')}
	        	style={styles.placeholder}
	        />
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
