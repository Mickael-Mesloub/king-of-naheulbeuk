import { useState } from "react"
import {Form} from "./components/form/Form"
import { personnages } from "./components/data/Characters"

const App = () => {

    const [hero, setHero] = useState(personnages[0]);
    const [pseudo, setPseudo] = useState("");
    const [isFormShown, setIsFormShown] = useState(true);

    return(

        <>
            <h1>King of Naheulbeuk</h1>
            {isFormShown ? (
                <Form hero={hero} setHero={setHero}setPseudo={setPseudo} setIsFormShown={setIsFormShown}/>
            ) : 
                <>
                    <button onClick={() => setIsFormShown(true)}>Retour</button>
                    <p>Bienvenue {pseudo} ! Prêt à combattre ? ⚔ </p>
                </>
            }
     
        </>
    )
};

export default App