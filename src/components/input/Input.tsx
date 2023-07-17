
type inputProps = { handleOnChange: (position: number, e: React.ChangeEvent<HTMLInputElement>) => void, index: number }

const Input: React.FC<inputProps> = (
  { handleOnChange, index }) => <input
    type="checkbox"
    onChange={(e) => handleOnChange(index, e)}

  />
export default Input
