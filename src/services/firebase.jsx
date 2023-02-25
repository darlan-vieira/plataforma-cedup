import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDArWHGkd2LdxJ0NB2NRrOowkwhWjrgXeM",
  authDomain: "plataforma-cedup.firebaseapp.com",
  projectId: "plataforma-cedup",
  storageBucket: "plataforma-cedup.appspot.com",
  messagingSenderId: "1014422349063",
  appId: "1:1014422349063:web:7d2d6dbbf52ccebe7851a2",
  measurementId: "G-0G2VNV9SYE"
};

export const app = initializeApp(firebaseConfig);