import { ChangeEvent, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";
import AddPages from "../../components/addPages/AddPages";
import { UseLocaleStorage } from '../../components/customHooks/UseLocaleStorage'
import DataInputs from "../../components/dataInputs/DataInputs";
import CreateProject from "../../components/createProject/CreateProject";
import { type Project, type MainBoardProps } from "../../components/types/Types";


export const MainBoard: React.FC<MainBoardProps> = ({ services }) => {
    // const navigate = useNavigate()
    const [total, setTotal] = useState(0)
    const [isCheckArr, setIsCheckArr] = useState(new Array(services.length).fill(false))
    const [isChecked, setIsChecked] = useState(false);
    const [pagesArr, setPagesArr] = useState<number[]>(new Array(services.length).fill(1))
    const [languagesArr, setLanguagesArr] = useState(new Array(services.length).fill(1))
    const [pages, setPages] = useState<number>(1)
    const [languages, setLanguages] = useState<number>(1)
    const [isLocalePageArr, setIsLocalePageArr] = UseLocaleStorage('isLocalePageArr', new Array(services.length).fill(1))
    const [isLocaleLanguagesArr, setIsLocaleLanguagesArr] = UseLocaleStorage('isLocaleLanguagesArr', new Array(services.length).fill(1))
    const [getProjectName, setProjectName] = useState("")
    const [getClient, setClient] = useState("")
    const [projectArr, setProjectArr] = useState<Project[]>([])
    const [isLocaleProjectArr, setIsLocaleProjectArr] = UseLocaleStorage('isLocaleProjectArr', projectArr)


    const updatedPagesArr = [...pagesArr]
    const updatedLanguagesArr = [...languagesArr];
    const updatedProjectArr = [...projectArr]

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
        updatedPagesArr[position] = updatedPagesArr[position] + 1;
        setPagesArr([...updatedPagesArr]);
        setIsLocalePageArr(updatedPagesArr);
        setPages(updatedPagesArr[position]);
    };

    const handleAddLanguageBtn = (position: number): void => {
        updatedLanguagesArr[position] = updatedLanguagesArr[position] + 1;
        setLanguagesArr([...updatedLanguagesArr]);
        setIsLocaleLanguagesArr(updatedLanguagesArr);
        setLanguages(updatedLanguagesArr[position]);
        // }
    };

    const handleSubstractPageBtn = (position: number): void => {
        console.log('resta');
        if (updatedPagesArr[position] > 1) {
            console.log(pages);
            updatedPagesArr[position] = updatedPagesArr[position] - 1;
            setPagesArr([...updatedPagesArr])
            setIsLocalePageArr(updatedPagesArr);
            setPages(updatedPagesArr[position])
        }
    }

    const handleSubstractLanguageBtn = (position: number): void => {
        console.log('resta');
        if (updatedLanguagesArr[position] > 1) {
            // setLanguages(languages - 1);
            console.log(languages);
            updatedLanguagesArr[position] = updatedLanguagesArr[position] - 1;
            setLanguagesArr([...updatedLanguagesArr]);
            setIsLocaleLanguagesArr(updatedLanguagesArr);
            setLanguages(updatedLanguagesArr[position])
        }
    }
    const handleInputPagesChange = (e: ChangeEvent<HTMLInputElement>, position: number): void => {
        updatedPagesArr[position] = parseInt(e.target.value);
        setPagesArr([...updatedPagesArr]);
        setPages(updatedPagesArr[position])
    };
    const handleInputLanguagesChange = (e: ChangeEvent<HTMLInputElement>, position: number): void => {
        updatedLanguagesArr[position] = parseInt(e.target.value)
        setLanguagesArr([...updatedLanguagesArr])
        setLanguages(updatedLanguagesArr[position])
    }
    
    const handleInputOnChange = (position: number): void => {
        const updatedCheckedState: boolean[] = isCheckArr.map((item, index) =>
            index === position ? !item : item);
        setIsCheckArr(updatedCheckedState);

        updatedCheckedState.forEach((currentState: boolean, index) => {
            if (currentState === true) {
                setIsChecked(currentState);
                setPages(pagesArr[index]);
                setLanguages(languagesArr[index]);
            }
        });
    };

    const handlerGetProjectName = (e: React.ChangeEvent<HTMLInputElement>) => setProjectName(e.target.value)

    const handlerGetClient = (e: React.ChangeEvent<HTMLInputElement>) => setClient(e.target.value)    

    const getServiceNameArr: (string | null)[] = services.map((service, index) => {
        if (isCheckArr[index]) {
            return service.project;
        }
        // }
        return null; 
    }).filter(Boolean)

    const getProjectData = () => {
        const getDate = new Date().toLocaleString();

        const updatedProject: Project = {
            id: crypto.randomUUID(),
            projectName: getProjectName,
            clientName: getClient,
            totalPages: pages,
            totalLanguages: languages,
            totalPrice: total,
            service: getServiceNameArr,
            date: getDate
        }

        console.log(updatedProject);
        updatedProjectArr.push(updatedProject)
        setClient('')
        setProjectName('')
        setProjectArr(prevProjectArr => [...prevProjectArr, updatedProject]);
        setIsLocaleProjectArr((prevLocaleProjectArr: Project[]) => [...prevLocaleProjectArr, updatedProject]);
       
    }

    const handlerClickProjectData = () => {
        isCheckArr.some(value => value === true) ? getProjectData() : null

    }
    // // // Function to update the URL based on the selected inputs
    // const updateURL = useCallback(() => {
    //     const queryParams = [];
    //     for (let i = 0; i < isCheckArr.length; i++) {
    //         if (isCheckArr[i]) {
    //             queryParams.push(`page${i + 1}=${pagesArr[i]}&lang${i + 1}=${languagesArr[i]}&services=${getServiceNameArr}&client=${getClient}`);
    //         }
    //     }
    //     const queryString = queryParams.join("&");
    //     navigate(`/main-board?${queryString}`);
    // }, [navigate, isCheckArr, pagesArr, languagesArr, getServiceNameArr, getClient]);
    // useEffect(() => {
    //     updateURL()
    // }, [updateURL])
    useEffect(() => {
        calculateTotal(pagesArr, languagesArr, isCheckArr, services);
        setPagesArr(isLocalePageArr);
        setLanguagesArr(isLocaleLanguagesArr);
        setProjectArr(projectArr);
        setIsLocaleProjectArr(isLocaleProjectArr);


    }, [pagesArr, languagesArr, isCheckArr, services, isLocalePageArr, isLocaleLanguagesArr, projectArr, setIsLocaleProjectArr, isLocaleProjectArr])

    return (
        <section className="d-flex gap-md-5 align-items-center fst-italic">
            <form >
                <label >
                    <strong>Que quieres hacer?</strong>

                    {services.map(({ project, price }, index) => {
                        return <div key={index}>
                            <div className="container-md">
                                {<Input
                                    handleOnChange={(index) => handleInputOnChange(index)}
                                    index={index}
                                />}
                                {project} ({price} €)
                            </div>
                            {isCheckArr[index] && <div className="d-flex align-items-center justify-content-between">
                                <AddPages
                                    isChecked={isChecked}
                                    valuePages={pagesArr[index]}
                                    valueLanguages={languagesArr[index]}
                                    handleInputPagesChange={(e) => handleInputPagesChange(e, index)}
                                    index={index}
                                    handleInputLanguagesChange={handleInputLanguagesChange}
                                    handleAddPageBtn={() => handleAddPageBtn(index)}
                                    handleSubstractPageBtn={() => handleSubstractPageBtn(index)}
                                    handleAddLanguageBtn={() => handleAddLanguageBtn(index)}
                                    handleSubstractLanguageBtn={() => handleSubstractLanguageBtn(index)}
                                />
                            </div>}
                        </div>
                    }
                    )}

                    <DataInputs handlerGetProjectName={handlerGetProjectName} handlerGetClient={handlerGetClient} getProjectName={getProjectName} getClient={getClient} />
                    <button type="button" className="btn mt-2 btn-primary" onClick={handlerClickProjectData}> Submit</button>
                </label>
            </form>
            {<aside className="align-items-center border d-flex flex-column justify-content-between project_data_div">
                <CreateProject projectArr={isLocaleProjectArr} />
                {/* <div>Precio: {total}€</div> */}
            </aside>}
        </section>
    )
}