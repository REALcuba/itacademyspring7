// import React from 'react'
// import { useState } from "react"
// import { type Project } from "../types/Types"
type FiltersProps = {
    handlerSortProjects: () => void,
    handlerRessetBtn:()=>void
}

const Filters: React.FC<FiltersProps> = ({ handlerSortProjects, handlerRessetBtn }) => {
    

    return (
        <>
            <button className="btn btn-primary">Day</button>
            <button className="btn btn-primary" onClick={handlerSortProjects}>Order</button>
            <button className="btn btn-primary" onClick={handlerRessetBtn}>Reset</button>
        </>
    )
}

export default Filters
