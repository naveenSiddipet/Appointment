// Write your code here
import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {key, objectE, makeimportant} = props
  const {title, Date, id, isImportant} = objectE
  const dateformat = format(new Date(Date), 'dd MMMM yyyy,EEEE')

  const important = () => {
    makeimportant(id)
  }
  const star = isImportant
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="li" id={key}>
      <div className="text">
        <p className="p1">{title}</p>
        <p className="p2">Date: {dateformat}</p>
      </div>
      <button onClick={important} data-testid="star" className="btnn">
        <img src={star} className="img" alt="star" />
      </button>
    </li>
  )
}
export default AppointmentItem
