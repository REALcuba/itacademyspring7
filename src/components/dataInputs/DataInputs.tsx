// import React, { useState } from 'react'
// import { ProjectData } from '../../assets/ProjectData'

import { ChangeEvent } from "react";

// import { type Project } from '../types/Types'
type DataInputsProps = {
    handlerGetProjectName: (e: ChangeEvent<HTMLInputElement>) => void,
    handlerGetClient: (e: ChangeEvent<HTMLInputElement>) => void,
    getProjectName: string,
    getClient: string,
};


const DataInputs: React.FC<DataInputsProps> = ({ handlerGetProjectName, handlerGetClient, getProjectName, getClient }) => {
    // const [getProjectName, setProyectName] = useState("")
    // const [getClient, setClient] = useState("")

    // const handlerGetProjectName = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setProyectName(e.target.value)
    //     console.log(e.target.value)

    // }
    // const handlerGetClient = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setClient(e.target.value)
    //     console.log(e.target.value)

    // }
    // const handlerGetProjectData = (ProjectData: Project) => {
    //     ProjectData.id = crypto.randomUUID()
    //     ProjectData.projectName = getProjectName;
    //     ProjectData.clientName = getClient
    //     ProjectData.service ?= 
    // }
    // handlerGetProjectData(ProjectData)
    return (
        <div className="d-flex flex-column" >
            Proyect Name: <input type="text" onChange={(e) => handlerGetProjectName(e)} value={getProjectName} />
            Client:<input type="text" onChange={(e) => handlerGetClient(e)} value={getClient} />
        </div>
    )
}

export default DataInputs
