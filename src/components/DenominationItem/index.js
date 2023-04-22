import './index.css'

const Button = props => {
  const {buttonDetails, withdrawStatus} = props
  const {value} = buttonDetails
  const onChangeAmount = () => {
    withdrawStatus(value)
  }

  return (
    <li>
      <button type="button" className="button" onClick={onChangeAmount}>
        {value}
      </button>
    </li>
  )
}
export default Button
