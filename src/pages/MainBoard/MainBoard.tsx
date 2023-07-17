import { ChangeEvent, useEffect, useState } from "react";
import Input from "../../components/input/Input";
import AddPages from "../../components/addPages/AddPages";
import { useLocalStorage } from '../../components/customHooks/UseLocalStorage'

type MainBoardProps = {
    services: {
        project: string;
        price: number;
    }[];

}
// type useLocalStorageType<T> = [
//     T,
//     React.Dispatch<React.SetStateAction<T>>,
// ];
// Get localstorage pagesArr
// const pagesArrFromLocalstorage: number[] | null = JSON.parse(window.localStorage.getItem('isLocalePageArr'));
// console.log("pagesArrFromLocalstorage", pagesArrFromLocalstorage)

// Usar datos de localstorage para inicializar estados
export const MainBoard: React.FC<MainBoardProps> = ({ services }) => {
    const [total, setTotal] = useState(0)
    const [isCheckArr, setIsCheckArr] = useState(new Array(services.length).fill(false))
    const [isChecked, setIsChecked] = useState(false);
    const [pagesArr, setPagesArr] = useState(new Array(services.length).fill(1))
    const [languagesArr, setLanguagesArr] = useState(new Array(services.length).fill(1))
    const [pages, setPages] = useState<number>(1)
    const [languages, setLanguages] = useState<number>(1)
    const [isLocalePageArr, setIsLocalePageArr] = useLocalStorage('isLocalePageArr', new Array(services.length).fill(1))
    const [isLocaleLanguagesArr, setIsLocaleLanguagesArr] = useLocalStorage('isLocaleLanguagesArr', new Array(services.length).fill(1))

    const updatedPagesArr = [...pagesArr]
    const updatedLanguagesArr = [...languagesArr];

    function calculateTotal(pagesArr: number[], languagesArr: number[], isCheckArr: boolean[], services: { project: string; price: number; }[]) {
        let totalPrice = 0;
        for (const index in pagesArr) {
            if (isCheckArr[index]) {
                if (pagesArr[index] >= 2 || languagesArr[index] >= 2) {
                    totalPrice += services[index].price + ((pagesArr[index] + languagesArr[index]) * 30);
                } else {
                    totalPrice += services[index].price;
                }
            }
            setTotal(totalPrice);
        }
    }
    // const handleAddPageBtn = (position: number): void => {
    //     console.log('suma');

    //     // setPages(pages + 1);
    //     console.log(pages);
    //     updatedPagesArr[position] = pages+1;
    //     console.log(updatedPagesArr[position]);

    //     setPagesArr(updatedPagesArr);
    //     setIsLocalePageArr(updatedPagesArr);

    // };
    const handleAddPageBtn = (position: number): void => {
        console.log('suma');

        console.log(pages);
        updatedPagesArr[position] = updatedPagesArr[position] + 1;
        console.log(updatedPagesArr[position]);

        setPagesArr(updatedPagesArr);
        setIsLocalePageArr(updatedPagesArr);
    };


    const handleAddLanguageBtn = (position: number): void => {
        console.log('suma lenguajes');
        // if (updatedLanguagesArr[position] >= 1) {
        // setLanguages(languages + 1);
        console.log(languages);
        updatedLanguagesArr[position] = updatedLanguagesArr[position] + 1;
        setLanguagesArr(updatedLanguagesArr);
        setIsLocaleLanguagesArr(updatedLanguagesArr);
        // }
    };

    const handleSubstractPageBtn = (position: number): void => {
        console.log('resta');
        if (updatedPagesArr[position] > 1) {
            console.log('suma');
            // setPages(pages - 1);
            console.log(pages);
            updatedPagesArr[position] = updatedPagesArr[position] - 1;
            setPagesArr(updatedPagesArr);
            setIsLocalePageArr(updatedPagesArr);

        }
    }
    console.log(pagesArr);

    const handleSubstractLanguageBtn = (position: number): void => {
        console.log('resta');
        if (updatedLanguagesArr[position] > 1) {
            console.log('suma');
            // setLanguages(languages - 1);
            console.log(languages);
            updatedLanguagesArr[position] = updatedLanguagesArr[position] - 1;
            setLanguagesArr(updatedLanguagesArr);
            setIsLocaleLanguagesArr(updatedLanguagesArr);
        }
    }
    const handleInputPagesChange = (e: ChangeEvent<HTMLInputElement>, position: number): void => {
        updatedPagesArr[position] = parseInt(e.target.value);
        setPagesArr(updatedPagesArr[position]);

    };
    const handleInputLanguagesChange = (e: ChangeEvent<HTMLInputElement>, position: number): void => {
        updatedLanguagesArr[position] = parseInt(e.target.value)
        setLanguagesArr(updatedLanguagesArr)
    }
    
    const handleOnChange = (position: number): void => {
        // e.stopPropagation();

        const updatedCheckedState: boolean[] = isCheckArr.map((item, index) =>
            index === position ? !item : item
        );
        setIsCheckArr(updatedCheckedState);

        updatedCheckedState.forEach((currentState: boolean, index) => {
            if (currentState === true) {
                // setPages(1)
                setIsChecked(currentState);
                setPages(pagesArr[index]);
                setLanguages(languagesArr[index]);
                console.log(pages);
                console.log(languages);
            }
        });
    };
    // const handleInputBlur = (index: number) => {
    //     // Realizar alguna lógica adicional cuando se pierde el foco del input en el índice específico
    //     console.log(`Input ${index} perdió el foco`);

    //     // Ejemplo: Validar el valor del input
    //     const inputValue = pagesArr[index];
    //     if (inputValue < 0) {
    //         console.log(`El valor del input ${index} es inválido`);
    //         // Realizar alguna acción en caso de valor inválido
    //     }
    // };
    // const handleInputBlur = (index: number): void => {
    //     // console.log(`Input ${index} perdió el foco`);
    //     // Realizar lógica adicional cuando se pierde el foco del input en el índice específico
    //     // const inputValue = pagesArr[index];
    //     if (isCheckArr[index] === true) {
    //         console.log(`El valor del input ${index} es ${isChecked}`);
    //         // Realizar alguna acción en caso de valor inválido
    //         stopPropagation()
    //     }
    // };

    useEffect(() => {
        calculateTotal(pagesArr, languagesArr, isCheckArr, services);
        setPagesArr(isLocalePageArr);
        setLanguagesArr(isLocaleLanguagesArr);
    }, [pagesArr, languagesArr, isCheckArr, services, isLocalePageArr, isLocaleLanguagesArr])

    return (
        <section>
            <form >
                <label >
                    <strong>Que quieres hacer?</strong>
                    {services.map(({ project, price }, index) => (
                        <div key={index}>
                            <div>
                                {<Input
                                    handleOnChange={(index) => handleOnChange(index)}
                                    index={index}
                                    // handleInputBlur={() => handleInputBlur(index)}
                                />}
                                {project} ({price} €)
                            </div>
                            {isCheckArr[index] && <AddPages isChecked={isChecked}
                                valuePages={pagesArr[index]}
                                valueLanguages={languagesArr[index]}
                                handleInputPagesChange={(e) => handleInputPagesChange(e, index)}
                                index={index}
                                handleInputLanguagesChange={handleInputLanguagesChange}
                                handleAddPageBtn={() => handleAddPageBtn(index)}
                                handleSubstractPageBtn={() => handleSubstractPageBtn(index)}
                                handleAddLanguageBtn={() => handleAddLanguageBtn(index)}
                                handleSubstractLanguageBtn={() => handleSubstractLanguageBtn(index)}
                            />}
                        </div>)
                    )}
                </label>
            </form>
            <div>Price: {total}€</div>
        </section>
    )
}