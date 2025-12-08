import "../Navbar/Navbar.css";

export default function Navbar() {
    return (
        <navbar id="navbar">
            <h1 id="title">Lucky Hoofs Racing</h1>
            <button id="start-btn" className="button">Start</button>
            <button id="rules-btn" className="button">Rules</button>
        </navbar>
    )
}