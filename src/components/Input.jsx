export default function Input({ type, id, label, ph, value, onChange, err }) {
    return (
        <>
            {type != 'btn' ?
                (<div>
                    <label className='font-bold' htmlFor={id}>{label}</label>
                    <input value={value} className='w-full  p-2 border-2 rounded-md' placeholder={ph} id={id} type={type} onChange={(e) => onChange(e.target.value)} />
                    <p className="pl-3 text-red-800">{err}</p>
                    <div className="mb-3"></div>
                </div>) :
                (
                    <div className="card-actions justify-end pt-5">
                        <button className="px-14 btn btn-primary">{label}</button>
                    </div>
                )

            }
        </>
    )
}