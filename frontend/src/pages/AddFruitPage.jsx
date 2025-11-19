import AppFruitForm from "../components/AppFruitForm";
import api from "../api.js"
import { Link } from "react-router-dom";

export default function AddFruitPage() {

  const addFruit = async (fruitName) => {

    try {
      await api.post('/fruits', { name: fruitName});
      alert("Fruit Added!");
    } catch (error) {
      console.error("Error added fruit", error);
    }
  };

  return (
    <div>
      <h2>Add a Fruit</h2>
      <AppFruitForm  addFruit={addFruit}/>
      
      <Link to="/">Home</Link><br/>
      <Link to="/fruits">View Fruits</Link>
    </div>
  );
}