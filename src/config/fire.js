import firebase from 'firebase';

var config = {
  apiKey: process.env.REACT_API_KEY,
  authDomain: process.env.REACT_AUTH_DOMAIN,
  projectId: process.env.REACT_PROJECT_ID,
  storageBucket: process.env.REACT_BUCKET,
  messagingSenderId: process.env.REACT_SENDER_ID,
  appId: process.env.REACT_APPID,
};
const fire = firebase.initializeApp(config);

export default fire;
