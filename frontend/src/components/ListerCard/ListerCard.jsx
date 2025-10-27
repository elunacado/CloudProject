import './ListerCard.css';

export default function Card({room_information, date, time}) {
    return (
        <div className="card">
            <p className="room-information">{room_information}</p>
            <p className="date">{date}</p>
            <p className="time">{time}</p>
            <span>
                <button className="accept-reservation">Accept Reservation</button>
                <button className="decline-reservation">Decline Reservation</button>    
            </span>
        </div>
    );
}
