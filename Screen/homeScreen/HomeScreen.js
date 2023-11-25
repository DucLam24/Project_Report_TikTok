// import { data, windowHeight } from "./component/constants";
import { data, windowHeight } from "../../component/constants";
import { useState } from "react";
// import VideoItem from "./component/VideoItem";
import VideoItem from "../../component/VideoItem";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { FlatList } from "react-native";
const HomeScreen = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const bottomTabHeight = useBottomTabBarHeight();
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
