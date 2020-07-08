import React from 'react'
import { StyleSheet, Image, View, Text, TouchableHighlight } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default class Menu extends React.Component {
  static navigationOptions = {
    title: 'Menu',
    headerLeft: null
  }

  render () {


    return (
      <View style={style.container}>
        <View style={style.main_container}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Profil')}
          >
            <Image
              style={style.image}
              source={require('../assets/mon-profil.png')}
            />
          </TouchableHighlight>
          <Text style={style.textinput}></Text>

          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Chat')}
          >
            <Image
              style={style.image}
              source={require('../assets/messages.png')}
            />
          </TouchableHighlight>
          <Text style={style.textinput}></Text>

          <Image style={style.image} source={require('../assets/media.png')} />
          <Text style={style.textinput}></Text>

          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Assistance')}
          >
            <Image
              style={style.image}
              source={require('../assets/assistance.png')}
            />
          </TouchableHighlight>
          <Text style={style.textinput}></Text>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <Image
              style={style.image}
              source={require('../assets/deconexion.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ce2d4f'
  },

  main_container: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  // textinput: {
  //     fontSize: 10,
  // },
  image: {
    width: 40,
    height: 40,
    marginLeft: 33
  }
})
