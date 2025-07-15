import { useEffect, useState } from "react";

const data = ["apple", "mango", "strawberry", "banana", "orange"];

const SearchFruits = () => {
  const [filteredFruits, setFilteredFruits] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  //debouncing search
  useEffect(() => {
    if (search === "") {
      setFilteredFruits([]);
      return;
    }

    const timer = setTimeout(() => {
      const found = data.filter((fruit) =>
        fruit.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredFruits(found);
    }, 50);

    return () => clearTimeout(timer);
  }, [search]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col space-y-8">
        <h1>Fruit Search</h1>
        <input
          className="border outline-none p-2"
          type="text"
          placeholder="Search fruit here..."
          onChange={handleSearch}
        />
        {filteredFruits.length > 0 ? (
          <ul>
            {filteredFruits.map((fruit) => (
              <li key={fruit}>{fruit}</li>
            ))}
          </ul>
        ) : (
          <p>No Match Found</p>
        )}
      </div>
    </>
  );
};

export default SearchFruits;
