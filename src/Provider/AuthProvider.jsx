import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config"
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";

<<<<<<< HEAD

=======
// Don't remove get auth from here. Merge your code according to this
>>>>>>> e88660c656882feeb4519b2c3fa094ffd627f461
const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider(auth);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //google signup
  const googleLogin = () => {
    signInWithPopup(auth, googleProvider);
    setLoading(true);
  };
  //email signup
  const userRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
   
  };

  //login
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //signOut
  const userSignOut = () => {
    signOut(auth)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.code);
      });
    setLoading(true);
  };
  //auth state change
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);
  //accessing profile information
  const userProfile = (name, image) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  const authInfo = {
    loading,
    googleLogin,
    userRegister,
    loginUser,
    user,
    userSignOut,
    userProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
