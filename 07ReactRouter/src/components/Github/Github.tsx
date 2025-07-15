import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/darkkphoenyx")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p4 text-3xl">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="image" />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = fetch("https://api.github.com/users/darkkphoenyx");
  return (await response).json();
};
