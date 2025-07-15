import { useEffect, useRef, useState } from "react";

interface userData {
  username: string;
}
const FetchData = () => {
  const [photos, setPhotos] = useState<userData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState("");
  const searchItem = useRef<HTMLInputElement>(null);

  //using async await
  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setPhotos(data);
        setLoading(false);
      } catch (e) {
        console.log(`Error code : ${e.message}`);
        setLoading(false);
      }
    };
    fetchDataAsync();
  }, []);

  const filteredPhotos = photos.filter((item) =>
    item.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div>
        <h1 className="text-2xl">Fetched items</h1>
        {loading ? (
          <p>Loading....</p>
        ) : (
          filteredPhotos.map((item) => (
            <h1 className="border p-1 mt-1">{item.username}</h1>
          ))
        )}

        <div className="mt-5 flex gap-3">
          <h1>Search here:</h1>
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            ref={searchItem}
            type="text"
            className="border outline-none"
          />
          <p>{searchQuery}</p>
        </div>
      </div>{" "}
    </>
  );
};
export default FetchData;
