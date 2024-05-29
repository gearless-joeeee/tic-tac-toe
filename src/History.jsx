function History({history, onChange}){

  return (
    <div className="history-wrapper">
      <h4 className="history-title">History</h4>
      <ul className="history-list">{history.map((item,index) => {
        return  <li 
        className="history-item"
        onClick={() => onChange(index)}
        key={item}
        >
          step {index + 1}
        </li>
      })}</ul>

    </div>
  )
}

export default History