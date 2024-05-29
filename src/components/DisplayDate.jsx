import { FaCalendarAlt } from 'react-icons/fa';

const DisplayDate = ({ date }) => {
    return (
        <div className="date-container">
            <span> <FaCalendarAlt className="date-icon" /></span>
            <span>{date}</span>
        </div>
    );
};

export default DisplayDate;
