import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.firebase_api_key,
    authDomain: process.env.firebase_auth_domain,
    databaseURL: process.env.firebase_database_url,
    projectId: 'climbookmark',
    storageBucket: process.env.firebase_storage_bucket,
    messagingSenderId: process.env.firebase_messaging_sender_id,
    appId: process.env.firebase_app_id
  })

}

const db = firebase.firestore();
const settings = { timestampsInSnapshots: true }
db.settings(settings);
firebase.db = db;

export default firebase 