import verano from '../assets/foto.jpg'
import Calendar from '../assets/calendar.svg'
import Lock from '../assets/lock.svg'
import Gift from '../assets/gift.svg'
import Choice from '../assets/choice.svg'
import { useNavigate } from 'react-router-dom'

const Gif = () => {

    const navigate = useNavigate()

    return (
        <div className='flex flex-col items-center wrap'>
            <p className='text-center mb-5'><span className='font-semibold text-sky-400 text-2xl px-2'>Angely Viaña</span> Junto a <span className='font-black'>Ysmelis y Luis</span> queremos desearte un Feliz cumpleaños, aqui esta tu regalo:</p>
            
            <button
            onClick={() => navigate(`/bono`)}
            className='p-4 rounded-3xl mb-5 bg-sky-300 hover:bg-sky-400 font-medium shadow-2xl border'>Descargalo aqui</button>
            
            <div className='bg-sky-300 flex flex-col items-center pb-5'>
                <img className="" src={verano} alt="" />
                <p className='text-center my-3 font-semibold tracking-wide'>Una caja regalo para cada ocasion</p>
            <p className='text-white text-4xl text-center font-bold'>!Disfruta del verano¡</p>
            
            <div className='flex flex-col gap-5 mt-3 items-center w-[100%]'>
            <button className='bg-orange-400 w-[90%] p-3 text-white font-bold text-lg rounded-md'>Hoteles en la costa</button>
            <button className='bg-orange-400 w-[90%] p-3 text-white font-bold text-lg rounded-md'>Actividades en la playa</button>
            <button className='bg-orange-400 w-[90%] p-3 text-white font-bold text-lg rounded-md'>Viajes con mascotas</button>
            </div>

            

            </div>
            <div className='flex  w-[100%] flex-wrap px-5 justify-around my-5 wrap text-sm text-sky-600 font-medium'>
                <div className='w-[40%] flex flex-col items-center gap-1 mb-2'>
                    <img src={Calendar} alt=""/>
                    <p className='text-center'>Validez prolongable</p>
                </div>
                <div className='w-[40%] flex flex-col items-center gap-1 mb-2'>
                    <img src={Lock} alt=""/>
                    <p className='text-center'>Pago 100% seguro</p>
                </div>
                <div className='w-[40%] flex flex-col items-center gap-1 mt-1'>
                    <img src={Gift} alt=""/>
                    <p className='text-center'>Ofertas unicas</p>
                </div>
                <div className='w-[40%] flex flex-col items-center gap-1 mt-1'>
                    <img src={Choice} alt=""/>
                    <p className='text-center'>Facilidades de cambio</p>
                </div>
            </div>
        </div>
    )
}

export default Gif