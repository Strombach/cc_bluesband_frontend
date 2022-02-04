import {
    TopText,
    TopPhoto,
    EventsContainer
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
            <EventsContainer events={props.content.events} />
        </div>
    );
}

export default Main;
