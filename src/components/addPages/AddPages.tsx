import React, { ChangeEvent } from 'react'
import { InfoPagesBtn, InfoLanguagesBtn } from '../infoBtn/InfoBtn'

type AddPagesProps = {
    isChecked: boolean,
    valuePages: number,
    valueLanguages: number,
    index: number,
    handleInputPagesChange: (e: ChangeEvent<HTMLInputElement>, position: number) => void,
    handleInputLanguagesChange: (e: ChangeEvent<HTMLInputElement>, position: number) => void,
    handleAddPageBtn: (position: number) => void,
    handleSubstractPageBtn: (position: number) => void,
    handleAddLanguageBtn: (position: number) => void,
    handleSubstractLanguageBtn: (position: number) => void,

}
const AddPages: React.FC<AddPagesProps> = ({
    isChecked,
    valuePages,
    valueLanguages,
    index,
    handleInputPagesChange,
    handleInputLanguagesChange,
    handleAddPageBtn,
    handleSubstractPageBtn,
    handleAddLanguageBtn,
    handleSubstractLanguageBtn }) => {
    const className = isChecked !== true ? "d-none" : "border border-2 p-4 rounded-2 "

    console.log(`valuepage:${valuePages}`);

    return (

        <div className={className}>

            <div className='d-flex justify-content-between'>
                <span>Número de páginas:</span>
                <button type="button" className='btn btn-primary btn-sm' onClick={() => handleAddPageBtn(index)}>+</button>
                <input type="text" className='w-25' value={valuePages} onChange={(e) => handleInputPagesChange(e, index)} />
                <button type="button" className='btn btn-primary btn-sm' onClick={() => handleSubstractPageBtn(index)}>-</button>
                <InfoPagesBtn pages={valuePages} />
            </div>

            <div className='d-flex justify-content-between'>
                <span>Número de idiomas:</span>
                <button type="button" className='btn btn-primary btn-sm' onClick={() => handleAddLanguageBtn(index)}>+</button>
                <input type="text" value={valueLanguages} className='w-25' onChange={(e) => handleInputLanguagesChange(e, index)} />
                <button type="button" className='btn btn-primary btn-sm' onClick={() => handleSubstractLanguageBtn(index)}>-</button>
                <InfoLanguagesBtn languages={valueLanguages} />
            </div>
        </div >

    )
}

export default AddPages
