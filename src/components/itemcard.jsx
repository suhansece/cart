const Itemcard = (props) => {
  const {data}=props
  return (
    <div className='item-card'>
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/of4uydxfme5q5yqfoq1t"/>
        <div>
          <h1>data</h1>
        </div>
        <div>
          <p>Rs:120/-</p>
        </div>
        <div>
          <p>Available Count : 10pcs</p>
        </div>
        <button>Add to Cart</button>
    </div>
  )
}

export default Itemcard
