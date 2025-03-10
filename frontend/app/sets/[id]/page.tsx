import { useEffect, useState } from "react";
import { getCardsBySet } from "../../services/api";
import Link from "next/link";

export default function SetCards({ params }: { params: { id: string } }) {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCardsBySet(params.id)
      .then((res) => {
        setCards(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cartas del Set</h1>
      <ul className="space-y-2">
        {cards.map((card: any) => (
          <li key={card.id} className="p-2 bg-gray-100 rounded">
            {card.name}
          </li>
        ))}
      </ul>
      <Link href="/" className="mt-4 inline-block text-blue-500">
        Volver a los sets
      </Link>
    </div>
  );
} 