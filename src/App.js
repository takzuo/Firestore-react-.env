import React, {useEffect} from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "./firebase/firebaseConfig";

const App = () => {
     useEffect(() => {
    
    const obtenerdatos = async () => {
       const datos = await getDocs(collection(db, 'posts')); // la coleccion posts
       // console.log(datos.docs[0].data());

       datos.forEach((documento) => {
          console.log(documento.data());
       })
    }

    obtenerdatos();
 
  }, []);

  return( 
    <h1>Hello World</h1>
  );

}

export default App;