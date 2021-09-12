import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.firebase.api_key,
    authDomain: firebase.auth_domain,
    databaseURL: process.env.firebase.database_url,
    projectId: 'climbookmark',
    storageBucket: process.env.firebase.storage_bucket,
    messagingSenderId: process.env.firebase.messaging_sender_id,
    appId: process.env.firebase.app_id
  })

}

const db = firebase.firestore();
const settings = { timestampsInSnapshots: true }
db.settings(settings);
firebase.db = db;

export default firebase 