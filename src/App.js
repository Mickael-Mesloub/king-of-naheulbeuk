import { useState } from "react"
import {Form} from "./components/form/Form"
import { personnages } from "./components/data/Characters"
import './App.css'
import './styles.scss'

// Composant Title : pour titre dynamique en fonction des phases
// Mettre en place un Context

const App = () => {

    const [hero, setHero] = useState(personnages[0]);
    const [pseudo, setPseudo] = useState("");
    const [isFormShown, setIsFormShown] = useState(true);

    return(
        
        <> 
            <h1>King of Naheulbeuk</h1>

             {/* Affiche le Form. Si form démonté (onSubmit), affiche message de bienvenue */}
            
                <Form hero={hero} setHero={setHero}setPseudo={setPseudo} setIsFormShown={setIsFormShown}/>

        </>
    )
};

export default App

/* Push sur GitHub:

git add .
git commit -m "message qu'on veut"
git push

*/

/* 

On choisit un personnage, un pseudo et quand on submit, afficher les informations sur une autre page avec un dispatch et un useSelector

*/