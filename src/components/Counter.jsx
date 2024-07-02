import { useState, useEffect } from "react"
import moment from 'moment'
import List from "./List"
export default function Counter({ setReady, ready, confeti, setConfeti }) {
    const datetime = '2024-07-02T08:01'
    const [showSecond, setShowSecond] = useState(true)
    const [showList, setShowList] = useState(true)


    const [remainTime, setRemainTime] = useState(moment.duration(moment(datetime).diff(moment())));

    useEffect(() => {
        const intervalId = setInterval(() => {
            const duration = moment.duration(moment(datetime).diff(moment()));
            setRemainTime(duration);

            if (duration.asMilliseconds() <= 0) {
                clearInterval(intervalId);
                if (confeti) {
                    setReady(true);
                }


            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [datetime]);

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
                <h2 className="card-title py-3 font-bold text-2xl">Left for <span className="text-gray-600">{'Regresar a Casa'}</span></h2></>}
            <div className="flex-col w-1/3">
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


            <div className="flex pt-5 w-full justify-between">
                <button className="btn text-sm  w-1/3 btn-active text-white btn-success">Add another counter</button>
                <button className="btn text-sm w-1/3 btn-active text-white btn-error">Delete this</button>
            </div>
            {showList && <List />}
        </div>
    )
}