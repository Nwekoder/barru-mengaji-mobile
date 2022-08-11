import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAxVY5AQNqsBuafusp-x-ZE8JzyrQe8nBs",
    authDomain: "barru-mengaji.firebaseapp.com",
    projectId: "barru-mengaji",
    storageBucket: "barru-mengaji.appspot.com",
    messagingSenderId: "558042609099",
    appId: "1:558042609099:web:7a3bb9248058218e15324e"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const firebase = {
    db,
    auth
}

export default firebase