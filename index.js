// You are given an array representing a series of transactions in a small business.
// Each transaction is an array containing the transaction type ("income" or "expense") and the amount.
const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

/*****************************************************************
Part 1: Transaction Analysis

Task 1) Create a new array containing only the income transactions.
       Output 1) [["income", 1000], ["income", 1500], ["income", 700]]

Task 2) Create a new array containing only the expense transactions.
       Output 2) [["expense", 500], ["expense", 300]]

******************************************************************/

/*****************************************************************
Part 2: Financial Summary

Task 3) Calculate the total income and return it.
       Output 3) 3200

Task 4) Calculate the total expenses and return it.
       Output 4) 800

******************************************************************/

/*****************************************************************
Part 3: Net Analysis

Task 5) Calculate the net total (total income - total expenses) and return it.
       Output 5) 2400

Task 6) Identify and create a new array with transactions (both incomes and expenses) above $500.
       Output 6) [["income", 1000], ["income", 1500]]

******************************************************************/

// Note: Use appropriate JavaScript array iteration methods such as filter, reduce, etc., to achieve the desired output for each task.
const Result = transactions.filter(
  (transaction) => transaction[0] === "income"
);
console.log("Only Incomes Array: ", Result);

const Result1 = transactions.filter(
  (transaction) => transaction[0] == "expense"
);
console.log("Only Expenses Array: ", Result1);

const Result2 = transactions.reduce((total, transaction) => {
  if (transaction[0] === "income") {
    return total + transaction[1];
  }
  return total;
}, 0);
console.log("Total Income: " + Result2);

const Result3 = transactions.reduce((total, transaction) => {
  if (transaction[0] === "expense") {
    return total + transaction[1];
  }
  return total;
}, 0);
console.log("Total Income: " + Result3);

const Final = Result2 - Result3;
console.log("Net Total: " + Final);

const Result4 = transactions.filter((transaction) => transaction[1] > 500);
console.log("Output 6:", Result4);
