import './Display.css'

export default function Display({ displayNumber }) {

    return (
        <div className='container'>
            <span className='display-number'>
                {displayNumber}
            </span>
        </div>
    )
};