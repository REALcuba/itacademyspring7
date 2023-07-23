import { type FiltersProps } from "../types/Types"

const Filters: React.FC<FiltersProps> = ({ handlerSortProjects, handlerRessetBtn, handlerSortByDateFilterBtn }) => (
    <>
        <button className="btn btn-primary" onClick={handlerSortByDateFilterBtn}>Date</button>
        <button className="btn btn-primary" onClick={handlerSortProjects}>Order</button>
        <button className="btn btn-primary" onClick={handlerRessetBtn}>Reset</button>
    </>
)

export default Filters
