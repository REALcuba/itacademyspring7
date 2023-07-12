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
    const [languagesArr, setLanguagesArr] = useState(new Array(services.length).fill(1))
    const [pages, setPages] = useState(1)
    const [languages, setLanguages] = useState(1)

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
    const handleAddPageBtn = (position: number): void => {
        console.log('suma');

        setPages(pages + 1);
        console.log(pages);
        updatedPagesArr[position] = pages + 1;
        setPagesArr(updatedPagesArr);

    };
    const handleAddLanguageBtn = (position: number): void => {
        console.log('suma lenguajes');
        // if (updatedLanguagesArr[position] >= 1) {
        setLanguages(languages + 1);
        console.log(languages);
        updatedLanguagesArr[position] = languages + 1;
        setLanguagesArr(updatedLanguagesArr);
        // }
    };

    const handleSubstractPageBtn = (position: number): void => {
        console.log('resta');
        if (pages > 1) {
            console.log('suma');
            setPages(pages - 1);
            console.log(pages);
            updatedPagesArr[position] = pages - 1;
            setPagesArr(updatedPagesArr);
        }
    }
    const handleSubstractLanguageBtn = (position: number): void => {
        console.log('resta');
        if (languages > 1) {
            console.log('suma');
            setLanguages(languages - 1);
            console.log(languages);
            updatedLanguagesArr[position] = languages - 1;
            setLanguagesArr(updatedLanguagesArr);
        }
    }
    const handleInputPagesChange = (e: ChangeEvent<HTMLInputElement>, position: number): void => {
        updatedPagesArr[position] = parseInt(e.target.value);
        setPagesArr(updatedPagesArr);

    };
    const handleInputLanguagesChange = (e: ChangeEvent<HTMLInputElement>, position: number): void => {
        updatedLanguagesArr[position] = parseInt(e.target.value)
        setLanguagesArr(updatedLanguagesArr)
    }
    
    const handleOnChange = (position: number): void => {


        const updatedCheckedState: boolean[] = isCheckArr.map((item, index) =>
            index === position ? !item : item
        );
        setIsCheckArr(updatedCheckedState);

        updatedCheckedState.forEach((currentState: boolean, index) => {
            if (currentState === true) {
                setPages(1)
                setIsChecked(currentState);
                setPages(pagesArr[index]);
                setLanguages(languagesArr[index]);
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
        </>
    )
}
