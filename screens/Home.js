import React from 'react';
import {Text, View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {
  popularMovies,
  upcomingMovies,
  popularTvShows,
} from '../shared/moviesdata';

function Home() {
  const [moviesImages, setMoviesImages] = React.useState();

  React.useEffect(() => {
    const moviesImagesArray = [];
    // console.log('POPULAR MOVIES HERE: ' + JSON.stringify(popularMovies.results[0]));
    // console.log('POPULAR MOVIES Poster path HERE: ' + 'https://image.tmdb.org/t/p/w500' + popularMovies.results[0].poster_path);
    popularMovies.results.forEach(movie => {
      moviesImagesArray.push(
        'https://image.tmdb.org/t/p/w500' + movie.poster_path
      );
    });
    setMoviesImages(moviesImagesArray);
    console.log('Movies Images here : ' + moviesImages);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <SliderBox images={moviesImages} />
      {/* <Text>What</Text> */}
    </View>
  );
}

export default Home;
