import { useState, useEffect } from "react"
import moment from 'moment'
import List from "./List"
export default function Counter({ setValues, setReady, ready, confeti, setConfeti, values, state, setState, setIsSet }) {
    let actual = values.filter(v => v.id === state)[0] //actual object in Proccess
    const [showSecond, setShowSecond] = useState(true)
    const [showList, setShowList] = useState(true)


    const [remainTime, setRemainTime] = useState(moment.duration(moment(actual?.datetime).diff(moment())));

    useEffect(() => {
        const intervalId = setInterval(() => {
            const duration = moment.duration(moment(actual?.datetime).diff(moment()));
            setRemainTime(duration);

            if (duration.asMilliseconds() <= 0) {
                clearInterval(intervalId);
                setIsSet(false)
                setReady(true);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [actual]);
    const addTime = () => {
        setIsSet(true)


    }
    const deleteTime = (id, isAc = false) => {
        const deldata = values.filter(item => item.id !== id)
        const del = confirm('Do you want to delete this countdown?')
        if (!del) return;

        if (values.length === 1) {
            setValues(deldata);
            console.log('condtion1')
            setValues([]);
            setState('')
            setIsSet(true)
            setConfeti(false)
            setReady(false)
            return;
        }
        if (isAc) { //se aprieta el actual??

            setValues(values => values.filter(item => item.id !== id));

            let thebest = values.reduce((prev, curr) => {
                let diffPrev = Math.abs(new Date(prev.datetime) - new Date());
                let diffCurr = Math.abs(new Date(curr.datetime) - new Date());
                return (diffPrev < diffCurr) ? prev : curr;
            });
            setState(thebest.id);
            console.log(thebest.id)
            actual = values.filter(v => v.id === state)[0]

        } else {
            console.log('condtion3')
            setValues(deldata);

        }
    }
    return (
        <div className="w-full flex flex-col  items-start">

            {ready ? <><h1 className="text-4xl font-bold">{"HOME COMING!!"}</h1></> : <> <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                {remainTime.years() > 0 && <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": remainTime.years() }}></span>
                    </span>
                    years
                </div>}
                {remainTime.months() > 0 && <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": remainTime.months() }}></span>
                    </span>
                    months
                </div>}
                {remainTime.days() > 0 && <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": remainTime.days() }}></span>
                    </span>
                    days
                </div>}
                {remainTime.hours() > 0 && <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": remainTime.hours() }}></span>
                    </span>
                    hours
                </div>}
                {remainTime.minutes() > 0 && <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": remainTime.minutes() }}></span>
                    </span>
                    min
                </div>}
                {showSecond && <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": remainTime.seconds() }}></span>
                    </span>
                    sec
                </div>}
            </div >
                <h2 className="card-title py-3 font-bold text-2xl">Left for <span className="text-gray-600">{actual?.description}</span></h2></>}
            <div className="collapse bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-sm font-normal"> Tap to see options</div>
                <div className="collapse-content">
                    <div className="flex-col">
                        {!ready && <div className="form-control">
                            <label className="cursor-pointer gap-2 label">
                                <span className="text-sm label-text">Show seconds</span>
                                <input type="checkbox" checked={showSecond} onChange={() => setShowSecond(!showSecond)} className="checkbox" />
                            </label>
                        </div>}
                        <div className="form-control">
                            <label className="cursor-pointer gap-2 label">
                                <span className="text-sm label-text">Show List</span>
                                <input type="checkbox" checked={showList} onChange={() => setShowList(!showList)} className="checkbox" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="cursor-pointer gap-2 label">
                                <span className="text-sm label-text">No Confetti!</span>
                                <input type="checkbox" checked={confeti} onChange={() => setConfeti(!confeti)} className="checkbox" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>



            <div className="flex pt-5 w-full justify-center gap-2">
                <button onClick={addTime} className="btn text-sm  w-1/3 btn-active text-white btn-success"><span className="material-symbols-outlined">
                    add
                </span></button>
                <button className="btn text-sm w-1/3 btn-active text-white btn-info"><span className="material-symbols-outlined">
                    edit
                </span></button>
                <button onClick={() => deleteTime(state, true)} className="btn text-sm w-1/3 btn-active text-white btn-error"><span className="material-symbols-outlined">
                    delete
                </span></button>
            </div>
            {showList && <List deleteTime={deleteTime} setValues={setValues} values={values} state={state} />}
        </div>
    )
}