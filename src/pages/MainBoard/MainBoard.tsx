import { useState } from "react";
import Input from "../../components/input/Input";
// import { Services } from '../../assets/Services'


// type Service = { project: string, price: number }
// type MainBoardProps = Services
type MainBoardProps = {
    services: { project: string, price: number }[]
}
// type isCheck = boolean
const totalPrice = 0
export const MainBoard: React.FC<MainBoardProps> = (services) => {
    const [isCheck, setIsCheck] = useState(true)
    console.log(services);
    return (
        <>
            <form >
                <label >
                    <strong>Que quieres hacer?</strong>
                    {services.services.map(({ project, price }, index) => (
                        <div key={index}>
                            {<Input ischecked={isCheck} />}
                            {project}{price}
                        </div>))}
                </label>
            </form>
            <div>Price: {totalPrice}€</div>
        </>
    )
}
