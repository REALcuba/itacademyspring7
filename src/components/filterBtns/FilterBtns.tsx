// import React from 'react'
// import { useState } from "react"
// import { type Project } from "../types/Types"
type FiltersProps = {
    handlerSortProjects: () => void
}

const Filters: React.FC<FiltersProps> = ({ handlerSortProjects }) => {
    // const [filterdProjectArr, setFilterdProjectArr] = useState(projectArr)


    // const handlerSortProjects = (projectArr: Project[]) => {
    //     const cloneProjectArr = [...projectArr]

    //     cloneProjectArr.sort((projectA, projectB) => projectA.clientName.localeCompare(projectB.clientName))
    //     console.log(cloneProjectArr);
    //     setFilterdProjectArr(cloneProjectArr)
    //     return cloneProjectArr
    // }

    return (
        <>
            <button className="btn btn-primary">Day</button>
            <button className="btn btn-primary" onClick={handlerSortProjects}>Order</button>
            <button className="btn btn-primary">Reset</button>
        </>
    )
}

export default Filters
