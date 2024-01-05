import Cart from "./cart"
import Itemcard from "./itemcard"

const Body = () => {
  return (
    <div className="body">
        <div className="items">
        <h1>Item List</h1>
      <div className="meanu-list">
        <Itemcard/>
        <Itemcard/>
      </div>
        </div>
      <Cart/>
    </div>
  )
}

export default Body
