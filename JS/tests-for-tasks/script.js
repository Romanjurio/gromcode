 export function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let copyArr = arr.slice();
    return copyArr.reverse();
}


export const withdraw = (clients, balances, client, amount) => {

    //put your code here
    if (!Array.isArray(clients)) {
    return null;
    }
    if (!Array.isArray(balances)) {
    return null;
    }
    let result = balances[clients.indexOf(client)] - amount;
    if ( result > 0) {
      return result;
    } else {
        return -1;
    }
    
}


export const getAdults = obj => {
  // put your code here
  if (obj === {}) {
    return {};
  }
  let resObj = {};
  for (let key in obj) {
   if(obj[key] >= 18) {
     resObj[key] = obj[key];
   }
  }
   return(resObj); 
};


