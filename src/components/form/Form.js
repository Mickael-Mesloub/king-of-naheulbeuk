import { useEffect, useState } from "react";
import {personnages} from '../data/Characters';
import { addHero } from "../../store/slices/user/heroSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import './styles.scss';


export const Form = (props) => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [pseudo, setPseudo] = useState("");
    const [hero, setHero] = useState(state.hero.hero);
    

    useEffect(() => {
        console.log(state);
    },[state])

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addHero({...hero, name: pseudo}));
        navigate("/start");           
     };

    return(
        
        <>
            <form className="form"onSubmit={handleSubmit}>
                <label htmlFor="hero">Choisissez un personnage </label>
                <select defaultValue={hero.id} onChange={(event) => setHero(personnages[event.target.value])} id="" name="">
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