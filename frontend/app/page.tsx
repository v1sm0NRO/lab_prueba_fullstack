import { useEffect, useState } from "react";
import { getSets } from "./services/api";

export default function Home() {
  const [sets, setSets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSets()
      .then((res) => {
        setSets(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sets Disponibles</h1>
      <ul className="space-y-2">
        {sets.map((set: any) => (
          <li key={set.id} className="p-2 bg-gray-100 rounded">
            {set.name}
          </li>
        ))}
      </ul>
    </div>
  );
}