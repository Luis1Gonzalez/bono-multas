import bom1 from '../assets/gift-3.svg'
import bom2 from '../assets/gift-5.svg'
import bom3 from '../assets/gift-1.svg'
import bom4 from '../assets/gift-2.svg'
import triangle from '../assets/triangulo.png'

const Bono = () => {


    return (
        <div className='p-2'>
            <div className='flex justify-around items-center mb-8'>
            <img src={bom1} alt="" />
            <h1 className='text-center text-4xl font-medium italic'>Bono Multas</h1>
            <img src={bom1} alt="" />
            </div>

            <div className='flex justify-around items-center mb-8'>
            <img src={bom2} alt="" />
            <h2 className='text-center text-3xl mb-3 italic font-medium'>!Multas Ilimitadas¡</h2>
            </div>

            <div className="py-3 px-2 bg-red-100 text-orange-500 font-medium flex flex-col items-center">
            <img src={bom4} alt="" />
                <div>
                    <div>
                        <p className='text-3xl text-center mb-5'>Disfruta tu Bono Multas</p>
                    </div>

                    <p className='text-3xl mb-3'>No mas multas por <span>año</span></p>
                </div>
                <img
                    className='h-[200px]'
                    src={triangle}
                    alt="pegatina" />
                <p className='text-md text-black text-sm italic mt-5'>Valido hasta el 06 de Julio de 2025</p>
                <img src={bom3} alt="" />
            </div>
        </div>
    )
}

export default Bono