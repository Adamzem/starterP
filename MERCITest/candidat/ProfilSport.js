import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import Swiper from "react-native-web-swiper";


export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Swiper>
                    <View style={[styles.slideContainer]}>
                        <ImageBackground source={require('../assets/profil-candidat-sport-1.jpg')} style={{ width: '100%', height: '100%' }} />

                    </View>
                    <View style={[styles.slideContainer]}>
                        <ImageBackground source={require('../assets/profil-candidat-2.jpg')} style={{ width: '100%', height: '100%' }} />
                    </View>

                    <View style={[styles.slideContainer]}>
                        <ImageBackground source={require('../assets/profil-candidat-3.jpg')} style={{ width: '100%', height: '100%' }} />
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
});

