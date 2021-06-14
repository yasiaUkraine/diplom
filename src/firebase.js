import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyAjKhPcqMm1nTvy7uaPIZyg18geOtiuvec",
  authDomain: "reactchatbot-75572.firebaseapp.com",
  databaseURL: "https://reactchatbot-75572-default-rtdb.firebaseio.com",
  projectId: "reactchatbot-75572",
  storageBucket: "reactchatbot-75572.appspot.com",
  messagingSenderId: "397270100203",
  appId: "1:397270100203:web:b60bbe7f0293fd5d2676ae"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const database = firebase.database();
export const createUserDocument = async (user, additionalData) => {
    if (!user) return;
  
    const userRef = firestore.doc(`users/${user.uid}`);
  
    const snapshot = await userRef.get();
  
    if (!snapshot.exists) {
      const { email } = user;
      const { displayName } = additionalData;
  
      try {
        await userRef.set({
          displayName,
          email,
          new: true,
          duration: '',
          profession: '',
          status: '',
          address: '',
          phone: '',
        });
      } catch (error) {
        console.log('Error in creating user', error);
      }
    }
  };
