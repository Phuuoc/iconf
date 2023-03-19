import { Route } from "react-router-dom";
import HomeScreen from "../page/Home/HomeScreen";
import path from "../resource/path";
import RegisterScreen from "../page/Register/RegisterScreen";

const UserRoutes = () => {
    return (
        <>
        
        <Route path={path.HOME} render={() => <HomeScreen/>} />
        <Route path={path.Register} render={(I) => <RegisterScreen/>} />

        </>
    );
};

export default UserRoutes;
