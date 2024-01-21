import './index.css'

const EventItem = props => {
  const {Event, statusChange} = props

  const {id, imageUrl, name, location} = Event

  const registrationProcess = () => {
    statusChange(id)
  }

  return (
    <li className="list-item">
      <button
        type="button"
        className="button-style"
        onClick={registrationProcess}
      >
        <img src={imageUrl} alt="event" className="event-image" />
      </button>
      <p className="event-heading">{name}</p>
      <p className="event-para">{location}</p>
    </li>
  )
}

export default EventItem
