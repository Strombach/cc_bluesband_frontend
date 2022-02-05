import { Event } from 'application/components';
import PropsInterface from './PropsInterface';

function EventsContainer(props: PropsInterface) {

    console.log(props.events.length);

    return (
        <>
            {(props.events.length >= 1) &&
                <div className={`event-container${(props.events.length <= 1) ? "-short" : "-long"}`}>
                    <>
                        <h2 className={"event-header"}>
                            Kommande event
                        </h2>
                        <div className={`event-content`}>
                            {props.events.map((event, index) => {
                                return <Event key={index} event={event} />;
                            })}
                        </div>
                    </>
                </div>
            }
        </>
    );
}

export default EventsContainer;
