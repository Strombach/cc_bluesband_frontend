import {
    TopText,
    TopPhoto,
    EventsContainer
} from "application/components";

function Main() {
    return (
        <div className="main-container">
            <div className="top-content">
                <div className="content">
                    <TopText />
                    <TopPhoto />
                </div>
            </div>
            <EventsContainer />
        </div>
    );
}

export default Main;
