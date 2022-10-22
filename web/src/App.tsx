import { MagnifyingGlassPlus } from 'phosphor-react'
import './styles/main.css'
import LogoImg from './assets/logo-nlw-esports.svg'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

interface Game {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
        ads: number;
    }
}
function App() {
    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
        fetch('http://localhost:3000/games')
            .then(response => response.json())
            .then(data => { setGames(data) })
    }, [])


    return (
        <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
            <img src={LogoImg} alt="" />

            <h1 className="text-6xl text-white font-black mt-20">
                Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui
            </h1>

            <div className='grid grid-cols-6 gap-6 mt-16'>
                {games.map(game => {
                    return (
                        <GameBanner title={game.title} bannerUrl={game.bannerUrl} adsCount={game._count.ads} />
                    )
                })}
            </div>
            <Dialog.Root>
                <CreateAdBanner />

                <Dialog.Portal>
                    <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>

                    <Dialog.Content>
                        <Dialog.Title>Publique um Anuncio</Dialog.Title>

                        <Dialog.Content>
                            So pra vizualizar
                        </Dialog.Content>

                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    )
}

export default App
