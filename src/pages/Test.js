import { useEffect, useState } from "react";
// import { personnages } from '../components/data/Characters'; 
import { addHero } from "../store/slices/user/heroSlice";
import { addAllHeroes } from "../store/slices/game/gameSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import './styles/form.scss';

export const Form = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // ********** USESTATES **********
    
    const [pseudo, setPseudo] = useState("");
    const [selectedHero, setSelectedHero] = useState(null);
    
    // ********** USEEFFECTS **********
    
    useEffect(() => {
        // récupère la data du back-end avec un fetch
        fetch('http://mickaelmesloub.ide.3wa.io:9658/heros')
            .then(response => response.json())
            .then(data => {
                dispatch(addAllHeroes(data));
                setSelectedHero(getRandomHero(data));
            });
    }, [])

    const getRandomHero = (heroes) => {
        const randomHero = heroes[Math.floor(Math.random() * heroes.length)];
        console.log(randomHero);
        return randomHero;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addHero({...selectedHero, name: pseudo}));
        navigate("/start");
    };

    if (!selectedHero) {
        return <div>Loading...</div>;
    }

    return(
        <>
            <form className="form"onSubmit={handleSubmit}>
                <label htmlFor="hero">Choisissez un personnage </label>
                <select value={selectedHero.id} onChange={(event) => setSelectedHero(state.game.heroes.find((hero) => hero.id === Number(event.target.value)))} id="hero" name="hero">
                    {state.game.heroes.map((e, i) => {
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