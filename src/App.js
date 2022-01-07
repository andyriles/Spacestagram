import { useState, useEffect } from "react";
import "./App.scss";
import SpaceLoader from "./Loader/SpaceLoader";
//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
function App() {
  const [data, setData] = useState({});
  const [liked, setLiked] = useState(() => {
    const data = localStorage.getItem("liked");
    return data ? JSON.parse(data) : false;
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("liked", JSON.stringify(liked));
  }, [liked, data]);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
    } else {
      setLiked(true);
    }
  };

  return loading ? (
    <SpaceLoader />
  ) : (
    <div className="App">
      <div className="container">
        <div className="heading">
          <h1>Spacestagram</h1>
          <p className="reference">
            Brought to you by NASA's Astronomy Photo of the Day (APOD) API
          </p>
        </div>
        <div className="body">
          <img src={data.url} alt={data.title} />
          <div className="info">
            <div className="title">
              <p>{data.title}</p>
              <p>{data.date}</p>
            </div>
            <p className="description">{data.explanation}</p>
            <button
              type="button"
              className="like-button"
              onClick={handleLike}
              style={{ color: liked ? "red" : "green" }}
            >
              {liked ? "Undo Like" : "Like"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
