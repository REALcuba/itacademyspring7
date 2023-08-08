import { ChangeEvent, useEffect, useState } from 'react';
import Filters from '../filterBtns/FilterBtns';
import { Project, CreateProjectProps } from '../types/Types';
import { useNavigate } from 'react-router-dom';

// import ServiceBudget from '../../pages/serviceBudget/ServiceBudget';


const CreateProject: React.FC<CreateProjectProps> = ({ projectArr}) => {
    const navigate = useNavigate()
    const [filteredProjectArr, setFilteredProjectArr] = useState<Project[]>(projectArr);

    const [searchValue, setSearchValue] = useState<string>('');
    // console.log(value);


    const cloneProjectArr = [...filteredProjectArr]
    const handlerInputSearcValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
        setFilteredProjectArr(cloneProjectArr.filter(project => project.projectName.toLowerCase().includes(searchValue.toLowerCase())))

    }

    const handlerSortProjects = () => {

        cloneProjectArr.sort((projectA, projectB) => projectA.clientName.localeCompare(projectB.clientName))
        console.log(`test clone`, cloneProjectArr);
        setFilteredProjectArr(cloneProjectArr)
        return cloneProjectArr
    }
    const handlerResetBtn = () => setFilteredProjectArr(projectArr);

    const handlerSortByDateFilterBtn = () => {
        cloneProjectArr.sort((projectA, projectB) => {
            return projectB.date.localeCompare(projectA.date)
        })
    }
    // // Function to update the URL based on the selected inputs
    // const updateURL = useCallback(() => {
    //     const queryParams = [];
    //     // for (let i = 0; i < isCheckArr.length; i++) {
    //     //     if (isCheckArr[i]) {
    //     queryParams.push(`page${data. + 1}=${pagesArr[i]}&lang${i + 1}=${languagesArr[i]}&services=${getServiceNameArr}&client=${getClient}`);
    //     // }
    //     // }
    //     const queryString = queryParams.join("&");
    //     navigate(`/main-board?${queryString}`);
    // }, [navigate, isCheckArr, pagesArr, languagesArr, getServiceNameArr, getClient]);
    // useEffect(() => {
    //     updateURL()
    // }, [updateURL])
    useEffect(() => {
        setFilteredProjectArr(projectArr)
    }, [projectArr, setFilteredProjectArr]);

    const handleServiceClick = (data: Project) => {
        // event.stopPropagation()
        navigate("/service-budget", { state: { values: [data] } })
    }
    return (
        <>
            <div className='align-items-md-center container-md d-flex justify-content-center gap-2 mt-1'>
                <Filters handlerSortProjects={handlerSortProjects} handlerResetBtn={handlerResetBtn} handlerSortByDateFilterBtn={handlerSortByDateFilterBtn} handlerInputSearcValue={(e: ChangeEvent<HTMLInputElement>) => handlerInputSearcValue(e)} />
            </div>
            <div className=' mt-2 flex-column project_data_div overflow-y-scroll'
            // event.stopPropagation()

            // console.log(event.target);

            // console.log("test click");
            // }}
            >

                {filteredProjectArr.map(data => {


                    return <div className='align-items-center border-bottom container justify-content-md-between mt-1 m-0 ps-3 row test-project'
                        key={data.id}
                        onClick={() => handleServiceClick(data)}>
                    <div className='col-6 border'>Client:<span> {data.clientName}</span></div>
                    <div className='col-6 border'>Project:<span> {data.projectName}</span></div>
                    <div className='col-12 border'>Service:<span> {projectArr && data.service.join(', ')}</span></div>
                    <div className='col-3 border'>Página(s):<span> {data.totalPages}</span></div>
                    <div className='col-3 border'>Idiomas:<span> {data.totalLanguages}</span></div>
                    <div className='col-3 border'>Precio:<span> {data.totalPrice}</span></div>
                    <div className='col-3 border'>Fecha:<span> {data.date}</span></div>

                </div>
            })}

        </div>

        </>)
}

export default CreateProject
