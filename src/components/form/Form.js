import { useEffect, useState } from "react"
import {personnages} from '../data/Characters'
import './styles.scss'


export const Form = (props) => {

    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        console.log(inputValue);
    },[inputValue])

    const handleChange = (e) => {
        setInputValue(e.target.value);     
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.hero.name = inputValue;
        console.log(props.hero)
        
     }

    return(
        <>
            <form className="form"onSubmit={handleSubmit}>
                <label htmlFor="hero">Choisissez un personnage </label>
                <select id="hero" defaultValue={props.hero.breed}>
                    {personnages.map((e, i) => { 
                        return <option  key={i} value={e.id}>{e.breed}</option>
                    })}
                </select>
                <br />
                <label htmlFor="pseudo">Choisissez un pseudo </label>
                <input value={inputValue} onChange={handleChange} type="text" id="pseudo" placeholder="Pseudo" />
                <input type="submit" value="Let's go !" />
            </form>
        </>

    )
}