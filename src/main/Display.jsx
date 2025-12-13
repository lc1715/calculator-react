import './Display.css'

export default function Display({ display }) {

    return (
        <div className='container'>
            <span className='display'>
                {display}
            </span>
        </div>
    )
};