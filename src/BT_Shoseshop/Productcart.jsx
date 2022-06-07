import React from "react";

export default function Productcart(props) {
    const { cart, onDelete } = props 
  return (
    <div className="modal" id="product-carts">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Giỏ Hàng</h4>
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
          </div>
          <div className="modal-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Mã sản phẩm</th>
                  <th>Tên sản phẩm</th>
                  <th style={{width: "120px"}}>Hình ảnh</th>
                  <th>Số lượng</th>
                  <th>Đơn giá</th>
                  <th>Thành tiền</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>
                        <img style={{width: "80%"}} src={item.image} alt={item.name} />
                      </td>
                      <td>{item.soLuong}</td>
                      <td>{item.price}</td>
                      <td>{item.price * item.soLuong}</td>
                      <td>
                        <button onClick={() => onDelete(item.id)} className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
