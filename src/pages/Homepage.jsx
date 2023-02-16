import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import axios from "axios";
import Picture from "../components/Picture";

const Homepage = () => {
  const [data, setData] = useState(null);
  let [input, setInput] = useState('');
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState('');
  const auth = "U1O7zTMxQx6Z8yILjmXeyFjuDzIe35OCYmnp0UroUjkg3pS3ARDSO1l6";
  const initialURL = `https://api.pexels.com/v1/curated?page=1&per_page=15`;
  let searchUrl = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

  const search = async (url) => {
    let result = await axios.get(url, {
      headers: { Authorization: auth },
    });
    setData(result.data.photos);
    setCurrentSearch(input);
  };

  //closure
  const morePicture = async() => {
    let newUrl;
    setPage(page + 1);
    if(currentSearch === '') {
      newUrl = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newUrl = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${page + 1}`;
    }
    let result = await axios.get(newUrl, {
      headers: {Authorization: auth},
    });
    setData(data.concat(result.data.photos));
  }

  useEffect(() => {
    search(initialURL);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchUrl);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture key={d.id} data={d} />;
          })}
      </div>
     <div className="morePicture">
      <button onClick={morePicture}>更多图片</button>
     </div>
    </div>
  );
};

export default Homepage;
