import { type Project } from '../types/Types';

type CreateProjectProps = {
    project?: Project;
}

const CreateProject: React.FC<CreateProjectProps> = ({ project }) => {

    console.log(project)

    return (
        <>
            <aside>
                {project && <div className='container border border-2' key={project.id}>
                    <div >
                        <div className='d-flex justify-content-between flex-column'>
                            <span>Client Name : {project.clientName}</span>
                            <span>Project Name : {project.projectName}</span>
                            <span>Service Name : {project.service}</span>
                            <span>Total de página(s) : {project.totalPages}</span>
                            <span>Total de idiomas : {project.totalLanguages}</span>
                        </div>

                    </div>
                </div>}
            </aside>
        </>
    )
}

export default CreateProject
