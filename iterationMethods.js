const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

// 1) Write a `filterIncomeTransactions` function that returns a new array containing only the income transactions.
function filterIncomeTransactions(transactions) {
  // write your code here...
  return transactions.filter((value, index, array) => value[0] === "income");
}

// 2) Write a `filterExpenseTransactions` function that return a new array containing only the expense transactions.
function filterExpenseTransactions(transactions) {
  // write your code here...
  return transactions.filter((value, index, array) => value[0] === "expense");
}

// 3) Write a `calculateTotalIncome` function that calculates the total income and returns it.
function calculateTotalIncome(transactions) {
  // write your code here...
  return filterIncomeTransactions(transactions).reduce((total, value, index, _) => value[1] + ((index == 1) ? total[1] : total));
}

// 4) Write a `calculateTotalExpenses` function that calculates the total expense and returns it.
function calculateTotalExpenses(transactions) {
  // write your code here...
  return filterExpenseTransactions(transactions).reduce((total, value, index, _) => value[1] + ((index == 1) ? total[1] : total));
}

// 5) Write a `calculateNetTotal` function that calculates the net total (total income - total expenses) and returns it.
function calculateNetTotal(transactions) {
  // write your code here...
  return calculateTotalIncome(transactions) - calculateTotalExpenses(transactions);
}

// 6) Write a `filterSignificantTransactions` function that identifies and creates a new array with transactions (both incomes and expenses) above or equal to $500.
function filterSignificantTransactions(transactions, threshold = 500) {
  // write your code here...
  return transactions.filter((value, index, array) => value[1] >= threshold);
}

module.exports = {
  filterIncomeTransactions,
  filterExpenseTransactions,
  calculateTotalIncome,
  calculateTotalExpenses,
  calculateNetTotal,
  filterSignificantTransactions,
};
