import { useEffect, useState } from "react";
import MainSlider from "../components/slider/MainSlider";
import RightSlider from "../components/slider/RightSlider";

function Home() {
  const [news, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadContainer = async () => {
    let endpoint = "http://devback.lndo.site:8000/api/decoupled-news/home";
    let response = await fetch(endpoint);
    try {
      if (response.status === 200) {
        const result = await response.json();
        setData(result);
      } else {
        throw new Error(`Error: ${response.statusText}`);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContainer();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 px-0">
            <MainSlider newsData={news.data} />
          </div>
          <div className="col-lg-5 px-0">
            <RightSlider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
