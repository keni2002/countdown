import { useState } from 'react'


function App() {


  return (
    <div className='flex justify-center items-center md:h-screen'>
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>

          <form>

            <div className='flex justify-between items-center'>
              <label className='' htmlFor="datetime">Insert DateTime</label>
              <input className='p-2 border-2 rounded-md' id='datetime' type="datetime-local" />
            </div>
            <div className="card-actions justify-end pt-3">
              <button className="btn btn-primary">Buy Now</button>
            </div>

          </form>


        </div>
      </div>
    </div>




  )
}

export default App
