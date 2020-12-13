import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import AddModal from './components/Modal';

class App extends React.Component {
  state = {
    movies : [
      {
        title : 'Now You See Me',
        posterUrl : 'https://i.pinimg.com/originals/83/85/22/838522ccb86bde6ee59df3909dbea63b.jpg',
        description : 'An F.B.I. Agent and an Interpol Detective track a team of illusionists who pull off bank heists during their performances.',
        rate :4.5
      },
      {
        title : 'Inception',
        posterUrl : 'https://miro.medium.com/max/800/1*Aop38tMyxWjGowYDVX4Nqw@2x.jpeg',
        description : 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
        rate :5
      },
      {
        title : 'In Time',
        posterUrl : 'https://file1.telestar.fr/var/telestar/storage/images/3/3/1/7/3317512/time-out.jpg?alias=original',
        description : 'In a future where people stop aging at 25, but are engineered to live only one more year, having the means to buy your way out of the situation is a shot at immortal youth.',
        rate :1
      },
      {
        title : 'Sound Of My Voice',
        posterUrl : 'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Sound_of_my_Voice_poster.jpg/220px-Sound_of_my_Voice_poster.jpg',
        description : 'Two documentary filmmakers attempt to penetrate a cult who worships a woman who claims to be from the future.',
        rate :5
      },
      {
        title : 'Fractured',
        posterUrl : 'https://upload.wikimedia.org/wikipedia/en/8/8c/Fracture_poster.jpeg',
        description : "A couple stops at a gas station, where their 6 y.o. daughter's arm is fractured. They hurry to a hospital. Something strange is going on there.",
        rate :3
      },
      {
        title : 'Interstellar',
        posterUrl : 'https://www.cinemaroyal.ch/media/k2/items/cache/b9761710e2d567efefc41798919e031b_XL.jpg',
        description : "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        rate :2.5
      },
    ]
  }
  add = (newMovie) => {
    this.setState({
      movies : this.state.movies.concat(newMovie),
    })
  }
  render (){
    return (
      <div className="App">
          <h1>My Movie App</h1>
          
          <div >
            <nav>
              <ul>
                <li>Action</li>
                <li>Comedies</li>
                <li>Adventure</li>
                <li>Musical</li>
                <li>Dramas</li>
                <li>Historical</li>
                <li>Science fiction</li>                        
              </ul>
            </nav>
            <MovieList movies = {this.state.movies}/>
          </div>
          <AddModal addMovie = {(M) => this.add(M)} />
      </div>
    );
  }
  
}

export default App;
