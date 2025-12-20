export default function Button({ title, onClick }) {


    return (
        <div>
            <button onClick={onClick}>{title}</button>
        </div>
    )
};