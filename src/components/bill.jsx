import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useContext, useEffect } from "react";
import { Context } from "../App";
import { useNavigate } from "react-router-dom";
import cookie from "js-cookie";

const Bill = () => {
  const { bill,setUser } = useContext(Context);
  const data =bill
  const navigate = useNavigate();
  const generateInvoice =async () => {
    const Component = document.querySelector(".bill");
      await html2canvas(Component).then((canvas) => {
      const componentWidth = Component.offsetWidth;
      const componentHeight = Component.offsetHeight;

      const orientation = componentWidth >= componentHeight ? "l" : "p";

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation,
        unit: "px",
      });

      pdf.internal.pageSize.width = componentWidth;
      pdf.internal.pageSize.height = componentHeight;

      pdf.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      pdf.save("download.pdf");
      cookie.remove("token");
        setUser(null);
        navigate("/login");
    });
  };
  useEffect(() => {
    generateInvoice();
  }, []);

  return (
    <div className="bill">
      <div className="bill-header">
        <h1>------Invoice------</h1>
        <p>
          Date:{data.date.slice(0, 10)} {data.date.slice(11, 19)}
        </p>
        <p>No :{data.billNo} </p>
      </div>
      <div className="bill-body">
        <p>Name:{data.name}</p>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.items.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>₹{item.price}</td>
                <td className="total-td">{item.noOfItems}</td>
                <td className="total-td">₹{item.noOfItems * item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="total">Total: ₹{data.total}</p>
      </div>
      
    </div>
  );
};

export default Bill;
