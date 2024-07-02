import { useState } from 'react'
import Setting from './components/Setting';
import Counter from './components/Counter';
import Confetti from 'react-confetti';
function App() {
  const [values, setValues] = useState({
    description: '',
    datetime: ''
  })
  const [isSet, setIsSet] = useState(true);
  const [ready, setReady] = useState(false);
  return (
    <>
      {/* <Confetti />  */}
      <div className='flex justify-center items-center md:h-screen'>
        <div className="card bg-base-100 w-auto shadow-xl">
          <div className="card-body">

            {isSet ?
              (<Setting setValues={setValues}
                values={values}
                setIsSet={setIsSet} />)
              : (<Counter />)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
