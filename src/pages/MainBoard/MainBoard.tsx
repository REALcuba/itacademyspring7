import { ChangeEvent, useEffect, useState } from "react";
import Input from "../../components/input/Input";
import AddPages from "../../components/addPages/AddPages";
import { useLocalStorage } from '../../components/customHooks/UseLocalStorage'
import DataInputs from "../../components/dataInputs/DataInputs";
import CreateProject from "../../components/createProject/CreateProject";
import { type Project, type MainBoardProps } from "../../components/types/Types";

// type MainBoardProps = {
//     services: {
//         project: string;
//         price: number;
//     }[];

// }

export const MainBoard: React.FC<MainBoardProps> = ({ services }) => {
    const [total, setTotal] = useState(0)
    const [isCheckArr, setIsCheckArr] = useState(new Array(services.length).fill(false))
    const [isChecked, setIsChecked] = useState(false);
    const [pagesArr, setPagesArr] = useState<number[]>(new Array(services.length).fill(1))
    const [languagesArr, setLanguagesArr] = useState(new Array(services.length).fill(1))
    const [pages, setPages] = useState<number>(1)
    const [languages, setLanguages] = useState<number>(1)
    const [isLocalePageArr, setIsLocalePageArr] = useLocalStorage('isLocalePageArr', new Array(services.length).fill(1))
    const [isLocaleLanguagesArr, setIsLocaleLanguagesArr] = useLocalStorage('isLocaleLanguagesArr', new Array(services.length).fill(1))
    const [getProjectName, setProyectName] = useState("")
    const [getClient, setClient] = useState("")
    const [projectArr, setProjectArr] = useState<Project[]>([])

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
        console.log(pages);
        updatedPagesArr[position] = updatedPagesArr[position] + 1;
        console.log(updatedPagesArr[position]);
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
    const handlerGetProjectName = (e: React.ChangeEvent<HTMLInputElement>) => setProyectName(e.target.value)

    const handlerGetClient = (e: React.ChangeEvent<HTMLInputElement>) => setClient(e.target.value)    

    const getServiceNameArr: (string | null)[] = services.map((service, index) => {
        if (isCheckArr[index]) {
            return service.project;
        }
        // }
        return null; // O cualquier valor que desees para los elementos que no están marcados como checked
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
        setClient('')
        setProyectName('')
        setProjectArr(prevProjectArr => [...prevProjectArr, updatedProject]);

    }
    //

    //handle  projectData
    // const handlerGetProjectData = () => {
    //     const existingProject = projectArr.find(project => project.id === updatedProject.id);
    //     const updatedProject: Project = {
    //         id: existingProject ? existingProject.id : crypto.randomUUID(),
    //         projectName: getProjectName,
    //         clientName: getClient,
    //         totalPages: pages,
    //         totalLanguages: languages,
    //         totalPrice: total,
    //         service: serviceName
    //     };
    //     if (existingProject) {
    //         // Si el proyecto ya existe, actualizamos el arreglo sin duplicar
    //         const updatedProjectArr = projectArr.map(project =>
    //             project.id === updatedProject.id ? updatedProject : project
    //         );
    //         setProjectArr(updatedProjectArr);
    //     } else {
    //         // Si el proyecto es nuevo, lo agregamos al arreglo
    //         setProjectArr(prevProjectArr => [...prevProjectArr, updatedProject]);
    //     }
    //     // const existingProject = projectArr.find(project => project.id === updatedProject.id);
    //     // if (existingProject) {
    //     //     // Si el proyecto ya existe, actualizamos el arreglo sin duplicar
    //     //     const updatedProjectArr = projectArr.map(project =>
    //     //         project.id === updatedProject.id ? updatedProject : project
    //     //     );
    //     //     setProjectArr(updatedProjectArr);
    //     // } else {
    //     //     // Si el proyecto es nuevo, lo agregamos al arreglo
    //     //     setProjectArr(prevProjectArr => [...prevProjectArr, updatedProject]);
    //     // }
    //     // setProjectArr((prevProjectArr) => [...prevProjectArr, updatedProject]);
    // };
    // const handlerGetProjectData = () => {
    //     let updatedProject: Project;
    //     const existingProject = projectArr.find(project => project.id === updatedProject?.id);

    //     if (existingProject) {
    //         // Si el proyecto ya existe, actualizamos el arreglo sin duplicar
    //         updatedProject = {
    //             ...existingProject,
    //             projectName: getProjectName,
    //             clientName: getClient,
    //             totalPages: pages,
    //             totalLanguages: languages,
    //             totalPrice: total,
    //             service: serviceName
    //         };

    //         const updatedProjectArr = projectArr.map(project =>
    //             project.id === updatedProject.id ? updatedProject : project
    //         );
    //         setProjectArr(updatedProjectArr);
    //     } else {
    //         // Si el proyecto es nuevo, lo agregamos al arreglo
    //         updatedProject = {
    //             id: crypto.randomUUID(),
    //             projectName: getProjectName,
    //             clientName: getClient,
    //             totalPages: pages,
    //             totalLanguages: languages,
    //             totalPrice: total,
    //             service: serviceName
    //         };

    //         setProjectArr(prevProjectArr => [...prevProjectArr, updatedProject]);
    //     }
    // };
    const handlerClickProjectData = () => isCheckArr.some(value => value === true) ? getProjectData() : null 

    useEffect(() => {
        calculateTotal(pagesArr, languagesArr, isCheckArr, services);
        setPagesArr(isLocalePageArr);
        setLanguagesArr(isLocaleLanguagesArr);
        setProjectArr(projectArr);


    }, [pagesArr, languagesArr, isCheckArr, services, isLocalePageArr, isLocaleLanguagesArr, projectArr])

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
                                    // handleInputBlur={() => handleInputBlur(index)}
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
            {isChecked && <aside className="align-items-center border d-flex flex-column justify-content-between project_data_div">
                <CreateProject projectArr={projectArr} />
                {/* <div>Precio: {total}€</div> */}
            </aside>}
        </section>
    )
}