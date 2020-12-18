import firebase from 'firebase/app';
import 'firebase/database'; //import do serviço que estamos usando (database)
import 'firebase/auth'; //import do serviço que estamos usando (authentication)

/**
 * Configurações geradas quando o database é criado no google
 * web service.
 * 
 * Essa configuração vai permitir que a minha aplicação
 * acesse o database (que está na cloud).
 */
let firebaseConfig = {                               
    apiKey: "AIzaSyA1Fz7Z3COh2otGbnax7DK-_BjO-wF7QCc",
    authDomain: "reactapp-b26f0.firebaseapp.com",
    projectId: "reactapp-b26f0",
    storageBucket: "reactapp-b26f0.appspot.com",
    messagingSenderId: "888102623108",
    appId: "1:888102623108:web:c0db8d317cf8f6c4086fd1",
    measurementId: "G-6KYCWH34K9"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
else {
    firebase.app(); // if already initialized, use that one
}

export default firebase;