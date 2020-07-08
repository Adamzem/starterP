// import React, { Component } from 'react'
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Button,
//   Alert,
//   ActivityIndicator
// } from 'react-native'
// import firebase from '../Firebase/FIre'

// export default class Signup extends Component {
//   constructor () {
//     super()
//     this.state = {
//       displayName: '',
//       email: '',
//       password: '',
//       isLoading: false
//     }
//   }

//   updateInputVal = (val, prop) => {
//     const state = this.state
//     state[prop] = val
//     this.setState(state)
//   }

//   registerUser = () => {
//     if (this.state.email === '' && this.state.password === '') {
//       Alert.alert('Enter details to signup!')
//     } else {
//       this.setState({
//         isLoading: true
//       })
//       firebase
//         .auth()
//         .createUserWithEmailAndPassword(this.state.email, this.state.password)
//         .then(res => {
//           res.user.updateProfile({
//             displayName: this.state.displayName
//           })
//           console.log('User registered successfully!')
//           this.setState({
//             isLoading: false,
//             displayName: '',
//             email: '',
//             password: ''
//           })
//           this.props.navigation.navigate('Login')
//         })
//         .catch(error => this.setState({ errorMessage: error.message }))
//     }
//   }

//   render () {
//     if (this.state.isLoading) {
//       return (
//         <View style={styles.preloader}>
//           <ActivityIndicator size='large' color='#9E9E9E' />
//         </View>
//       )
//     }
//     return (
//       <View style={styles.container}>
//         <TextInput
//           style={styles.inputStyle}
//           placeholder='Name'
//           value={this.state.displayName}
//           onChangeText={val => this.updateInputVal(val, 'displayName')}
//         />
//         <TextInput
//           style={styles.inputStyle}
//           placeholder='Email'
//           value={this.state.email}
//           onChangeText={val => this.updateInputVal(val, 'email')}
//         />
//         <TextInput
//           style={styles.inputStyle}
//           placeholder='Mot de passe'
//           value={this.state.password}
//           onChangeText={val => this.updateInputVal(val, 'password')}
//           maxLength={15}
//           secureTextEntry={true}
//         />
//         <Button
//           color='#4056f4'
//           title='Inscription'
//           onPress={() => this.registerUser()}
//         />

//         <Text
//           style={styles.loginText}
//           onPress={() => this.props.navigation.navigate('Login')}
//         >
//           Already Registered? Click here to login
//         </Text>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     padding: 35,
//     backgroundColor: '#ce2d4f'
//   },
//   inputStyle: {
//     width: '100%',
//     marginBottom: 15,
//     paddingBottom: 15,
//     alignSelf: 'center',
//     borderColor: '#ccc',
//     borderBottomWidth: 1
//   },
//   loginText: {
//     color: 'white',
//     marginTop: 25,
//     textAlign: 'center'
//   },
//   preloader: {
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     position: 'absolute',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff'
//   }
// })



import React from 'react';
import { ImagePicker, Permissions } from 'expo';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Button,
	ImageEditor
} from 'react-native';

import Fire from '../Firebase/Fire';


export default class Signup extends React.Component {
    static navigationOptions = {
		title: 'RN + Firebase Chat App'
	};
    state = {
		email: '',
		password: '',
		avatar: ''
    };
    

	onPressCreate = async () => {
		try {
			const user = {
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
			};
			await Fire.createAccount(user);
		} catch ({ message }) {
			console.log('create account failed. catch error:' + message);
		}
		this.props.navigation.navigate('Login')
	};

	onChangeTextEmail = email => this.setState({ email });
	onChangeTextPassword = password => this.setState({ password });
	onChangeTextName = name => this.setState({ name });

	onImageUpload = async () => {
		const { status: cameraRollPerm } = await Permissions.askAsync(
			Permissions.CAMERA_ROLL
		);
		try {
			// only if user allows permission to camera roll
			if (cameraRollPerm === 'granted') {
				let pickerResult = await ImagePicker.launchImageLibraryAsync({
					allowsEditing: true,
					aspect: [4, 3]
				});
				console.log(
					'ready to upload... pickerResult json:' + JSON.stringify(pickerResult)
				);

				var wantedMaxSize = 150;
				var rawheight = pickerResult.height;
				var rawwidth = pickerResult.width;
				var ratio = rawwidth / rawheight;
				var wantedwidth = wantedMaxSize;
				var wantedheight = wantedMaxSize / ratio;
				// check vertical or horizontal
				if (rawheight > rawwidth) {
					wantedwidth = wantedMaxSize * ratio;
					wantedheight = wantedMaxSize;
				}
				let resizedUri = await new Promise((resolve, reject) => {
					ImageEditor.cropImage(
						pickerResult.uri,
						{
							offset: { x: 0, y: 0 },
							size: { width: pickerResult.width, height: pickerResult.height },
							displaySize: { width: wantedwidth, height: wantedheight },
							resizeMode: 'contain'
						},
						uri => resolve(uri),
						() => reject()
					);
				});
				let uploadUrl = await Fire.uploadImage(resizedUri);
				this.setState({ avatar: uploadUrl });
				await Fire.updateAvatar(uploadUrl);
			}
		} catch (err) {
			console.log('onImageUpload error:' + err.message);
			alert('Upload image error:' + err.message);
		}
	};

	render() {
		return (
			<View>
				<Text style={styles.title}>Email:</Text>
				<TextInput
					style={styles.nameInput}
					placeHolder="test@live.com"
					onChangeText={this.onChangeTextEmail}
					value={this.state.email}
				/>
				<Text style={styles.title}>Password:</Text>
				<TextInput
					style={styles.nameInput}
					onChangeText={this.onChangeTextPassword}
					value={this.state.password}
				/>
				<Text style={styles.title}>Name:</Text>
				<TextInput
					style={styles.nameInput}
					onChangeText={this.onChangeTextName}
					value={this.state.name}
				/>
				<Button
					title="Signup"
					style={styles.buttonText}
					onPress={this.onPressCreate}
				/>
			</View>
		);
	}
}

const offset = 16;
const styles = StyleSheet.create({
	title: {
		marginTop: offset,
		marginLeft: offset,
		fontSize: offset
	},
	nameInput: {
		height: offset * 2,
		margin: offset,
		paddingHorizontal: offset,
		borderColor: '#111111',
		borderWidth: 1,
		fontSize: offset
	},
	buttonText: {
		marginLeft: offset,
		fontSize: 42
	}
});