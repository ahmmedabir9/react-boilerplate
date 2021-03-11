import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

var firebaseConfig = {
  //Firebase Config File
};
firebase.initializeApp(firebaseConfig);

// export const firestore = firebase.firestore();
// export const auth = firebase.auth();
// export const storage = firebase.storage();

// export const provider = new firebase.auth.GoogleAuthProvider();
// export const signInWithGoogle = () => {
//   auth
//     .signInWithPopup(provider)
//     .then(function (result) {
//       var token = result.credential.accessToken;
//       var user = result.user;
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// };
// export const signOut = () => auth.signOut();

// window.firebase = firebase;

// export const createUserProfileDocument = async (user, additionalData) => {
//   if (!user) return;

//   const userRef = firestore.doc(`users/${user.uid}`);

//   const snapshot = await userRef.get();

//   if (!snapshot.exists) {
//     const { displayName, email, photoURL } = user;
//     const createdAt = new Date();
//     try {
//       await userRef.set({
//         displayName,
//         email,
//         photoURL,
//         createdAt,
//         ...additionalData,
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return getUserDocument(user.uid);
// };

// export const getUserDocument = async (uid) => {
//   if (!uid) return null;

//   try {
//     const userDocument = await firestore.collection("users").doc(uid);

//     return { uid, ...userDocument.data };
//   } catch (error) {
//     console.error(error);
//   }
// };

export default firebase;
