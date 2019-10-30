import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
// We need the two selectors , the one to get the filtered invoices, the other to get the total
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

// We only have two props we will pass down here
// The total of expenses and the number of expenses
// We can just destructure the prop object to get these two properties
export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {

    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
        </div>
    );

};

// This gives us access to the store and get the expenses and the filters values from there
// We compute the props we send to the connected component by setting the appropriate object
const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);