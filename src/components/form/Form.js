import {personnages} from '../data/Characters'
import {useState} from 'react'

export const Form = (props) => {

    const [formDisplay, setFormDisplay] = useState("block");

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormDisplay("none")
    }

    return(

        <form style={{display: formDisplay}} onSubmit={handleSubmit}>
            <label>Choisissez un personnage </label>
            <select defaultValue={props.hero.id}>
                {personnages.map((e, i) => { 
                    return <option  key={i} value={e.id}>{e.race}</option>
                })}
            </select>
            <br />
            <label>Choisissez un pseudo </label>
            <input type="text" placeholder="Pseudo" />
            <input type="submit" value="Let's go !" />
        </form>

    )

}


/* 



*/