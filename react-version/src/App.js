import Navigation from './components/Navigation';
import Profile from './components/Profile';
import TweetForm from './components/TweetForm';
import TweetList from './components/TweetList';
import './App.css';


function App() {
  const user = {firstName: "Amy", lastName: "Mansel", avatar: "/profile-hex.png"};
  

  return (
    <div className="App">
      <Navigation />
      <Profile {...user} />  
      <main className='container'>
        <TweetList />
        <TweetForm />
      </main>
    </div>
  );
}

export default App;
