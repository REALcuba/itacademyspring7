import { ChangeEvent, useState } from 'react'

type AddPagesProps = { isChecked: boolean }
const AddPages: React.FC<AddPagesProps> = ({ isChecked }) => {
    const [pages, setPages] = useState(1)
    // const [className, setClassName] = useState("d-none")
    const [languages, setLanguages] = useState(1);


    const className = !isChecked  ? "d-none" : "border border-2 border-black p-4 rounded-2 "
    
    // if (isChecked) {
    //     setClassName("border border-2 border-black p-4 rounded-2 ")
    // }
    const handlePagesChange = (event: ChangeEvent<HTMLInputElement>): void => {
        // if (event.target.value) {
        //     event.target.value.toString()
        //     alert('el campo no puede estar vacio')
        // }
        event.preventDefault()
        setPages(parseInt(event.target.value));
        console.log(pages);
        // return pages
    };

    const handleLanguagesChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setLanguages(parseInt(event.target.value));
        console.log(parseInt(event.target.value));
    };
    return (

        <div className={className}>

            <div>
                <span>Número de páginas</span>
                <input type="number" value={pages} name="" id="" onChange={handlePagesChange} />
            </div>

            <div>
                <span>Número de idiomas</span>
                <input type="number" value={languages} name="" id="" onChange={handleLanguagesChange} />
            </div>
        </div >

    )
}

export default AddPages




// const totalPrice = pages * 30;




