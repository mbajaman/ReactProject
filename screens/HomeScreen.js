import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableHighlight, ScrollView, AsyncStorage } from 'react-native';
import { Header } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons';

//Main screen component
export default class HomeScreenComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
        	reminders: []
        };
        this.displayData = this.displayData.bind(this); //Bind for setting state
    }

    static navigationOptions = { //removes StackNavigator header
        header: null,
    };

    componentDidMount() {
		this.displayData(); //Display reminders
	}

    displayData = async () => {
		try{
			await AsyncStorage.getAllKeys().then(async (value) => {  //fetch all Reminder 'keys'
				let reminders = value.map(async (val, key) => {
					let objectData = await AsyncStorage.getItem(val); //fetch all Reminder 'values'
					let parsedObjectData = JSON.parse(objectData);
					this.state.reminders.push(parsedObjectData);
					this.setState({
						reminders: this.state.reminders //Set reminder values
					})
				})
			})
		} catch(error) {
			console.log("No photos: "+ error)
		}
	}
    
    //Render Function
    render() {
        const {navigate} = this.props.navigation;
        let reminderData = this.state.reminders.map(function(p,index){ //Assigning Reminder data
        	if(Object.keys(p).length == 4){ //Elements if photos Array exists in Reminder
	        	return (
	        		<View style={{margin: 5}} key={index} >
	        			<TouchableHighlight onPress={() => navigate('Add',{status: 1, key: p.date } )}>
	        				<Image style={styles.reminderTile} source={{uri: p.photosArray[0].uri}} />
	        			</TouchableHighlight>
	        			<View style={styles.reminderBanner}>
	        				<Text style={styles.reminderTileText}>{p.title}</Text>
	        				<Text style={styles.reminderTileText}>{p.date}</Text>
	        			</View>
	        		</View>
	        	)
        	} else if(Object.keys(p).length == 3) { //Elements if no photos Array exists
        		return (
	        		<View style={{margin: 5}} key={index} >
	        			<TouchableHighlight onPress={() => navigate('Add',{status: 1, key: p.date })}>
		        			<View style={{backgroundColor:'#808080', height: 280, width: 170, borderRadius: 40}}/>
		        		</TouchableHighlight>
		        			<View style={styles.reminderBanner}>
		        				<Text style={styles.reminderTileText}>{p.title}</Text>
		        				<Text style={styles.reminderTileText}>{p.date}</Text>
		        			</View>
	        		</View>
	        	)
        	}
        })
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header //Header for homeScreen
                      statusBarProps={{ barStyle: 'light-content' }}
                      leftComponent={{ icon: 'menu', color: '#fff' }} //Menu for future features.
                      centerComponent={{ text: 'MY REMINDERS', style: { fontSize: 15, color: '#fff' } }}
                      outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
                    />
                </View>
	                <ScrollView contentContainerStyle={styles.scrollContainer}>
	                	{reminderData}
	                    <TouchableHighlight onPress={() => navigate('Add', {status: 0, key: 'default'})}>
	                        <Image style={styles.placeholder} source={require('../assets/note-placeholder.png')} />
	                    </TouchableHighlight>
	                </ScrollView>
                </View>
        );
    }
}

//Styling
const styles = StyleSheet.create({
	container: {
		height: '100%',
		backgroundColor: 'white',
	},
	header: {
		width: '100%',
	},
	placeholder: {
		height: 280,
		width: 170,
		resizeMode: 'contain',
		margin: 5
	},
	scrollContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	reminderTile: {
		height: 280,
		width: 170,	
		borderRadius: 40,
		opacity:0.7,
	},
	reminderBanner: {
		backgroundColor: '#000',
		position: 'absolute',
		bottom: 0,
		left: 0,
		height: '30%',
		padding:10,
		paddingLeft: '20%',
		width: '100%',
		borderBottomLeftRadius: 40,
		borderBottomRightRadius: 40,
	},
	reminderTileText: {
		color: '#fff',
		fontSize: 15,
		fontWeight: 'bold'
	}
});