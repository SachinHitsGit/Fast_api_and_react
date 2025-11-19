import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Fruit App</h1>
      <Link to="/add_fruit">Add Fruit</Link><br/>
      <Link to="/fruits">View Fruits</Link>
    </div>
  );
}
