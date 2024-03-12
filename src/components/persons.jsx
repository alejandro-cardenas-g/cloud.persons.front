import { useEffect, useState } from "react";

export const PersonsPage = () => {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    fetch(import.meta.env.VITE_API_HOST)
      .then((r) => r.json())
      .then((data) => setPersons(data))
      .catch(() => setPersons([]));
  }, [setPersons]);
  return (
    <div>
      <h2>Personas</h2>
      {persons.map((person) => (
        <div key={person.id}>
          <p>{person.name}</p>
          <p>{person.age}</p>
        </div>
      ))}
    </div>
  );
};
