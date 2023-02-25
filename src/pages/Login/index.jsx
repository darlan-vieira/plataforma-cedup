import { GithubLogo, GoogleChromeLogo } from 'phosphor-react'
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import { app } from '../../services/firebase'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const provider = new GoogleAuthProvider();


export function Login() {
  const [login, setLogin] = useState(false)
  const auth = getAuth(app)

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
    <div className="h-screen bg-gradient-to-t from-purple-900 to-purple-300 text-white p-4 flex flex-col items-center space-y-6">
      <header className="container flex justify-center max-w-5xl p-4">
        <h1 className="text-roxo-900 text-3xl  font-bold flex flex-col items-center">Plataforma Cedup</h1>
      </header>
        
    <div className="container max-w-5xl flex-1 p-4 flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-6">
      <div className="md:flex-1 flex justify-center">
        <img src="/images/cedup01.png" className="w-96"/>
      </div>
  
      <div className="md:flex-1 flex flex-col items-center space-y-6">
        <h1 className="text-2xl text-roxo-900 text-center md:text-left font-bold mb-8">Seja Bem Vindo(a)</h1>
          <div className="flex flex-col gap-4">
            <div className='flex flex-row items-center gap-4 '>
              <Link to="/home" className="bg-gray-200 flex flex-row gap-14 pl-2 items-start  text-roxo-900 border border-purple-900 text-md font-bold px-12 py-2 rounded-lg">
                <GoogleChromeLogo size={28} />
                  Entrar com google
                <span></span>
              </Link >
              </div>
  
              <button className="bg-gray-200 flex flex-row gap-14 pl-2 items-start  text-roxo-900 border border-purple-900 text-md font-bold px-12 py-2 rounded-lg">
                <GithubLogo size={28} />
                Entrar com Github
              </button >
            </div>
        </div> 
      </div>
    </div>
  )
}
