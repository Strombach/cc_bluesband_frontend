import {
    TopText,
    TopPhoto,
    EventsContainer,
    About
} from "application/components";
import PropsInterface from './PropsInterface';

function Main(props: PropsInterface) {
    return (
        <div className="main-container">
            <div className="top-content">
                <div className="content">
                    <TopText />
                    <TopPhoto />
                </div>
            </div>
            <div className="second-content">
                <EventsContainer events={props.content.events} />
                <About />
            </div>
        </div>
    );
}

export default Main;
