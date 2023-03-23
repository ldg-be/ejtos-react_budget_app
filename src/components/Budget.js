import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { remaining, budget, dispatch,currency } = useContext(AppContext);
    const changeBudget = (amount) => {
        if(amount > 20000) {
            alert("The value cannot exceed £20 000");
            return;
        }
        if(budget-amount > remaining  ) {
            alert("The expenses exceed the new budget");
            return;
        }
        dispatch({
            type: 'BUDGET_CNG',
            payload: parseInt(amount),
        });
        };

    return (
        <div className='alert alert-secondary'>
            <span >Budget: {currency}</span><input
                        
                        required='required'
                        type='number'
                        id='budget'
                        step='10'
                        max='20000'
                        value={budget}
                        onChange={(event) => changeBudget(event.target.value)}>
                        </input>
        </div>
    );
};
export default Budget;
