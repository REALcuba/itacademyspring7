
type inputProps = { handleOnChange: (position: number) => void, index: number, isChecked: boolean, checkedArr: boolean[] }

const Input: React.FC<inputProps> = (
  { handleOnChange, index }) => <input
    type="checkbox"
    onChange={() => handleOnChange(index)} />

export default Input
