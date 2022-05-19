import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from './State/index';

const Shop = () => {
  const dispatch = useDispatch();
  const {WithdrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch);
  return (
    <div>

<h2>Deposite / Withdraw Money</h2>
{/* <button type="button" className="btn btn-danger mx-2" onClick={()=>{dispatch(actionCreators.WithdrawMoney(500))}}>-</button>
Update Your Balance
<button type="button" className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(500))}}>+</button> */}

<button type="button" className="btn btn-danger mx-2" onClick={()=>{WithdrawMoney(500)}}>-</button>
Update Your Balance
<button type="button" className="btn btn-primary mx-2" onClick={()=>{depositMoney(500)}}>+</button>


    </div>
  )
}

export default Shop