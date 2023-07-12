import React, { ChangeEvent } from 'react'

type AddPagesProps = {
    isChecked: boolean,
    handleInputPagesChange: (e: ChangeEvent<HTMLInputElement>, position: number) => void,
    handleInputLanguagesChange: (e: ChangeEvent<HTMLInputElement>, position: number) => void,
    valuePages: number,
    valueLanguages: number,
    index: number,
    handleAddPageBtn: (position: number) => void,
    handleSubstractPageBtn: (position: number) => void,
    handleAddLanguageBtn: (position: number) => void,
    handleSubstractLanguageBtn: (position: number) => void,
    // pagesArr: number[],
    // languagesArr: number[]
}
const AddPages: React.FC<AddPagesProps> = ({ isChecked, valuePages, valueLanguages, handleInputPagesChange, index, handleInputLanguagesChange, handleAddPageBtn, handleSubstractPageBtn, handleAddLanguageBtn, handleSubstractLanguageBtn }) => {
    const className = isChecked !== true ? "d-none" : "border border-2 border-black p-4 rounded-2 "


    return (

        <div className={className}>

            <div>
                <span>Número de páginas</span>
                <button type="button" className='btn btn-primary' onClick={() => handleAddPageBtn(index)}>+</button>
                <input type="text" name="" id="" value={valuePages} onChange={(e) => handleInputPagesChange(e, index)} />
                <button type="button" className='btn btn-primary' onClick={() => handleSubstractPageBtn(index)}>-</button>
            </div>

            <div>
                <span>Número de idiomas</span>
                <button type="button" className='btn btn-primary' onClick={() => handleAddLanguageBtn(index)}>+</button>
                <input type="text" value={valueLanguages} name="" id="" onChange={(e) => handleInputLanguagesChange(e, index)} />
                <button type="button" className='btn btn-primary' onClick={() => handleSubstractLanguageBtn(index)}>-</button>

            </div>
        </div >

    )
}

export default AddPages
