import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"

const Mode = () => {
  const [ClockMode, SetClockMode] = useState("")
  const [Limit, SetLimit] = useState("")
  const [Format, SetFormat] = useState("")
  const hostName = process.env.REACT_APP_HOST_NAME

  useEffect(() => {
    document.title = "Mode"
  }, [])

  return (
    <div className="Div-container">
      <form
        onSubmit={(event) => {
          event.preventDefault()
          const path = `${hostName}mode?mode=${ClockMode || 1}&limit=${Limit || 60}`
          console.log(path);
          axios
            .post(path)
            .then((val) => {
              console.log(val)
            })
            .catch((er) => {
              console.log(er)
            })
        }}
        method="post"
        className="formm">
        <h4>Change clock mode</h4>
        <select onChange={(event) => SetClockMode(event.target.value)} className="selectt">
          <option value="1">Clock</option>
          <option value="2">Counter</option>
          <option value="3">Count down</option>
        </select>
        <div className="limit-input">
          <input type="text" className="inputt" placeholder="Limit number" onChange={(event) => SetLimit(event.target.value)} />
        </div>

        <br />
        <button className="button" type="submit">
          Change
        </button>
      </form>

      <br />
      <form
        onSubmit={(event) => {
          event.preventDefault()
          axios
            .post(`${hostName}timeformat?format=${Format || 24}`)
            .then((val) => {
              console.log(val)
            })
            .catch((er) => {
              console.log(er)
            })
        }}
        method="post"
        className="formm">
        <h4>Change clock format</h4>
        <select onChange={(event) => SetFormat(event.target.value)} className="selectt" required>
          <option value="24">format 24 hour</option>
          <option value="12">format 12 hour</option>
        </select>
        <button className="button" type="submit">
          Change
        </button>
      </form>
    </div>
  )
}

export default Mode
