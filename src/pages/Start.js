import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// import {GiFist} from 'react-icons/gi'
import './styles/start.scss';

export const Start = () => {

    const state = useSelector(state => state);

    // ********** INITIALISATION **********

    // ********** STATES **********

    // Compteur points de stats bonus
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

    // Fonction attribution points de stats bonus:
        // Valeur du compteur change lorsque valeur stat change -> récupérer nom + valeur de chaque stat. 
        // Valeur stat doit pouvoir varier selon la valeur du compteur: si compteur === 0, les stats ne peuvent plus diminuer. Si compteur === 30, les stats ne peuvent plus augmenter. 
            // Prévoir un bouton "Réinitialiser" pour remettre stats de base + compteur à 30 ?
        // Compteur de base: 30. Doit pouvoir diminuer seulement si compteur > 0. Si === 0, ne peut plus diminuer. Doit pouvoir augmenter seulement si compteur < 30. Si === 30, ne peut plus augmenter.  

   const linkToHome = () => {
    navigate("/");
   }

    return(

        <>
            <p>Bienvenue {name} ! Dans cette aventure, tu vas incarner un fier {breed}. </p>
            <h2>Tes stats :</h2>
            
            <form>
                
                
                <div className='stats-atk'>
                    <h3>Stats d'attaque</h3>
                    <div>
                        <label htmlFor="physicalAtk">Force : {physicalAtk}</label>
                        <input onChange={handleChange} type="range" id="stats" name="physicalAtk" min="0" max="100" step="5" defaultValue={physicalAtk} />
                        
                    </div>
                    <div>
                        <label htmlFor="magicalAtk">Magie : {magicalAtk}</label>
                        <input onChange={(e) => setMagicalAtk(Number(e.target.value))} type="range" id="stats" name="magicalAtk" 
                                min="0" max="100" step="5" defaultValue={magicalAtk} />
                    </div>
                    <div>
                        <label htmlFor="speed">Vitesse : {speed}</label>
                        <input onChange={(e) => setSpeed(Number(e.target.value))} type="range" id="stats" name="speed" 
                                min="0" max="100" step="5" defaultValue={speed} />
                    </div>
                </div>
                <p>Points disponibles: {counter}</p>
                
                <div className='stats-def'>
                    <h3>Stats de défense</h3>
                    <div>
                        <label htmlFor="physicalDef">Défense physique : {physicalDef}</label>
                        <input onChange={(e) => setPhysicalDef(Number(e.target.value))} type="range" id="stats" name="physicalDef" 
                                min="0" max="100" step="5" defaultValue={physicalDef} /> 
                    </div>
                    <div>
                        <label htmlFor="magicalDef">Défense magique : {magicalDef}</label>
                        <input onChange={(e) => setMagicalDef(Number(e.target.value))} type="range" id="stats" name="magicalDef" 
                                min="0" max="100" step="5" defaultValue={magicalDef} /> 
                    </div>
                    <div>
                        <label htmlFor="dodge">Esquive : {dodge}</label>
                        <input onChange={(e) => setDodge(Number(e.target.value))} type="range" id="stats" name="dodge" 
                                min="0" max="100" step="5" defaultValue={dodge} />
                    </div>
                </div>
                
            </form>

            <div className='buttons'>
                <button className='backbtn btn' onClick={linkToHome}>Retour</button>
                <button className='btn' onClick={linkToHome}>BASTOOON !!!</button>
            </div>
            
        </>

    )
}