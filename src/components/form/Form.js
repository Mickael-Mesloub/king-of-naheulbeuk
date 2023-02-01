import {personnages} from '../data/Characters'

export const Form = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setIsFormShown(false);
        props.setPseudo(props.hero.name)
    }
    return(

        <form onSubmit={handleSubmit}>
            <label htmlFor="hero">Choisissez un personnage </label>
            <select id="hero" defaultValue={props.hero.id}>
                {personnages.map((e, i) => { 
                    return <option  key={i} value={e.id}>{e.breed}</option>
                })}
            </select>
            <br />
            <label htmlFor="pseudo">Choisissez un pseudo </label>
            <input onChange={(e) => props.hero.name = e.target.value} type="text" id="pseudo" placeholder="Pseudo" />
            <input type="submit" value="Let's go !" />
        </form>
        
    )
}