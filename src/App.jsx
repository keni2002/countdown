import { useState } from 'react'
import Setting from './components/Setting';
import Counter from './components/Counter';
import Confetti from 'react-confetti';
function App() {
  const [values, setValues] = useState([{
    id: '',
    description: '',
    datetime: ''
  },])
  const saveCountDown = (countdown) => {
    //best way to edit
    if (countdown.id) {
      // const gastoUpdated = gastos.map(
      //   g => g.id === gasto.id ? gasto : g
      // )
      // setGastos(gastoUpdated);
    } else {
      countdown.id = crypto.randomUUID();
      setGastos([...values, countdown])
    }

  }

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
