import { useState } from "react"
import {Form} from "./components/form/Form"
import { personnages } from "./components/data/Characters"

const App = () => {

    const [hero, setHero] = useState(personnages[0])

    return(

        <>
            <h1>King of Naheulbeuk</h1>
            <Form hero={hero} setHero={setHero}/>
        </>

    )

}

export default App