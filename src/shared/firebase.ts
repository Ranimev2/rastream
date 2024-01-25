import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyANiGzzQIuanlz64qtN-COcfl3rjVvxWaU",
  authDomain: "yooo-4f4a0.firebaseapp.com",
  projectId: "yooo-4f4a0",
  storageBucket: "yooo-4f4a0.appspot.com",
  messagingSenderId: "708706443794",
  appId: "1:708706443794:web:c896931d615702279eaecb"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  export const db =  getFirestore(app)
