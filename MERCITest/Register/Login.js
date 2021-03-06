import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Fire from '../Firebase/Fire';

export default class Login extends React.Component {
	static navigationOptions = {
		title: ''
	};

	state = {
		name: '',
		email: '',
		password: '',
		avatar: ''
	};

	onPressLogin = async () => {
		const user = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
		};

		const response = Fire.login(
			user,
			this.loginSuccess,
			this.loginFailed
		);
	};

	loginSuccess = () => {
		console.log('login successful, navigate to chat.');
		this.props.navigation.navigate('Menu', {
			name: this.state.name,
			email: this.state.email,
			avatar: this.state.avatar
		});
	};

	loginFailed = () => {
		alert('Echec de connexion !.');
	};

	onChangeTextEmail = email => this.setState({ email });
	onChangeTextPassword = password => this.setState({ password });

	render() {
		return (
			<View>
				<Text style={styles.title}>Email:</Text>
				<TextInput
					style={styles.nameInput}
					placeHolder="test3@gmail.com"
					onChangeText={this.onChangeTextEmail}
					value={this.state.email}
				/>
				<Text style={styles.title}>Password:</Text>
				<TextInput
					style={styles.nameInput}
					onChangeText={this.onChangeTextPassword}
					value={this.state.password}
				/>
				<Button
					title="Login"
					style={styles.buttonText}
					onPress={this.onPressLogin}
				/>

				<Button
					title="Signup"
					style={styles.buttonText}
					onPress={() => this.props.navigation.navigate('Signup')}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		marginTop: 16,
		marginLeft: 16,
		fontSize: 16
	},
	nameInput: {
		height: 16 * 2,
		margin: 16,
		paddingHorizontal: 16,
		borderColor: '#111111',
		borderWidth: 1,
		fontSize: 16
	},
	buttonText: {
		marginLeft: 16,
		fontSize: 42
	}
});