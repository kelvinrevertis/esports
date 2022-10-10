import { MagnifyingGlassPlus } from 'phosphor-react'
import './styles/main.css'
import LogoImg from './assets/logo-nlw-esports.svg'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { useState, useEffect } from 'react'

function App() {
    const [games, setGames] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/games')
        .then(response => response.json())
        .then(data => {console.log(data)})
    },[])

    
    return (
        <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
            <img src={LogoImg} alt="" />

            <h1 className="text-6xl text-white font-black mt-20">
                Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui
            </h1>

            <div className='grid grid-cols-6 gap-6 mt-16'>
               <GameBanner bannerUrl='/Game (1).png' title='League of legends' adsCount={'8'}/>
               <GameBanner bannerUrl='/Game (6).png' title='Wow' adsCount={'8'}/>
            </div>

            <CreateAdBanner/>            
        </div>
    )
}

export default App
