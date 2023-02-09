import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {GiFist} from 'react-icons/gi'
import './styles/start.scss';

export const Start = () => {

    const state = useSelector(state => state);

    // ********** INITIALISATION **********

    // ********** STATES **********

    // Compteur points de stats
    let counter = 30;

    // Stats d'attaque
    const [physicalAtk, setPhysicalAtk] = useState(state.hero.hero.attack.strength);
    const [magicalAtk, setMagicalAtk] = useState(state.hero.hero.attack.magic);
    const [speed, setSpeed] = useState(state.hero.hero.attack.speed);

    // Stats de défense
    const [physicalDef, setPhysicalDef] = useState(state.hero.hero.shield.physical);
    const [magicalDef, setMagicalDef] = useState(state.hero.hero.shield.magical);
    const [dodge, setDodge] = useState(state.hero.hero.shield.dodge);

    // ********** VARIABLES **********

    const breed = state.hero.hero.breed;
    const name = state.hero.hero.name;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // ********** FONCTIONS **********

    const handleChange = (event) => {
        setPhysicalAtk(Number(event.target.value)); 
    }

    const increment = (event) => {
        event.preventDefault();
        
        if(counter >= 0){
            counter++
        }

        console.log(counter)
    }

    const decrement = (event) => {
        event.preventDefault();
        
        if(counter >= 0 && counter < 30){
            counter--
        }

        console.log(counter)
    }

   const linkToHome = () => {
    navigate("/");
   }

    return(

        <>
            <p>Bienvenue {name} ! Dans cette aventure, tu vas incarner un fier {breed}. </p>
            <h2>Tes stats :</h2>
            <p>Tu peux les modifier comme bon te semble !</p>
            <form>

                <h3>Stats d'attaque</h3>
                <div className='stats-atk'>
                
                    <div>
                        <label htmlFor="physicalAtk">Force <GiFist/> :</label>
                        <input onChange={handleChange} type="range" id="stats" name="physicalAtk" min="0" max="100" step="1" defaultValue={physicalAtk} />
                        <button onClick={increment}>+</button><p> {physicalAtk}</p> <button onClick={decrement}>-</button>
                    </div>
                    <div>
                        <label htmlFor="magicalAtk">Magie :</label>
                        <input onChange={(e) => setMagicalAtk(Number(e.target.value))} type="range" id="stats" name="magicalAtk" 
                                min="0" max="100" step="1" defaultValue={magicalAtk} /><p> {magicalAtk}</p>
                    </div>
                    <div>
                        <label htmlFor="speed">Vitesse :</label>
                        <input onChange={(e) => setSpeed(Number(e.target.value))} type="range" id="stats" name="speed" 
                                min="0" max="100" step="1" defaultValue={speed} /><p> {speed}</p>
                    </div>
                </div>

                <h3>Stats de défense</h3>
                <div className='stats-def'>
                
                    <div>
                        <label htmlFor="physicalDef">Défense physique :</label>
                        <input onChange={(e) => setPhysicalDef(Number(e.target.value))} type="range" id="stats" name="physicalDef" 
                                min="0" max="100" step="1" defaultValue={physicalDef} /><p> {physicalDef}</p>
                    </div>
                    <div>
                        <label htmlFor="magicalDef">Défense magique :</label>
                        <input onChange={(e) => setMagicalDef(Number(e.target.value))} type="range" id="stats" name="magicalDef" 
                                min="0" max="100" step="1" defaultValue={magicalDef} /><p> {magicalDef}</p>
                    </div>
                    <div>
                        <label htmlFor="dodge">Esquive :</label>
                        <input onChange={(e) => setDodge(Number(e.target.value))} type="range" id="stats" name="dodge" 
                                min="0" max="100" step="1" defaultValue={dodge} /><p> {dodge}</p>
                    </div>
                </div>

            <br />
            <div className='buttons'>
                <button className='btn' onClick={linkToHome}>Retour</button>
                <p>Points disponibles: {counter}</p>
                <button className='btn' onClick={linkToHome}>BASTOOON !!!</button>
            </div>
            </form>
        </>

    )
}