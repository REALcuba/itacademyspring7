import { type FiltersProps } from "../types/Types"
// import search from "../../assets/icons/search.svg"



const Filters: React.FC<FiltersProps> = ({ handlerSortProjects, handlerResetBtn, handlerSortByDateFilterBtn, handlerInputSearcValue }) => (

    <>
        <button className="btn btn-primary" onClick={handlerSortByDateFilterBtn}>Date</button>
        <button className="btn btn-primary" onClick={handlerSortProjects}>Order</button>
        <button className="btn btn-primary" onClick={handlerResetBtn}>Reset</button>
        <div className="d-flex align-items-md-center container position-relative">
            <input type="text" placeholder="Search..." className="searchInput rounded" onChange={handlerInputSearcValue} />
            {/* <img src={search} alt="" className="w-25" /> */}
        </div> 
    </>
)

export default Filters
