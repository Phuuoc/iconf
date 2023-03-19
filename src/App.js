import { BrowserRouter, Switch, Route } from 'react-router-dom';
import path from './resource/path';
import HomeScreen from "./page/Home/HomeScreen";
import './App.css';
import HomeScreens from './page/Home/HomeScreen';
import { Register } from './resource/path';
import RegisterScreens from './page/Register/RegisterScreen';
import LoginScreens from './page/Login/screen/LoginScreen';

export default function App() {
    
    return (
        <BrowserRouter>
        <Switch>

        <Route path={path.HOME} render={() => <HomeScreens/>} />
        <Route path={path.Register} render={() => <RegisterScreens/>} />
        <Route path={path.Login} render={() => <LoginScreens/>} />

        </Switch>
        </BrowserRouter>
    )
}



