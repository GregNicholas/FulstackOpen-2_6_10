interface PersonsProps {
  persons: {
    name: string;
    number: string;
    id: number;
  }[];
}

const Persons = ({ persons }: PersonsProps) => {
  return (
    <>
      {persons.map((person) => {
        return (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        );
      })}
    </>
  );
};

export default Persons;
