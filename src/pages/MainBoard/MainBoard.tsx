import { ChangeEvent, useEffect, useState } from "react";
import Input from "../../components/input/Input";
import AddPages from "../../components/addPages/AddPages";

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
    const [pagesArr, setPagesArr] = useState(new Array(services.length).fill(1))
    const [languagesArr, setlanguagesArr] = useState(new Array(services.length).fill(1))

    function calculateTotal(pagesArr: number[], languagesArr: number[], isCheckArr: boolean[], services: { project: string; price: number; }[]) {
        let totalPrice = 0;
        for (const index in pagesArr) {
            // if (event.target.value === "0" || event.target.value === "") { setPages(1) }
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
    const handleInputPagesChange = (e: ChangeEvent<HTMLInputElement>, position: number): void => {
        const updatedPagesArr = [...pagesArr];
        updatedPagesArr[position] = parseInt(e.target.value);
        setPagesArr(updatedPagesArr);

    };
    const handleInputLanguagesChange = (e: ChangeEvent<HTMLInputElement>, position: number): void => {
        const updatedlanguagesArr = [...languagesArr];
        updatedlanguagesArr[position] = parseInt(e.target.value)
        setlanguagesArr(updatedlanguagesArr)
    }
    
    const handleOnChange = (position: number): void => {
        const updatedCheckedState: boolean[] = isCheckArr.map((item, index) =>
            index === position ? !item : item
        );
        setIsCheckArr(updatedCheckedState);

        updatedCheckedState.forEach((currentState: boolean, index) => {
            if (currentState === true) {
                setIsChecked(currentState);
                const pages = pagesArr[index];
                const languages = languagesArr[index];
                console.log(pages);
                console.log(languages);
            }
        });
    };
    useEffect(() => {
        calculateTotal(pagesArr, languagesArr, isCheckArr, services);

    }, [pagesArr, languagesArr, isCheckArr, services])

    return (
        <>
            <form >
                <label >
                    <strong>Que quieres hacer?</strong>
                    {services.map(({ project, price }, index) => (
                        <div key={index}>
                            <div>
                                {<Input handleOnChange={handleOnChange}
                                    index={index}
                                    isChecked={isCheckArr[index]}
                                    checkedArr={isCheckArr}
                                />}
                                {project} ({price} €)
                            </div>
                            {isCheckArr[index] && <AddPages isChecked={isChecked} valuePages={pagesArr[index]} valueLanguages={languagesArr[index]} handleInputPagesChange={(e) => handleInputPagesChange(e, index)} index={index} handleInputLanguagesChange={handleInputLanguagesChange} />}
                        </div>)
                    )}
                </label>
            </form>
            <div>Price: {total}€</div>
        </>
    )
}
