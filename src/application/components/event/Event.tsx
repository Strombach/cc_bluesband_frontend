import PropsInterface from './PropsInterface';

function Event(props: PropsInterface) {
    return (
        <div className={"event"}>
            <img src="/img/gul.jpg" alt="" />
            <h1>
                {`${props.event.title}`}
            </h1>
            <div className="test">
                <p className='location'>
                    {`Plats: ${props.event.location}`}
                </p>
                <p>{`Datum: ${props.event.date}`}</p>
                <p>{`Tid: ${props.event.time}`}</p>
                <p>Bokning krävs: {props.event.reservation ? "Ja" : "Nej"}</p>
                <a href={props.event.link}>Länk</a>
            </div>
        </div>
    );
};

export default Event;
