import Hamb from "../assets/hamb.svg"
import Login from "../assets/login.svg"
import Cart from "../assets/cart.svg"
import Search from "../assets/search.svg"
import Register from "../assets/registra.svg"
import { useNavigate } from "react-router-dom"


const Header = () => {
    const navigate = useNavigate()
    return (
        <div className="w-[100%] py-7 px-4">
            <div className="flex">
                <div className="w-[15%] flex items-center">
                    <img src={Hamb} alt="logo menú" />
                </div>
                <p
                onClick={() => navigate(`/`)}
                className=" text-orange-600 font-medium text-2xl w-[50%] tracking-wide cursor-pointer">smartbox</p>
                <div className="flex  w-[35%] justify-around items-center">
                    <div className="">
                        <img src={Login} alt="logo sesión" />
                    </div>
                    <div>
                        <img src={Cart} alt="logo carrito" />
                    </div>
                </div>
            </div>


            <div className="my-6 flex items-center relative">
                <input
                    className="border w-[100%] py-2 px-4 rounded-full text-gray-600 placeholder-gray-400 text-sm"
                    type="text"
                    placeholder="Spa, Paradores, Europa, Familia... " />

                <img
                className="absolute right-4 cursor-pointer"
                src={Search} alt="logo buscar" />

            </div>

            <div className="flex justify-center bg-claro p-3 text-orange-600 gap-2">
                <img src={Register} alt="logo registrar" />
                <p>Registra</p>
            </div>

        </div>
    )
}

export default Header




