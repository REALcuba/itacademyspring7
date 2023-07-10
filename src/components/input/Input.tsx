// import { useState } from "react"

// import { ChangeEvent } from "react"
// import AddPages from "../addPages/AddPages"


type inputProps = { handleOnChange: (position: number) => void, index: number, isChecked: boolean, checkedArr: boolean[] }
const Input: React.FC<inputProps> = ({ handleOnChange, index }) => {
// console.log(isChecked);
// checkedArr.forEach(currentState => {
//   if (currentState === true) {
//     console.log("testing");
//     return (
//       <>
//         <input type="checkbox" onChange={(e) => handleOnChange(e, index)} />

  //         <AddPages isChecked={isChecked} />
  //       </>)
  //   } else {
  //     console.log('test fail');
  //   }
  // })
  // if (index === e)
  return (
    <>
      <input type="checkbox" onChange={() => handleOnChange(index)} />
      {/* {isChecked && < AddPages isChecked={isChecked} />}   */}

    </>
  )
}

export default Input
