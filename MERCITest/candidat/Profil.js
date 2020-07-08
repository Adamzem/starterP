import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import Swiper from "react-native-web-swiper";


export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Swiper>
                    {/* <View>
                    <Image style={styles.image}
                        source={require('../assets/messages.png')}
                        fadeDuration={0}

                    />
                    </View> */}

                    <View style={[styles.slideContainer]}>
                        <ImageBackground source={require('../assets/profil-candidat-1.jpg')} style={{ width: '100%', height: '90%' }} />

                        {/* <View>
                            <Text style={styles.Nom}>Lilia, 25 ans</Text>
                        </View> */}
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
        flex: 1,

    },
    slideContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: 30,
        height: 30,
        marginBottom: 100,
        marginLeft: 80
    },
    Nom: {
        fontSize: 20,
        marginTop:40,
        flex: 1
    }
});

