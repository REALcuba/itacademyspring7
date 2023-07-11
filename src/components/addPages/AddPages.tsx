import React, { ChangeEvent } from 'react'

type AddPagesProps = { isChecked: boolean, handleInputPagesChange: (e: ChangeEvent<HTMLInputElement>, position: number) => void, handleInputLanguagesChange: (e: ChangeEvent<HTMLInputElement>, position: number) => void, valuePages: number, valueLanguages: number, index: number }
const AddPages: React.FC<AddPagesProps> = ({ isChecked, valuePages, valueLanguages, handleInputPagesChange, index, handleInputLanguagesChange }) => {


    const className = isChecked !== true ? "d-none" : "border border-2 border-black p-4 rounded-2 "

    return (

        <div className={className}>

            <div>
                <span>Número de páginas</span>
                <input type="number" name="" id="" value={valuePages} onChange={(e) => handleInputPagesChange(e, index)} />
            </div>

            <div>
                <span>Número de idiomas</span>
                <input type="number" value={valueLanguages} name="" id="" onChange={(e) => handleInputLanguagesChange(e, index)} />
            </div>
        </div >

    )
}

export default AddPages
