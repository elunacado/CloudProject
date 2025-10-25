import './Card.css';

export default function Card({room_information, date, time}) {
    return (
        <div className="card">
            <p className="room-information">{room_information}</p>
            <p className="date">{date}</p>
            <p className="time">{time}</p>
        </div>
    );
}
