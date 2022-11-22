import firebase from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import app from "../firebaseConfig.js"


export const AuthService = {
    loginWithGoogle: async () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        

        try {
            const userCredentials = await signInWithPopup(auth, provider);
            return {
                user: userCredentials,
            }
        } catch (e) {
            return {
                error: e.message,
            }
        }
    },
    logout: async() => {
        const auth = getAuth();
        await firebase.signOut(auth)
    }
}