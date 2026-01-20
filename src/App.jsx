import './App.css'
import navImg from  './assets/logo.png';
import coin from './assets/gold-coin-money-symbol-icon.png';
import Available from './Components/Available/Available';
import { Suspense } from 'react';

const dataFetch = async () => {
  const res =  await fetch('/players.json');
  return res.json()
}
function App() {
   const fetchPlayer = dataFetch();
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback = {<span className="loading loading-spinner loading-xl"></span>}>
              <Available key ={fetchPlayer.id} fetchPlayer = {fetchPlayer}></Available>
      </Suspense>
    </>
  )
}

function Navbar () {

  return(
    <div className="navbar mt-3 max-w-300 mx-auto">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"><img src={navImg} alt="" /></a>
  </div>
  <div className="flex items-center font-bold p-2.5 rounded-xl ">
    <span className='mr-1 '>60000000 </span>
    <span className='mr-1'>Coins </span>
    <img className='h-5 w-5' src={coin} alt="" />
  </div>
</div>
  )
}
export default App;