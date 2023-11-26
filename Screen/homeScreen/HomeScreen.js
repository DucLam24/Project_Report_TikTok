// import { data, windowHeight } from "./component/constants";
import { windowHeight } from "../../component/constants";
import { useEffect, useState } from "react";
// import VideoItem from "./component/VideoItem";
import VideoItem from "../../component/VideoItem";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { FlatList } from "react-native";
const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const bottomTabHeight = useBottomTabBarHeight();

  useEffect(() => {
    fetch("https://6562deebee04015769a69d00.mockapi.io/project")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  return (
    <FlatList
      data={data}
      // pagingEnabled
      renderItem={({ item, index }) => (
        <VideoItem data={item} isActive={activeVideoIndex === index} />
      )}
      onScroll={(e) => {
        const index = Math.round(
          e.nativeEvent.contentOffset.y / (windowHeight - bottomTabHeight)
        );
        setActiveVideoIndex(index);
      }}
    />
  );
};

export default HomeScreen;
