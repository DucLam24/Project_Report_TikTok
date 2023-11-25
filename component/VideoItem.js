import { Animated, Easing, StyleSheet } from "react-native";
import React, { useCallback, useEffect, useRef } from "react";
// import Video from "react-native-video";
import { ResizeMode, Video, resizeMode } from "expo-av";
import { Image, SafeAreaView, Text, View } from "react-native-web";
import { windowHeight, windowWidth } from "./constants";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
const VideoItem = ({ data, isActive }) => {
  const { uri, caption, channelName, musicName, likes, comments, avatarUri } =
    data;
  const discAnimatedValue = useRef(new Animated.Value(0)).current;
  const mucsicNoteAnimatedValue1 = useRef(new Animated.Value(0)).current;
  const mucsicNoteAnimatedValue2 = useRef(new Animated.Value(0)).current;

  const discAnimaLoopRef = useRef();
  const musicAnimaLoopRef = useRef();

  const discAnimation = {
    transform: [
      {
        rotate: discAnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "360deg"],
        }),
      },
    ],
  };

  const musicNoteAnimation = {
    transform: [
      {
        translateX: mucsicNoteAnimatedValue1.interpolate({
          inputRange: [0, 1],
          outputRange: [8, -16],
        }),
      },
      {
        translateY: mucsicNoteAnimatedValue1.interpolate({
          inputRange: [0, 1],
          outputRange: [8, -32],
        }),
      },
      {
        rotate: mucsicNoteAnimatedValue1.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "45deg"],
        }),
      },
      // {
      //   // opacity: mucsicNoteAnimatedValue1.interpolate({
      //   //   inputRange: [0, 0.8, 1],
      //   //   outputRange: [0, 1, 0],
      //   // }),
      // },
    ],
  };

  const musicNoteAnimation1 = {
    transform: [
      {
        translateX: mucsicNoteAnimatedValue2.interpolate({
          inputRange: [0, 1],
          outputRange: [8, -16],
        }),
      },
      {
        translateY: mucsicNoteAnimatedValue2.interpolate({
          inputRange: [0, 1],
          outputRange: [8, -32],
        }),
      },
      {
        rotate: mucsicNoteAnimatedValue2.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "-45deg"],
        }),
      },
      // {
      //   opacity: mucsicNoteAnimatedValue2.interpolate({
      //     inputRange: [0, 0.8, 1],
      //     outputRange: [0, 1, 0],
      //   }),
      // },
    ],
  };

  const triggerAnimation = useCallback(() => {
    discAnimaLoopRef.current = Animated.loop(
      Animated.timing(discAnimatedValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    );
    discAnimaLoopRef.current.start();
    musicAnimaLoopRef.current = Animated.loop(
      Animated.sequence([
        Animated.timing(mucsicNoteAnimatedValue1, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(mucsicNoteAnimatedValue2, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ])
    );

    musicAnimaLoopRef.current.start();
  }, [discAnimatedValue, mucsicNoteAnimatedValue1, mucsicNoteAnimatedValue2]);
  // useEffect(() => {
  //   if (isActive) {
  //     triggerAnimation();
  //   } else {
  //     discAnimaLoopRef.current?.stop();
  //     musicAnimaLoopRef.current?.stop();
  //     discAnimatedValue.setValue(0);
  //     mucsicNoteAnimatedValue1.setValue(0);
  //     mucsicNoteAnimatedValue2.setValue(0);
  //   }
  // }, [
  //   isActive,
  //   triggerAnimation,
  //   discAnimatedValue,
  //   mucsicNoteAnimatedValue1,
  //   mucsicNoteAnimatedValue2,
  // ]);

  useEffect(() => {
    Animated.loop(
      Animated.timing(discAnimatedValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();
    // discAnimaLoopRef.current.start();
    musicAnimaLoopRef.current = Animated.loop(
      Animated.sequence([
        Animated.timing(mucsicNoteAnimatedValue1, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(mucsicNoteAnimatedValue2, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ])
    ).start();

    // musicAnimaLoopRef.current.start();
  }, [discAnimatedValue, mucsicNoteAnimatedValue1, mucsicNoteAnimatedValue2]);
  const bottomTabHeight = useBottomTabBarHeight();
  // const statusBarHeight = StatusBar.currentHeight || 0;

  return (
    <SafeAreaView
      style={[styles.container, { height: windowHeight - bottomTabHeight }]}
    >
      <Video
        source={{ uri }}
        style={[
          styles.video,
          { height: windowHeight - bottomTabHeight },
          // { resizeMode: "contain" },
        ]}
        useNativeControls
        isLooping
        resizeMode={ResizeMode.CONTAIN}
      />
      <View style={styles.bottomSection}>
        <View style={styles.bottomLeftSection}>
          <Text style={styles.channelName}>{channelName}</Text>
          <Text style={styles.caption}>{caption}</Text>
          <View style={styles.musicNameContainer}>
            <Image
              source={require("../img/music-note.png")}
              style={styles.musicNameIcon}
            />
            <Text style={styles.musicName}>{musicName}</Text>
          </View>
        </View>
        <View style={styles.bottomRightSection}>
          <Animated.Image
            source={require("../img/disc.png")}
            style={[styles.musicDisc, discAnimation]}
          />
          <Animated.Image
            source={require("../img/floating-music-note.png")}
            style={[styles.floatingMusicNote, musicNoteAnimation]}
          />
          <Animated.Image
            source={require("../img/floating-music-note.png")}
            style={[styles.floatingMusicNote, musicNoteAnimation1]}
          />
        </View>
      </View>

      <View style={styles.verticalBar}>
        <View style={[styles.verticalBarItem, styles.avatarContainer]}>
          <Image style={styles.avatar} source={{ uri: avatarUri }} />
          <View style={styles.followButton}>
            <Image
              source={require("../img/plus-button.png")}
              style={styles.followIcon}
            />
          </View>
        </View>

        <View style={styles.verticalBarItem}>
          <Image
            style={styles.verticalBarIcon}
            source={require("../img/heart.png")}
          />
          <Text style={styles.verticalBarText}>{likes}</Text>
        </View>

        <View style={styles.verticalBarItem}>
          <Image
            style={styles.verticalBarIcon}
            source={require("../img/message-circle.png")}
          />
          <Text style={styles.verticalBarText}>{comments}</Text>
        </View>

        <View style={styles.verticalBarItem}>
          <Image
            style={styles.verticalBarIcon}
            source={require("../img/reply.png")}
          />
          <Text style={styles.verticalBarText}>Share</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
  },
  video: {
    position: "absolute",
    width: "100%",
    // height: 700,
    // resizeMode: "cover",
  },
  bottomSection: {
    position: "absolute",
    width: "100%",
    paddingHorizontal: 8,
    paddingBottom: 16,
    flexDirection: "row",
    // marginTop: 530,
    bottom: 0,
  },
  bottomLeftSection: {
    flex: 4,
  },
  bottomRightSection: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  channelName: {
    color: "white",
    fontWeight: "bold",
  },
  caption: {
    color: "white",
    marginVertical: 8,
  },
  musicNameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  musicNameIcon: {
    width: 12,
    height: 12,
    marginRight: 8,
  },
  musicName: {
    color: "white",
  },
  musicDisc: {
    width: 40,
    height: 40,
  },
  verticalBar: {
    position: "absolute",
    marginLeft: 340,
    marginTop: 220,
  },
  verticalBarIcon: {
    width: 40,
    height: 40,
  },
  verticalBarItem: {
    marginBottom: 24,
    alignItems: "center",
  },
  verticalBarText: {
    color: "white",
  },
  avatarContainer: {
    marginBottom: 48,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  followButton: {
    position: "absolute",
    marginTop: 37,
  },
  followIcon: {
    width: 16,
    height: 16,
  },
  floatingMusicNote: {
    tintColor: "white",
    position: "absolute",
    width: 16,
    height: 16,
    right: 40,
    bottom: 16,
  },
});

export default VideoItem;
