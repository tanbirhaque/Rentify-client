import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
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
import Swal from "sweetalert2";

// Don't remove get auth from here. Merge your code according to this
const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider(auth);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //google signup
  const googleLogin = () => { setLoading(true);
   return signInWithPopup(auth, googleProvider);
   
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
    setLoading(true);
    return signOut(auth)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.code);
        Swal.fire({
          title: err.code,
          timer: 2000,
          color: "#ec3323",
          showConfirmButton: false,
          icon: "error",
        });
      });
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
