function Stat({value, name}) {
    return (
        <div className="">
            <h4 className="font-sans font-bold text-blue-100">{value}</h4>
            <p className="font-sans text-xs tracking-widest text-blue-200">{name}</p>
        </div>
    )
}

export default Stat
