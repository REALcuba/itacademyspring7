import { useState } from "react";
import Input from "../../components/input/Input";
import AddPages from "../../components/addPages/AddPages";
// import AddPages from "../../components/addPages/AddPages";

type MainBoardProps = {
    services: {
        project: string;
        price: number;
    }[];

}

export const MainBoard: React.FC<MainBoardProps> = ({ services }) => {
    const [total, setTotal] = useState(0)
    const [isCheckArr, setIsCheckArr] = useState(new Array(services.length).fill(false))
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = (position: number): void => {

        const updatedCheckedState: boolean[] = isCheckArr.map((item, index) => {

            return index === position ? !item : item
        });
        setIsCheckArr(updatedCheckedState);

        let totalPrice = 0;
        // console.log(updatedCheckedState);

        updatedCheckedState.forEach((currentState: boolean, index) => {

            if (currentState === true) {
                setIsChecked(currentState)
                totalPrice += services[index].price;

            } 
        });

        setTotal(totalPrice);
    };

    return (
        <>
            <form >
                <label >
                    <strong>Que quieres hacer?</strong>
                    {services.map(({ project, price }, index) => (


                        <div key={index}>
                            <div>
                                {<Input handleOnChange={handleOnChange} index={index} isChecked={isCheckArr[index]} checkedArr={isCheckArr} />}
                                {project} ({price} €)
                            </div>
                            {isCheckArr[index] && <AddPages isChecked={isChecked} />}
                        </div>)

                    )
                    }
                </label>
            </form>
            <div>Price: {total}€</div>
        </>
    )
}


// import React, { useState } from "react";
// import Input from "../../components/input/Input";
// import AddPages from "../../components/addPages/AddPages";

// type MainBoardProps = {
//     services: {
//         project: string;
//         price: number;
//     }[];
// };

// export const MainBoard: React.FC<MainBoardProps> = ({ services }) => {
//     const [total, setTotal] = useState(0);
//     const [isCheckArr, setIsCheckArr] = useState<boolean[]>(new Array(services.length).fill(false));
//     const [isChecked, setIsChecked] = useState(false);

//     const handleOnChange = (position: number): void => {
//         const updatedCheckedState: boolean[] = isCheckArr.map((item, index) => {
//             return index === position ? !item : item;
//         });

//         setIsCheckArr(updatedCheckedState);
//         setIsChecked(updatedCheckedState[position]);

//         let totalPrice = 0;

//         updatedCheckedState.forEach((currentState: boolean, index) => {
//             if (currentState === true) {
//                 totalPrice += services[index].price;
//             }
//         });

//         setTotal(totalPrice);
//     };

//     return (
//         <>
//             <form>
//                 <label>
//                     <strong>¿Qué quieres hacer?</strong>
//                     {services.map(({ project, price }, index) => (
//                         <div key={index}>
//                             <div>
//                                 <Input handleOnChange={handleOnChange} index={index} isChecked={isCheckArr[index]} checkedArr={isCheckArr} />
//                                 {project} ({price} €)
//                             </div>
//                             {isCheckArr[index] && <AddPages isChecked={isChecked} />}
//                         </div>
//                     ))}
//                 </label>
//             </form>
//             <div>Precio: {total}€</div>
//         </>
//     );
// };
