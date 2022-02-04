import { Event } from 'application/components';

function EventsContainer() {

    const events = [
        {
            title: "Smoke",
            date: "2020-02-01",
            time: "12:00",
            location: "Smoke",
            reservation: false,
            link: "https://google.se"
        },
        {
            title: "Harry's",
            location: "Någon annanstans",
            reservation: true,
            link: "https://youtube.se"
        },
        {
            title: "Harry's",
            location: "Någon annanstans",
            reservation: true,
            link: "https://youtube.se"
        }
    ];

    return (
        <div className="events-container">
            <h2 className='event-header'>Kommande event</h2>
            <div className="event-content">
                {events.map((event, index) => {
                    return <Event key={index} event={event} />;
                })}
            </div>
        </div>
    );
}

export default EventsContainer;
