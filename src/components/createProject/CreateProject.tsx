import { useEffect, useState } from 'react';
import Filters from '../filterBtns/FilterBtns';
import { type Project } from '../types/Types';
import "./styles.css"

type CreateProjectProps = {
    projectArr: Project[];
}

const CreateProject: React.FC<CreateProjectProps> = ({ projectArr }) => {
    const [filteredProjectArr, setFilteredProjectArr] = useState<Project[]>(projectArr)


    const handlerSortProjects = () => {
        const cloneProjectArr = [...filteredProjectArr]

        cloneProjectArr.sort((projectA, projectB) => projectA.clientName.localeCompare(projectB.clientName))
        console.log(`test clone`, cloneProjectArr);
        setFilteredProjectArr(cloneProjectArr)
        return cloneProjectArr
    }
    const handlerRessetBtn = () => { setFilteredProjectArr(projectArr) }
    useEffect(() => {
        setFilteredProjectArr(projectArr)
    }, [projectArr])
    return (
        <>
            <div className='align-items-center container-md d-flex justify-content-between mt-1'>
                <Filters handlerSortProjects={handlerSortProjects} handlerRessetBtn={handlerRessetBtn} />
            </div>
            <div className=' mt-2 flex-column project_data_div overflow-y-scroll'>

                {filteredProjectArr.map(data => {


                return <div className='align-items-center border-bottom container justify-content-md-between mt-1 ps-3 row' key={data.id}>
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
