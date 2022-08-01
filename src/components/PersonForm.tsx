interface FormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  newName: string;
  newNum: string;
}

const PersonForm = ({
  handleSubmit,
  handleChange,
  newName,
  newNum
}: FormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:
        <input
          placeholder="enter name"
          name="name"
          onChange={handleChange}
          value={newName}
          required
        />
      </div>
      <div>
        number:
        <input
          placeholder="enter number"
          name="number"
          onChange={handleChange}
          value={newNum}
        />
      </div>
      <div>
        <button type="submit" disabled={!newName}>
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
