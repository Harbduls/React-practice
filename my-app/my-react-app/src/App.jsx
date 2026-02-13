import './App.css'
import React from 'react'

// ✅ Fix 1: Uppercase component name
class FilmItemRow extends React.Component {
  render() {
    return (
      <li>
        {/* ✅ Fix 4: Show "View Film" instead of url twice */}
        <a href={this.props.url}>View Film</a>
      </li>
    )
  }
}

class StarWars extends React.Component {
  // ✅ Fix 6: Added props to constructor and super
  constructor(props) {
    super(props)
    this.state = {
      loadedCharacter: false,
      name: '',
      height: '',
      homeworld: '',
      films: []
    }
  }

  getNewCharacter = () => {
    const randomNumber = Math.round(Math.random() * 82)
    const url = `https://swapi.dev/api/people/${randomNumber}/`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          films: data.films,
          loadedCharacter: true,
        })
      })
  }

  render() {
    // ✅ Fix 2 & 3: Use i as index, film as the url
    const movies = this.state.films.map((film, i) => {
      return <FilmItemRow key={i} url={film} />
    })

    return (
      <div>
        {/* ✅ Fix 5: Wrap multiple elements in a div */}
        {this.state.loadedCharacter && (
          <div>
            <h1>{this.state.name}</h1>
            <p>{this.state.height} cm</p>
            <p><a href={this.state.homeworld}>Homeworld</a></p>
            <ul>{movies}</ul>
          </div>
        )}

        <button
          type='button'
          className='btn'
          onClick={() => this.getNewCharacter()}
        >
          Randomize Character
        </button>
      </div>
    )
  }
}

function App() {
  return (
    <div className='App'>
      <header>
        <StarWars />
      </header>
    </div>
  )
}

export default App