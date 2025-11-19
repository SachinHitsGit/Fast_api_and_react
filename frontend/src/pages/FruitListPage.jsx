import Fruits from "../components/Fruits"
import { Link } from "react-router-dom";

export default function FruitListPage() {
    return(
        <div>
            <h2>All Fruits</h2>
            <Fruits/>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/add_fruit">Add Fruits</Link>
        </div>
    );
}