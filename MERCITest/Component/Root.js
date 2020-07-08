import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../candidat/Home';
import AboutCandidat from '../candidat/AboutCandidat';
import Register from '../Register/Register'
import InscriptionChant from '../candidat/InscriptionChant'
import Menu from '../candidat/Menu'
import Profil from '../candidat/Profil'
import ProfilSport from '../candidat/ProfilSport'
import Assistance from '../candidat/Assistance'
import FilePicker from '../Component/FIlePicker'
// import Dashboard from '../candidat/dashboard'
import SurveyScreen from '../Questionnaire/SurveyScreenChanteur'
import Survey from '../Questionnaire/Survey'
import Humoriste from '../Questionnaire/Humoriste'
import Comédien from '../Questionnaire/Comédien'
import Mannequin from '../Questionnaire/Mannequin'
import Télé from '../Questionnaire/Télé-réalité'
import Football from '../Questionnaire/Football'
import Basket from '../Questionnaire/Basket'
import Chat from '../Chat/Chat'
// import LoginScreen from '../Chat/LoginScreen'
import Login from '../Register/Login'

const RootStack = createStackNavigator({
    Home: {
        screen: Home,
    },
    AboutCandidat: {
        screen: AboutCandidat,
    },
    Register: {
        screen: Register,
    },
    InscriptionChant: {
        screen: InscriptionChant,
    },
    Menu: {
        screen: Menu,
    },
    FilePicker: {
        screen: FilePicker,
    },
    Profil: {
        screen: Profil,
    },
    ProfilSport: {
        screen: ProfilSport,
    },
    Assistance: {
        screen: Assistance,
    },
    SurveyScreen: {
        screen: SurveyScreen,
    },
    Survey: {
        screen: Survey,
    },
    Humoriste: {
        screen: Humoriste,
    },
    Comédien: {
        screen: Comédien,
    },
    Mannequin: {
        screen: Mannequin,
    },
    Télé: {
        screen: Télé,
    },
    Football: {
        screen: Football,
    },
    Basket: {
        screen: Basket,
    },
    Chat: {
        screen: Chat,
    },
    Login: {
        screen: Login,
    },
    // LoginScreen: {
    //     screen: LoginScreen,
    // }



    
});

export default createAppContainer(RootStack);
