import './Button.css'

export default function Button({ title, onClick }) {
    return (
        <div>
            <button className="number-pad-btn" onClick={onClick}>{title}</button>
        </div>
    )
};