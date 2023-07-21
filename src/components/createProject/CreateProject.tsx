import { type Project } from '../types/Types';
import "./styles.css"

type CreateProjectProps = {
    projectArr: Project[];
}

const CreateProject: React.FC<CreateProjectProps> = ({ projectArr }) => {

    console.log(projectArr);
    return (

        <div className=' mt-2 flex-column project_data_div'>

            {projectArr.map(data => {


                return <div className='align-items-center border-bottom container justify-content-md-between mt-1 ps-3 row' key={data.id}>
                    {/* <div > */}
                    {/* <div className='d-flex justify-content-between fst-italic flex-column m-2 '> */}
                    <div className='col-4'>Client:<span> {data.clientName}</span></div>
                    <div className='col-6'>Project:<span> {data.projectName}</span></div>
                    <div className='col-12'>Service:<span> {projectArr && data.service.join(', ')}</span></div>
                    <div className='col-3'>Página(s):<span> {data.totalPages}</span></div>
                    <div className='col-3'>Idiomas:<span> {data.totalLanguages}</span></div>
                    <div className='col-3'>Precio:<span> {data.totalPrice}</span></div>
                    <div className='col-3'>Fecha:<span> {data.date}</span></div>
                    {/* </div> */}

                    {/* </div> */}
                </div>
            })}

        </div>

    )
}

export default CreateProject
