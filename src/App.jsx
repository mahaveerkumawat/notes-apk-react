import React from 'react';
import { useState } from 'react';

const App = () => {
  const [notes, setnotes] = useState([

  ])

  const getformdata = (event) => {
    event.preventDefault()

    const title = event.target.inputbox.value;
    const details = event.target.textarea.value;
    if (title != '' && details != '') {
      console.log(title, details)
      setnotes([
        ...notes,
        {
          title, details, timestamp: new Date().getTime()
        }
      ])
    }
    event.target.reset()
    event.target.inputbox.focus()
  }
  return (
    <div className='container'>
      <div className="row">
        <div className="col-4">
          <div className="container mt-5">
            <h1 className="mb-4">Simple Form</h1>
            <form onSubmit={getformdata}>
              <div className="mb-3">
                <label htmlFor="inputBox" className="form-label">
                  Input Box
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="inputBox"
                  placeholder="Enter text here"
                  name='inputbox'
                />
              </div>
              <div className="mb-3">
                <label htmlFor="textArea" className="form-label">
                  Text Area
                </label>
                <textarea
                  required
                  className="form-control"
                  id="textArea"
                  rows={4}
                  placeholder="Enter more details here"
                  name='textarea'
                  defaultValue={""}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>

        </div>
        <div className="col-8">
          <div className="row mt-5">
            {
              [...notes].reverse().map(
                (notes, index) => {
                  console.log("notes", notes)
                  return <div className="col-4 mt-2 mb-2" key={index}>
                    <div className="card shadow border border-success-300 " style={{ height: '300px' }}>
                      <h3 className='p-2'>{notes.title}</h3>
                      <hr />
                      <p name="" className='form-control' style={{ height: '100%' }} id="">{notes.details}</p>

                      <span>{timeAgo(notes.timestamp)}</span>
                    </div>
                  </div>
                }
              )
            }



            {/* <div className="col-4">
              <div className="card shadow border border-success-300" style={{ height: '300px' }}>
                <h3>title of notes</h3>
                <hr />
                <textarea name="" className='form-control' style={{ height: '100%' }} id=""></textarea>
              </div>
            </div> */}
          </div>

        </div>
      </div>


    </div>
  );
}

export default App;



function timeAgo(timestamp) {
  const now = Date.now();
  const diff = now - timestamp;

  if (diff < 0) {
    return "In the future";
  }

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  let result = "";

  if (days > 0) {
    result += `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    result += `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (minutes > 0) {
    result += `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
    result += `${seconds} second${seconds > 1 ? 's' : ''} ago`;
  }

  return result;
}
