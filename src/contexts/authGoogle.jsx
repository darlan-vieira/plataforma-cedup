/*import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { createContext } from 'react';
import { app } from '../services/firebase'

const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({})

export const AuthGoogleProvider = () => {
  const auth = getAuth(app)
  const [user, setUser] = useState(null)

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      setUser(user);
      sessionStorage.setItem("@AuthFirebase:token", token);
      sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
    
    }).catch((error) => {
     
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      
    });
  };

  return (
    <AuthGoogleContext.Provider value={{ signInGoogle, signed: !!user }}>
      
    </AuthGoogleContext.Provider>
  )
}*/