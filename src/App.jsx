import './App.css';
import Image from './components/LikeImage';
import Post from './components/LikePost';
import Props from './components/Hoc'

function App() {
  return (
    <div>
      <h1>Some Blog</h1>
      <div className='cont'>
        <Props render={(value,increase)=><Post value={value} increase={increase}></Post>}/>     
        <Props render={(value,increase)=><Image value={value} increase={increase}></Image>}/>
      </div>
    </div>
  );
}

export default App;
