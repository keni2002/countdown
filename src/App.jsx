import { useState } from 'react'
import Setting from './components/Setting';
import Counter from './components/Counter';
import Confetti from 'react-confetti';
function App() {
  const [values, setValues] = useState([]) //Array of all clocks
  const [state, setState] = useState('') //Here's datetimeRemain of clock that's running
  const [isSet, setIsSet] = useState(true);
  const [ready, setReady] = useState(false);
  const [confeti, setConfeti] = useState(true)



  const saveCountDown = (countdown) => {
    //best way to edit
    if (countdown.id) {

    } else {
      countdown.id = crypto.randomUUID();
      setValues([...values, countdown])
      return countdown;
    }

  }


  return (
    <>
      {ready && confeti && <Confetti />}
      <div className='flex justify-center items-center md:h-screen'>
        <div className="card bg-base-100 w-auto shadow-xl">
          <div className="card-body">

            {isSet ?
              (<Setting
                saveCountDown={saveCountDown}
                state={state}
                setState={setState}
                values={values}
                setIsSet={setIsSet} />)
              : (<Counter

                setValues={setValues}
                setIsSet={setIsSet}
                state={state}
                setState={setState}
                values={values}
                setReady={setReady}
                ready={ready}
                confeti={confeti}
                setConfeti={setConfeti} />)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
