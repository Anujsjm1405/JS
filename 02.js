const accountId = 11
let accountemail = "optimusmax11@email.com"
var accountPassword = "PrimeVerstappen"
accountCity = "Cybertron"
let no

//accountId = 2 this is not allowed as the variable declare is const which never changes its value

console.log(accountId)

accountemail="om11@om.com"
accountPassword="PV"
accountCity="Dutch"

//var keyword has issue in block scope and functional scope
//In let there is scope for each varible declared; if no value is assigned to let variable it will have undefined value(see the example)
//You can declare variable without using const,let and var but it is not recommeded to prefer this method


console.log([accountId, accountemail, accountPassword, accountCity])
console.table([accountId, accountemail, accountPassword, accountCity,no])
