import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAllBlog } from "../../api/BlogApi.js";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchAllBlog = async () => {
      let response = await getAllBlog();
      console.log(response);
      setData(response);
    };
    fetchAllBlog();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item._id}>
          {item.date}
          {item.heading}
          {item.description}
        </div>
      ))}
    </div>
  );
}

export default Home;
