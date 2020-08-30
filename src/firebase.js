import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCTqytN88fnQFKhW3FOp0z_I13KOsq4_Ec",
        authDomain: "todo-app-c607f.firebaseapp.com",
        databaseURL: "https://todo-app-c607f.firebaseio.com",
        projectId: "todo-app-c607f",
        storageBucket: "todo-app-c607f.appspot.com",
        messagingSenderId: "815600271773",
        appId: "1:815600271773:web:30b1401d48c4c2e65a6f74",
        measurementId: "G-D7G27SKWR0"
      }
    
);

const db = firebaseApp.firestore();
export default db;