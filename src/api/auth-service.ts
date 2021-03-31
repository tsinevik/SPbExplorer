import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const login = async (email: string, password: string) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
  } catch (e) {
    console.log(e);
  }
};

export const register = async (email: string, password: string) => {
  try {
    const credential = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    //todo should set default info for user
    await firestore().collection('users').doc(credential.user.uid).set({});
  } catch (e) {
    console.log(e);
  }
};

export const logout = async () => {
  try {
    await auth().signOut();
  } catch (e) {
    console.error(e);
  }
};
