import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {useState} from 'react'
import firebase from './firebase'
import { onAuthStateChanged } from 'firebase/auth'

const {Navigator, Screen} = createNativeStackNavigator()

// Screens
import Login from './Login';
import Loading from './components/Loading';
import MainRoutes from './screens/MainRoutes/Index'
import MateriRoutes from './screens/MateriRoutes/Index'

export default function App() {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  onAuthStateChanged(firebase.auth, (user) => {
    if(user) {
      setAuthenticated(true)
      setLoading(false)
    }else {

      setLoading(false)
    }
  })

  return (
    <NavigationContainer>
      {loading ? (
        <Loading />
      ) : (
        <Navigator screenOptions={{headerShown: false, animation: 'fade'}}>
          {authenticated ? (
            <>
              <Screen name='MainRoutes' option={{headerShown: false}} component={MainRoutes} />
              <Screen name='MateriRoutes' option={{headerShown: false}} component={MateriRoutes} />
            </>
          ) : (
            <Screen name='Login' options={{headerShown: false}} component={Login} />
          )}
        </Navigator>
      )}
    </NavigationContainer>
  );
}