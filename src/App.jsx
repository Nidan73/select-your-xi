import './App.css'
import navImg from  './assets/logo.png';
import coin from './assets/gold-coin-money-symbol-icon.png';
import Available from './Components/Available/Available';
import { Suspense, useState } from 'react';
import Selected from './Components/Selected/Selected';

const dataFetch = async () => {
  const res =  await fetch('/players.json');
  return res.json()
}


const fetchPlayer = dataFetch();
function App() {
  const [toggle , setToggle] = useState(true);
 const [fund , setFund] = useState(15)
const [purchases,setPurchased] = useState([])

const handleRemove = (p) =>
{
    const updatedList = purchases.filter( pur => pur.id !== p.id);
    setPurchased(updatedList);
    setFund(fund+p.price);
}
  return (
    <>
      <Navbar fund = {fund}></Navbar>
      <div className=' flex items-center justify-between max-w-300 m-auto'>
           <h1 className='font-extrabold text-2xl'>{toggle ? "Available" : `Selected Player  (${purchases.length}/6)`}</h1>
           <div className='flex items-center'>
            <button onClick={()=>setToggle(true)} className={`px-4 py-3 border border-gray-400 rounded-l-2xl border-r-0 ${toggle && "bg-green-400"}`}>Available</button>
            <button onClick={()=>setToggle(false)} className={`px-4 py-3 border border-gray-400 rounded-r-2xl border-l-0 ${toggle || "bg-green-400"}`}>Selected <span>{purchases.length}</span></button>
           </div>
      </div>
      {
        toggle ? <Suspense fallback = {<span className="loading loading-spinner loading-xl"></span>}>
              <Available key ={fetchPlayer.id} fetchPlayer = {fetchPlayer} setFund ={setFund} purchases = {purchases} fund ={fund} setPurchased = {setPurchased}></Available>
      </Suspense> : <Selected handleRemove = {handleRemove} purchases = {purchases}></Selected>
      }
      
    </>
  )
}

function Navbar ({fund}) {
  return(
    <div className="navbar mt-3 max-w-300 mx-auto">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"><img src={navImg} alt="" /></a>
  </div>
  <div className="flex items-center font-bold p-2.5 rounded-xl ">
    <span className='mr-1 '>{fund}M </span>
    <span className='mr-1'>Coins </span>
    <img className='h-5 w-5' src={coin} alt="" />
  </div>
</div>
  )
}
export default App;