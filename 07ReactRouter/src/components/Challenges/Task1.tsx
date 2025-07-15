import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

interface user {
  name: string;
  email: string;
  company: {
    name: string;
  };
}
const Task1 = () => {
  //   const { id } = useParams();
  //   const [userData, setUserData] = useState<user | null>(null);

  //   useEffect(() => {
  //     const fetchUser = async () => {
  //       try {
  //         const res = await fetch(
  //           `https://jsonplaceholder.typicode.com/users/${id}`
  //         );
  //         const data = await res.json();
  //         setUserData(data);
  //       } catch (error) {
  //         console.error("Error while fetching data: ", error);
  //       }
  //     };
  //     if (id) fetchUser();
  //   }, [id]);

  const userData = useLoaderData() as user | null;
  return (
    <div>
      <h2>Fetch User Data from ID using useParams</h2>
      {userData ? (
        <div>
          <h1>Name: {userData.name}</h1>
          <h1>Email: {userData.email}</h1>
          <h1>Company Name: {userData.company.name}</h1>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Task1;

export const usersData = async ({ params }: any) => {
  const { id } = params;
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    if (!response.ok) throw new Response("User not found", { status: 404 });
    return response.json();
  } catch (e) {
    console.log(`Error fetching data ${e}`);
  }
};

export const UserNotFound = () => {
  return (
    <div>
      User not found
      <Link to={<Task1 />}>
        <button>Go back</button>
      </Link>
    </div>
  );
};
