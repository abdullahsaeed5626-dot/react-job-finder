type SearchBarProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
};

function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search for jobs..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />

      <button>Search</button>
    </div>
  );
}

export default SearchBar;
