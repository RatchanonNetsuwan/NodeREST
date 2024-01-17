function getBudgets(budgets) {
    let sum = 0;
    for(let i = 0; i < budgets.length; i++) {

        sum += budgets[i].budget
    }

    console.log(sum);
}

getBudgets([
    {names : "John" , age : 21 , budget : 29000},
    {names : "Steve" , age : 32 , budget : 32000},
    {names : "Martin" , age : 16 , budget : 1600}
])
