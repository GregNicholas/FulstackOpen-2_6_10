import React, { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 }
  ]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleChange = (e: any) => {
    console.log(e.target.name);
    const el = e.target.name;
    const updated = { ...newPerson, [el]: e.target.value };
    setNewPerson(updated);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newPerson.name !== "") {
      if (persons.findIndex((p) => p.name === newPerson.name) >= 0) {
        alert(`${newName} is already added to phonebook`);
      } else {
        setPersons((prev) => [
          ...prev,
          { name: newPerson.name, number: newPerson.number, id: prev.length }
        ]);
        setNewPerson({ name: "", number: "" });
      }
    }
  };

  const personsToShow = !searchTerm
    ? persons
    : persons.filter((person) => {
        let name = person.name.toLowerCase();
        return name.includes(searchTerm.toLowerCase());
      });

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchTerm={searchTerm} handleSearch={handleSearch} />
      <h2>Add a new</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        newName={newPerson.name}
        newNum={newPerson.number}
      />
      <p>
        debug: {newPerson.name} {newPerson.number}
      </p>
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  );
};

export default App;
