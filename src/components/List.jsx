import moment from "moment"
export default function List({ values, state, deleteTime }) {
    return (
        <>
            <div class="border-b-2 py-4 w-full border-gray-700 my-4"></div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Play</th>
                            <th>Date and Time</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {values.filter(v => v.id !== state)?.map(val => (
                            <tr key={val.id}>

                                <th><button><span class="material-symbols-outlined">
                                    play_circle
                                </span></button></th>
                                <td>{moment(val.datetime).format('MMMM Do, YYYY [at] HH:mm')
                                }</td>
                                <td className="flex gap-3"><button><span class="material-symbols-outlined">
                                    edit
                                </span></button>
                                    <button onClick={() => deleteTime(val.id)}><span className="material-symbols-outlined">
                                        delete
                                    </span></button>
                                </td>

                            </tr>)
                        )}
                    </tbody>
                </table>
            </div >
        </>
    )
}