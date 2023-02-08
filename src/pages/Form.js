import { useEffect, useState } from "react";
import {personnages} from '../components/data/Characters';
import { addHero } from "../store/slices/user/heroSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import './styles/form.scss';

export const Form = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() =>{
        console.log(state.hero);
    },[state.hero]) 

    // ********** STATES **********

    const [pseudo, setPseudo] = useState("");
    const [hero, setHero] = useState(state.hero);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addHero({...hero, name: pseudo})); // ...hero = action.payload: la data qu'on envoie 
        navigate("/start");           
     };

    console.log(pseudo)
    return(
        
        <>
            <form className="form"onSubmit={handleSubmit}>
                <label htmlFor="hero">Choisissez un personnage </label>
                <select defaultValue={hero.id} onChange={(event) => setHero(personnages[event.target.value])} id="hero" name="hero">
                    {personnages.map((e, i) => { 
                        return <option  key={i} value={e.id}>{e.breed}</option>
                    })}
                </select>
                <br />
                <label htmlFor="pseudo">Choisissez un pseudo </label>
                <input onChange={(event) => setPseudo(event.target.value)} type="text" id="pseudo" placeholder="Pseudo" />
                <input className="submit" type="submit" value="BASTOOON !!" />
            </form>
            
        </>

    )
}

// const [stats, setStats] = useState(
    //     {
    //         physicalAtk: state.hero.hero.attack.strength,
    //         magicalAtk: state.hero.hero.attack.magic,
    //         speed: state.hero.hero.attack.speed,
    //         physicalDef: state.hero.hero.shield.physical,
    //         magicalDef: state.hero.hero.shield.magical,
    //         dodge:state.hero.hero.shield.dodge
    //     }
    // )