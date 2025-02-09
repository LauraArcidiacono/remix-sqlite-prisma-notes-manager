interface SearchbarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export default function Searchbar({
  searchTerm,
  setSearchTerm,
}: SearchbarProps) {
  return (
    <div className="mb-6">
      <input
        type="text"
        className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search emails..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
