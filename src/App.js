import logo from './logo.svg'
import './App.css'
import D3Graph from './components/D3Graph'

function App() {
  return (
    <div className='App'>
      <header>
        <div className='horizontal'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>Cola/React Graph Example</h1>
        </div>
      </header>

      <D3Graph className='content' />

      <footer>
        <a className='fine-print App-link' href='https://www.linkedin.com/in/jeffscollier/'>
          Jeff Collier
        </a>
      </footer>
    </div>
  )
}

export default App;
