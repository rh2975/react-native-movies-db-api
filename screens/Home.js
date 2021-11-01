import React from "react";
import { Text, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import {
  popularMovies,
  upcomingMovies,
  popularTvShows,
} from "../shared/moviesdata";

function Home() {
  const [moviesImages, setMoviesImages] = React.useState("");

  React.useEffect(() => {
    const moviesImagesArray = [];
    popularMovies.results.forEach((movie) => {
      moviesImagesArray.push(
        "https://image.tmdb.org/t/p/w500" + movie.poster_path
      );
    });
    setMoviesImages(moviesImagesArray);
    console.log("Movies Images here : " + moviesImages);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SliderBox images={moviesImages} />
      <Text>What</Text>
    </View>
  );
}

export default Home;
