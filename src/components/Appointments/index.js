// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'
import AppointmentItem from '../AppointmentItem'

class Appiontments extends Component {
  state = {
    title: '',
    Date: '',
    listE: [],
    initialList: [],
    isStarred: true,
  }

  starItems = () => {
    const {isStarred, initialList} = this.state
    if (isStarred === true) {
      this.setState(previous => ({
        listE: previous.listE.filter(each => each.isImportant === true),
        isStarred: false,
      }))
    } else this.setState({listE: initialList, isStarred: true})
  }
  change = id => {
    this.setState(previous => ({
      listE: previous.listE.map(each => {
        if (each.id === id) {
          return {...each, isImportant: !each.isImportant}
        }
        return each
      }),
      initialList: previous.initialList.map(eachE => {
        if (eachE.id === id) {
          return {...eachE, isImportant: !eachE.isImportant}
        }
        return eachE
      }),
    }))
  }

  submitE = event => {
    event.preventDefault()
    const {title, Date} = this.state
    const newObject = {id: uuidv4(), title, Date, isImportant: false}

    this.setState(previous => ({
      listE: [...previous.listE, newObject],
      title: '',
      Date: '',
      initialList: [...previous.initialList, newObject],
    }))
  }

  addTitle = event => {
    this.setState({title: event.target.value})
  }
  updateDate = event => {
    this.setState({Date: event.target.value})
  }

  render() {
    const {title, Date, listE} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <div className="top-section">
            <div className="details">
              <h1>Add Appointment</h1>
              <form className="form" onSubmit={this.submitE}>
                <label for="title">Title</label>
                <input
                  id="title"
                  value={title}
                  onChange={this.addTitle}
                  className="title"
                  placeholder="Title"
                />
                <label for="dateE">Date</label>
                <input
                  type="date"
                  onChange={this.updateDate}
                  className="date"
                  value={Date}
                  id="dateE"
                />
                <button type="submit" className="btn">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image"
            />
          </div>
          <hr />
          <div className="bottom-scetion">
            <div className="c1">
              <h1>Appointments</h1>
              <button className="btn2" onClick={this.starItems}>
                Starred
              </button>
            </div>
            <ul className="ul">
              {listE.map(each => (
                <AppointmentItem
                  key={each.id}
                  objectE={each}
                  makeimportant={this.change}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Appiontments
