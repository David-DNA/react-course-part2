export default (expenses) => {
    // We can re-write this more simply and we can immediately launch the test to make sure we did not break
    // anything

    //if (expenses.length === 0) {
    //    return 0;
    //} else {
    //    // expenses is an array of object, we can make it an array of numbers (amounts)
    //    // we can then reduce it to finally get the total sum
    //    return expenses
    //        .map((expense) => expense.amount)
    //        .reduce((sum, value) => sum + value, 0);
    //}
    
    return expenses
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum + value, 0);
};