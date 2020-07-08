// import firebase from 'firebase'

// class Fire {
//   constructor () {
//     if (!firebase.apps.length) {
//       //avoid re-initializing
//       firebase.initializeApp({
//         apiKey: 'AIzaSyDLQMuVuVjNlA9BRp12oo2kGimFir4DJv4',
//         authDomain: 'merci-5be32.firebaseapp.com',
//         databaseURL: 'https://merci-5be32.firebaseio.com',
//         projectId: 'merci-5be32',
//         storageBucket: 'merci-5be32.appspot.com',
//         messagingSenderId: '409743395011',
//         appId: '1:409743395011:web:f6e05ff3b361034a637a76'
//       })
//     }
//   }

//   login = async (user, success_callback, failed_callback) => {
//     await firebase
//       .auth()
//       .signInWithEmailAndPassword(user.email, user.password)
//       .then(success_callback, failed_callback)
//   }

//   createAccount = async user => {
//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(user.email, user.password)
//       .then(
//         function () {
//           console.log(
//             'created user successfully. User email:' +
//               user.email +
//               ' name:' +
//               user.name
//           )
//           var user = firebase.auth().currentUser
//           userf.updateProfile({ displayName: user.name }).then(
//             function () {
//               console.log('Updated displayName successfully. name:' + user.name)
//               alert(
//                 'User ' + user.name + ' was created successfully. Please login.'
//               )
//             },
//             function (error) {
//               console.warn('Error update displayName.')
//             }
//           )
//         },
//         function (error) {
//           console.error(
//             'got error:' + typeof error + ' string:' + error.message
//           )
//           alert('Create account failed. Error: ' + error.message)
//         }
//       )
//   }

//   observeAuth = () =>
//     firebase.auth().onAuthStateChanged(this.onAuthStateChanged)

//   onAuthStateChanged = user => {
//     if (!user) {
//       try {
//         firebase.auth().signInAnonymously()
//       } catch ({ message }) {
//         alert(message)
//       }
//     }
//   }

//   get uid () {
//     return (firebase.auth().currentUser || {}).uid
//   }

//   get ref () {
//     return firebase.database().ref('messages')
//   }

//   parse = snapshot => {
//     const { timestamp: numberStamp, text, user } = snapshot.val()
//     const { key: _id } = snapshot
//     const timestamp = new Date(numberStamp)
//     const message = {
//       _id,
//       timestamp,
//       text,
//       user
//     }
//     return message
//   }

//   on = callback =>
//     this.ref
//       .limitToLast(20)
//       .on('child_added', snapshot => callback(this.parse(snapshot)))

//   get timestamp () {
//     return firebase.database.ServerValue.TIMESTAMP
//   }
//   // send the message to the Backend
//   send = messages => {
//     for (let i = 0; i < messages.length; i++) {
//       const { text, user } = messages[i]
//       const message = {
//         text,
//         user,
//         timestamp: this.timestamp
//       }
//       this.append(message)
//     }
//   }

//   append = message => this.ref.push(message)

//   // close the connection to the Backend
//   off () {
//     this.ref.off()
//   }
// }

// firebase.shared = new Fire()
// export default firebase

import firebase from 'firebase'

class FirebaseSDK {
  constructor () {
    if (!firebase.apps.length) {
      //avoid re-initializing
      firebase.initializeApp({
        apiKey: 'AIzaSyDLQMuVuVjNlA9BRp12oo2kGimFir4DJv4',
        authDomain: 'merci-5be32.firebaseapp.com',
        databaseURL: 'https://merci-5be32.firebaseio.com',
        projectId: 'merci-5be32',
        storageBucket: 'merci-5be32.appspot.com',
        messagingSenderId: '409743395011',
        appId: '1:409743395011:web:f6e05ff3b361034a637a76'
      })
    }
  }
  login = async (user, success_callback, failed_callback) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(success_callback, failed_callback)
  }
}
const firebaseSDK = new FirebaseSDK()
export default firebaseSDK
