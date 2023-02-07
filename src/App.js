import {Form} from "./components/form/Form"
import './App.css'
import './styles.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Start} from "./pages/Start.js" 

// Composant Title : pour titre dynamique en fonction des phases
// Mettre en place un Context

const App = () => {

    return(
        
        <> 

            <h1>King of Naheulbeuk</h1>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Form />}/>
                    <Route path='/start' element={<Start />}/>
                </Routes>
            </BrowserRouter>

        </>
    )
};

export default App

/* Push sur GitHub:

git add .
git commit -m "message qu'on veut"
git push

*/

/* 

On choisit un personnage, un pseudo et quand on submit, afficher les informations sur une autre page avec un dispatch et un useSelector

*/