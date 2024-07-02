import { useState } from "react";
import Input from "./Input";

export default function Setting({ setIsSet, saveCountDown, values }) {
    const [description, setDescription] = useState('')
    const [datetime, setDateTime] = useState('')
    const [err, setErr] = useState('')
    const [errdate, setErrdate] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        let validate = true;
        setTimeout(() => {
            setErr(''); setErrdate('')
        }, 3000)
        if (!datetime || isNaN(new Date(datetime).getTime())) {
            setErrdate('Please enter a valid date and time.'); validate = false
        }
        if (description === '') {
            setErr(' Please enter a description'); validate = false

        }
        if (validate) {
            setIsSet(false)
            const cnt = {
                [description]: description,
                [datetime]: datetime
            }
            saveCountDown(cnt)
        }

    }

    return (
        <>
            <h2 className="card-title pb-3 font-bold text-2xl">Setting the counter</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    type='input'
                    value={description}
                    label='Description of the date'
                    id='describe' ph="ex: Homecoming"
                    onChange={setDescription}
                    err={err}
                />
                <Input
                    type='datetime-local'
                    value={datetime}
                    label='Select date and time:'
                    id='datetime'
                    onChange={setDateTime}
                    err={errdate}

                />



                <Input type='btn' label='Set countdown' id='btn' />
            </form>
        </>
    )
}