import { MagnifyingGlassPlus } from 'phosphor-react'
import './styles/main.css'
import LogoImg from './assets/logo-nlw-esports.svg'
import { GameBanner } from './components/GameBanner'

function App() {
    return (
        <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
            <img src={LogoImg} alt="" />

            <h1 className="text-6xl text-white font-black mt-20">
                Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui
            </h1>

            <div className='grid grid-cols-6 gap-6 mt-16'>
               <GameBanner bannerUrl='/Game (1).png' title='League of legends' adsCount={'8'}/>


            </div>
            <div className='pt-1 bg-nlw-gradient self-stretch mt-8 rounded-lg overflow-hidden'>
                <div className='bg-[#242634] px-8 py-6 flex justify-between items-center'>
                    
                    <div>
                        <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
                        <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
                    </div>
                    <button className="px-4 py-3 bg-violet-500 hover:bg-violet-700 text-white rounded flex items-center gap-3">
                        <MagnifyingGlassPlus size={24}/>
                        Publicar anúncio
                        </button>
                </div>
            </div>
        </div>
    )
}

export default App
