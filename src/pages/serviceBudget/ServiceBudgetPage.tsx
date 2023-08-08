// import { useNavigate } from "react-router-dom"

import { useLocation } from "react-router-dom";
import { Project } from "../../components/types/Types";

const ServiceBudgetPage = () => {

    const location = useLocation();
    const { values } = location.state || [];

    return (
        <div className="d-flex border">
            {values.map((data: Project) => (


                <div className='align-items-center container justify-content-md-between mt-1 m-0 ps-3 row test-project' key={data.id} >
                    <div className='col-6 border'>Client:<span> {data.clientName}</span></div>
                    <div className='col-6 border'>Project:<span> {data.projectName}</span></div>
                    <div className='col-12 border'>Service:<span> {data.service.join(', ')}</span></div>
                    <div className='col-3 border'>Página(s):<span> {data.totalPages}</span></div>
                    <div className='col-3 border'>Idiomas:<span> {data.totalLanguages}</span></div>
                    <div className='col-3 border'>Precio:<span> {data.totalPrice}</span></div>
                    <div className='col-3 border'>Fecha:<span> {data.date}</span></div>

                </div>
            )
            )}
        </div>)
}

export default ServiceBudgetPage
