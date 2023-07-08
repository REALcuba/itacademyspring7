import { useState } from "react";
import Input from "../../components/input/Input";

type MainBoardProps = {
    services: { project: string, price: number }[]

}

export const MainBoard: React.FC<MainBoardProps> = (services) => {
    // const [isCheck, setIsCheck] = useState(false)
    const [total, setTotal] = useState(0)

    const [isCheckArr, setIsCheckArr] = useState(new Array(services.services.length).fill(false))
    // const [index, setIndex] = useState(0);

    const handleOnChange = (position: number) => {

        const updatedCheckedState: boolean[] = isCheckArr.map((item, index) => {

            return index === position ? !item : item
        }
        );
        setIsCheckArr(updatedCheckedState);
        console.log(isCheckArr[position]);
        let totalPrice = 0;

        updatedCheckedState.forEach((currentState: boolean, index) => {
            if (currentState === true) {
                totalPrice += services.services[index].price;
            }
        });

        setTotal(totalPrice);
    };

    return (
        <>
            <form >
                <label >
                    <strong>Que quieres hacer?</strong>
                    {services.services.map(({ project, price }, index) => {

                        return (
                        <div key={index}>
                                {<Input handleOnChange={handleOnChange} index={index} />}
                                {project} ({price} €)
                            </div>)
                    }
                    )
                    }
                </label>
            </form>
            <div>Price: {total}€</div>
        </>
    )
}


