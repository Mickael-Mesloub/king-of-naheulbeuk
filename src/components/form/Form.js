import { useEffect, useState } from "react"
import {personnages} from '../data/Characters'


// Pour forcer un nombre minimum de caractères 
const minLength = 2;
// Pour forcer une expression rationnelle (interdit les caractères sépciaux sauf espaces (au milieu du pseudo), les tirets et underscores 
const regex = /^[\p{L}\p{Nd}_-]+[\p{L}\p{Nd}\s_-]+[\p{L}\p{Nd}_-]+$/;

console.log(regex); 


export const Form = (props) => {

    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");
    

    useEffect(() => {
        console.log(error)
    },[error])


    const handleChange = (e, value=e.target.value) => {

        setInputValue(value);
        props.hero.name = value;

        if(inputValue.length < minLength) {
            setError(`*Veuillez choisir un pseudo d'au moins ${minLength} caractères!`);
        } else {
            setError("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let regex = new RegExp(/^[\p{L}\p{Nd}_-]+[\p{L}\p{Nd}\s_-]+[\p{L}\p{Nd}_-]+$/)
        // Cache le form onSubmit
        props.setIsFormShown(false);
        props.setPseudo(props.hero.name);

        // Quand je submit, vérifie si les regex sont respectées. Si non, message d'erreur, caractères spéciaux non autorisés !
        if (!regex.test(inputValue)) {
            setError('*Les caractères spéciaux ne sont pas autorisés');
        } else {
            setError("");
        }

        // Quand je submit, hero.breed prend la valeur de l'option choisie
        console.log(props.hero); 
     }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="hero">Choisissez un personnage </label>
                <select id="hero" defaultValue={props.hero.breed}>
                    {personnages.map((e, i) => { 
                        return <option  key={i} value={e.id}>{e.breed}</option>
                    })}
                </select>
                <br />
                <label htmlFor="pseudo">Choisissez un pseudo </label>
                <input value={inputValue} onChange={handleChange} type="text" id="pseudo" placeholder="Pseudo" />
                {error && <div style={{color: "red"}}>{error}</div>}
                <input type="submit" value="Let's go !" />
            </form>
        </>

    )
}