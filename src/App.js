import React, { useEffect, useState } from "react";
import CardList from "./CardList";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://www.reddit.com/r/wallpapers.json?&limit=21&raw_json=1"
      );
      const response = await res.json();
      let newArr = [];
      response.data.children.map((item) => {
        try {
          const image = item.data.preview.images[0].resolutions[3].url;
          newArr.push({
            title: item.data.title,
            id: item.data.id,
            thumbnail: item.data.thumbnail,
            url: item.data.url,
            author: item.data.author,
            preview_img: image,
          });
        } catch (e) {
          console.log(e);
        }
      });
      setData([newArr]);
    }
    fetchData();
  }, []);

  return (
    <div>
      <CardList data={data} />
    </div>
  );
}

export default App;
