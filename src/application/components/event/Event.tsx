import PropsInterface from './PropsInterface';

function Event(props: PropsInterface) {

    const colors = [
        "pink",
        "yellow",
        "red",
        "cyan"
    ];

    const pickColor = () => {
        const color = colors[Math.floor(Math.random() * colors.length)];

        return color;
    };

    return (
        <div className={"event"}>
            <img className='event-picture' src={`/img/stock/${pickColor()}.png`} alt="" />
            <h1>
                {`${props.event.title}`}
            </h1>
            <div className="event-text">
                <p className='location'>
                    {`Plats: ${props.event.location}`}
                </p>
                <p>Bokning krävs: {props.event.reservation ? "Ja" : "Nej"}</p>
                <p>{`Datum: ${props.event.date}`}</p>
                <p>{`Tid: ${props.event.time}`}</p>
            </div>
            {props.event.link && (
                <div className="event-link">
                    <a href={props.event.link}>Länk</a>
                </div>
            )}
        </div>
    );
};

export default Event;
