import './Button.css'

export default function Button({ title, onClick, isOperator }) {
    return (
        <div className='button-container'>
            <button className={`number-pad-btn ${isOperator ? 'orange' : 'gray'}`} onClick={onClick}>{title}</button>
        </div>
    )
};