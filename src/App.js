import {Form} from "./pages/Form.js"
import './App.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Start} from "./pages/Start.js" 

// Composant Title : pour titre dynamique en fonction des phases
// 

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