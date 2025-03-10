import { useEffect, useState } from "react";
import { getSets } from "./services/api";

export default function Home() {
  const [sets, setSets] = useState([]);

  useEffect(() => {
    getSets().then((res) => setSets(res.data));
  }, []);

  return (
    <div>
      <h1>Sets Disponibles</h1>
      <ul>
        {sets.map((set: any) => (
          <li key={set.id}>{set.name}</li>
        ))}
      </ul>
    </div>
  );
}
