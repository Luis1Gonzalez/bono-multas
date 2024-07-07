import tow from '../assets/grua.svg'
import triangle from '../assets/triangulo.png'

const Bono = () => {

    const backgroundStyle = {
        height: '400px',
        backgroundImage: `url(${tow})`,

    }

    return (
        <div className='p-2'>
            <h1 className='text-center text-4xl font-medium italic mb-8 shadow-xl'>Bono Regalo</h1>
            <h2 className='text-center text-3xl mb-3 italic font-medium'>Bono Multas</h2>

            <div style={backgroundStyle} className="py-3 px-2 bg-orange-500 text-white font-medium flex flex-col items-center">
                <p className='text-2xl text-center mb-5'>Disfruta tu Bono Multas</p>
                <p className='text-2xl mb-3'>No mas multas por <span>año</span></p>
                <img
                className=''
                src={triangle}
                alt="pegatina" />
                <p className='text-md text-black text-sm italic mt-5'>Valido hasta el 06 de Julio de 2025</p>
            </div>
        </div>
    )
}

export default Bono