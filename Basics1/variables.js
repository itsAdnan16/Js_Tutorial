 const account_id = 144553
 let account_email = "adnanh.7309@gmail.com"
 var account_password = "Adnan@123"
 //Note//
 /* 
 Dont Use var because it will create  bproblem in block space and functional space
 */

  account_city = "Jhansi"
  /* if i do this without declaring it it will be considered as unidentified global variable and cause error in the future code*/
//account_id = 1222// not allowed 

let account_state;
 

console.log(account_id)
console.log(account_city)
console.table([account_id,account_email,account_password,account_city,account_state])

  