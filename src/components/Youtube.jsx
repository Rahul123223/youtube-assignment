import React, { useEffect, useState } from "react";
import axios from "axios";

export const Youtube = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://www.googleapis.com/youtube/v3/videos/?part=snippet&chart=mostPopular&regionCode=IN&maxResults=32&key=AIzaSyCA2ZgfmTkC6c0RGE4nlheSBhhmwXQm2-4")
      .then(({ data }) => {
        setData(data);
        console.log(data.items);
      });
  };

  return (
  
    <div>
      {/* {data.map((e)=>{
        <div>{e}</div>
      })} */}
    </div>
  )
};
