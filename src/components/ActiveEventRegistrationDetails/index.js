import './index.css'

const Status = {
  register: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registerClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {newStatus} = props

  let rendermsg

  switch (newStatus) {
    case Status.register:
      rendermsg = (
        <div className="Registration-details">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png "
            alt="yet to register"
            className="register-image"
          />
          <p className="register-para">
            A live performance brings so much to your relationship with
            dance.Seeing dance live can often make you fall totally in love with
            this beautiful art form
          </p>
          <button type="button" className="button">
            Register Here
          </button>
        </div>
      )

      break

    case Status.registered:
      rendermsg = (
        <div className="registered-details ">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
            className="registered-image"
          />
          <h1 className="registered-heading">
            you have already registered for the event
          </h1>
        </div>
      )
      break
    case Status.registerClosed:
      rendermsg = (
        <div className="registered-details">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt=" registrations closed"
            className="closed-registration"
          />
          <h1 className="registered-heading">Registrations are closed Now!</h1>
          <p className="register-para">
            Stay tuned. We will reopen the registration soon!
          </p>
        </div>
      )
      break
    default:
      rendermsg = (
        <div>
          <p className="register-para">
            Click on an event, to view its registration details
          </p>
        </div>
      )
      break
  }
  return <div className="register-details">{rendermsg}</div>
}

export default ActiveEventRegistrationDetails
