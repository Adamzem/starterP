import React from 'react';
import Swiper from "react-native-web-swiper";
import { View, StyleSheet, TextInput, Button } from 'react-native'




export default class InscriChan extends React.Component {

    state = {
        username: '', password: '', email: '', phone_number: ''
    }
    state = {
        image: null,
    };

    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }
    signUp = async () => {
        const { Pseudo, Mot_de_passe, } = this.state
        try {
            console.log('user successfully signed up!: ', success)
        } catch (err) {
            console.log('error signing up: ', err)
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <Swiper>
                    <View style={styles.containertxt}>
                        <TextInput style={styles.containertxt}
                            style={styles.input}
                            placeholder='Nom'
                            autoCapitalize="none"
                            placeholderTextColor='black'
                            onChangeText={val => this.onChangeText('Pseudo', val)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Prenom'
                            secureTextEntry={true}
                            autoCapitalize="none"
                            placeholderTextColor='black'
                            onChangeText={val => this.onChangeText('Mot de passe', val)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Téléphone'
                            secureTextEntry={true}
                            autoCapitalize="none"
                            placeholderTextColor='black'
                            onChangeText={val => this.onChangeText('email', val)}
                        />
                    </View>
                    <View style={[styles.slideContainer, styles.slide2]}>
                        <TextInput style={styles.containertxt}
                            style={styles.input}
                            placeholder='Email'
                            autoCapitalize="none"
                            placeholderTextColor='black'
                            onChangeText={val => this.onChangeText('Pseudo', val)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Mot de passe'
                            autoCapitalize="none"
                            placeholderTextColor='black'
                            onChangeText={val => this.onChangeText('Mot de passe', val)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Date de naissance'
                            autoCapitalize="none"
                            placeholderTextColor='black'
                            onChangeText={val => this.onChangeText('email', val)}
                        />
                        <Button
                            title="Terminer"
                            onPress={() => this.props.navigation.navigate('Menu')} />
                    </View>

                </Swiper>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    slideContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    slide1: {
        backgroundColor: "#ce2d4f"
    },
    slide2: {
        backgroundColor: "#ce2d4f"
    },
    slide3: {
        backgroundColor: "#ce2d4f"
    },
    input: {
        width: 350,
        height: 55,
        backgroundColor: 'white',
        margin: 10,
        padding: 8,
        color: 'black',
        borderRadius: 150,
        fontSize: 18,
        fontWeight: '500',
    },
    containertxt: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#ce2d4f'
    },
    Boutton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
