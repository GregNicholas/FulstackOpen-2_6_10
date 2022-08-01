interface FilterProps {
  searchTerm: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filter = ({ searchTerm, handleSearch }: FilterProps) => {
  return (
    <>
      filter shown with:{" "}
      <input
        placeholder="search term..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </>
  );
};

export default Filter;
