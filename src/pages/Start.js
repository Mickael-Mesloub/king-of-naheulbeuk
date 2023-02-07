import { useSelector } from "react-redux";
import './styles/styles.scss'

export const Start = () => {

    const state = useSelector(state => state);
    console.log(state);
    const breed = state.hero.hero.breed;
    const name = state.hero.hero.name;

    return(

        <>
            <p>Pseudo: {name}</p>
            <p>Personnage: {breed}</p>
            <button>BASTOOON !!!</button>
        </>

    )
}