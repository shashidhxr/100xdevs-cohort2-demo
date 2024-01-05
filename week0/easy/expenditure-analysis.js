/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects wherechCategory object is unique category-wise and has total price spent as its value.
  transactions is an array wherechCategory
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const eachCategory = {}

  for(let i=0; i<transactions.length; i++)
  {
    let category = transactions[i].category
    let price = transactions[i].price

    if(eachCategory.hasOwnProperty(category)){
      eachCategory.category += price
    }
    else {
      eachCategory.category = price
    }
  } 
  const finalList = Object.keys(eachCategory).map(category => ({
      category: category,
      totalSpent: eachCategory[category]
  }));

  return finalList;
}

module.exports = calculateTotalSpentByCategory;
