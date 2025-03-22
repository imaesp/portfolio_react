import './DisplayCard.scss'

function DisplayCard({Image, Description, Id, activeElement}) {
  return (
    <div className={`card-container ${activeElement === Id ? "active" : ""}`}>
        <div className='image-container'>
            <img src={Image} alt="" />  
        </div>
        <div className='text-container'>
            <p>{Description}</p>
        </div>
    </div>
  )
}

export default DisplayCard