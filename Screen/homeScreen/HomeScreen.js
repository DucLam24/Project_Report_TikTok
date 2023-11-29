import { useEffect, useState } from "react";
import VideoItem from "../../component/VideoItem";
import { FlatList } from "react-native";
const HomeScreen = () => {
  const [data, setData] = useState([]);
  //https://video-api-5of1.onrender.com/api/video  api

  useEffect(() => {
    fetch("http://localhost:4400/api/video")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  return (
    <FlatList
      data={data}
      // pagingEnabled
      renderItem={({ item, index }) => <VideoItem data={item} />}
    />
  );
};
export default HomeScreen;
