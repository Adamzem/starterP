import React from "react";
import { View, Text, StyleSheet, Button, ImageBackground } from "react-native";
import Swiper from "react-native-web-swiper";


export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Swiper>
                    <View style={[styles.slideContainer]}>
                        <ImageBackground source={require('../assets/candidat_1.jpg')} style={{ width: '100%', height: '100%' }} />
                    </View>

                    <View style={[styles.slideContainer]}>
                        <ImageBackground source={require('../assets/candidat_3.jpg')} style={{ width: '100%', height: '100%' }} />
                    </View>

                    <View>
                        <View>
                            <Button
                                title="Créer un compte"
                                onPress={() => this.props.navigation.navigate('AboutCandidat')}
                            />

                            <Text>OU</Text>

                            <Button
                                title="S'Identifier"
                                onPress={() => this.props.navigation.navigate('Login')}
                            />
                        </View>

                        <View style={{ position: 'relative' }}>
                            <ImageBackground source={require('../assets/candidat_2.jpg')} style={styles.imageSlide3} />
                        </View>
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
        alignItems: "center",
        justifyContent: "center",
    },
    slideContainer3: {
        flex: 2,
        alignItems: "center",
        backgroundColor: 'grey',

    },
    imageSlide3: {
        width: '100%',
        height: '100%',
        marginRight: 410

    }
});

