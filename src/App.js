import {Form} from "./pages/Form.js"
import './styles/App.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Start} from "./pages/Start.js" 

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

export default App;