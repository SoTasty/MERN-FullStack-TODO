import { Link } from "react-router-dom";
import './WelcomeComponent.css'
import clock from '../img/clock.png'
import forget from '../img/forgetting.png'

function WelcomeComponent() {
    
	return (
		<div className="App">
            <div className="welcome-wrapper">
                <div className="welcome-1">
                    <div className="welcome-1__1">
                        <h1>Can't be on time?</h1>
                        <h4>Remember about tasks when deadline comes to an end.</h4>
                        <img src={clock}></img>
                    </div>
                    <div className="welcome-1__2">
                        <h1>Forgetting something?</h1>
                        <h4>And feel of useless, at the end of day.</h4>
                        <img src={forget}></img>
                    </div>
                    
                </div>
                <div className="welcome-2">
                    <h1>
                        Then you gotta try this amazing thing!
                    </h1>
                    <div className="welcome-2__profits">
                        <h4>Profit 1</h4>
                        <h4>Profit 2</h4>
                        <h4>Profit 3</h4>
                        <h4>Profit 4</h4>
                    </div>
                </div>
                <div className="welcome-3">
                    <h1>There you go!</h1>
                    <Link to={"todo"}>
                        <div className="todo-app__button">Todo app</div>
                    </Link>
                </div>
            </div>
		</div>
	)
}

export default WelcomeComponent;
