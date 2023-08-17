import { ChangeEvent, useEffect, useState } from 'react';
import Filters from '../filterBtns/FilterBtns';
import { Project, CreateProjectProps } from '../types/Types';
import { useNavigate } from 'react-router-dom';


const CreateProject: React.FC<CreateProjectProps> = ({ projectArr}) => {
    const navigate = useNavigate()
    const [filteredProjectArr, setFilteredProjectArr] = useState<Project[]>(projectArr);

    const [searchValue, setSearchValue] = useState<string>('');

    const cloneProjectArr = [...filteredProjectArr]
    const handlerInputSearcValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
        setFilteredProjectArr(cloneProjectArr.filter(project => project.projectName.toLowerCase().includes(searchValue.toLowerCase())))

    }

    const handlerSortProjects = () => {

        cloneProjectArr.sort((projectA, projectB) => projectA.clientName.localeCompare(projectB.clientName))
        setFilteredProjectArr(cloneProjectArr)
        return cloneProjectArr
    }
    const handlerResetBtn = () => setFilteredProjectArr(projectArr);

    const handlerSortByDateFilterBtn = () => {
        cloneProjectArr.sort((projectA, projectB) => {
            return projectB.date.localeCompare(projectA.date)
        })
    }
  
    useEffect(() => {
        setFilteredProjectArr(projectArr)
    }, [projectArr, setFilteredProjectArr]);

    const handleServiceClick = (data: Project) => {
        const queryParams: (string | number)[] = [];
        queryParams.push(`page=${data.totalPages}&lang=${data.totalLanguages}&services=${data.service}&client=${data.clientName}&project=${data.projectName}`);
        const queryString = queryParams.join("&")

        navigate(`/service-budget?${queryString}`, { state: { values: [data] } })
    }

    return (
        <>
            <div className='align-items-md-center container-md d-flex justify-content-center gap-2 mt-1'>
                <Filters handlerSortProjects={handlerSortProjects} handlerResetBtn={handlerResetBtn} handlerSortByDateFilterBtn={handlerSortByDateFilterBtn} handlerInputSearcValue={(e: ChangeEvent<HTMLInputElement>) => handlerInputSearcValue(e)} />
            </div>
            <div className=' mt-2 flex-column project_data_div overflow-y-scroll'>

                <span className='d-flex justify-content-center'>click project to check it</span>
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
