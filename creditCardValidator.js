// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];





/////////////my code //////////
const validateCred = (array) =>{ 
 
  //sets argued array to changed array so it can be mutated
  let changedArray = array.slice();
  
  //gets last digit from new array that has not been changed yet
  let lastDigit = changedArray[changedArray.length-1]; 
  
  //removes the last digit
  changedArray.pop();
  
  //reverses the array
  changedArray.reverse();
 
  //iterates through the array and multiplies every odd item by 2 and subtracts 9 if the doubled number is larger than 9
  for(let i = 0; i < changedArray.length; i++){ 
  if(i % 2 === 0 && (changedArray[i]*2) < 9 ){ 
    changedArray[i] = changedArray[i]*2; 
  }else if(i % 2 === 0 && (changedArray[i]*2) > 9)
      changedArray[i] = (changedArray[i]*2)-9; 
    
}
  
// adds up all the items in the array and divides them by 10; 
// if there is no remainer the answer is true for valid
let sum =changedArray.reduce(( a, b ) => a+ b , 0);
  sum+=lastDigit;
  if(sum % 10 === 0){ 
    return true;
  }else if(sum % 10 != 0){ 
  return false; 
  }

}

//Creates an array of invalid cards 
const findInvalidCards = (batch) =>{ 
let invalidCards = []; 
  for(let i = 0; i < batch.length; i++){ 
    if(!validateCred(batch[i])){ 
      invalidCards.push(batch[i]);
    }
  }
  return invalidCards;
}
let invalidCards = findInvalidCards(batch);
console.log(' original invalid card array ');
//console.log(invalidCards);

//determiens which banks are responsible for each invalid card
let firstNumber = [];
let brokeBankCards = [];
const idInvalidCardCompanies = (invalidCards) =>{ 
  for(let i = 0; i < invalidCards.length; i++){ 
    firstNumber.push(invalidCards[i].shift());
}
  for(let j = 0; j < firstNumber.length; j++){ 
    console.log(firstNumber[j]); 
    if(firstNumber[j] === 4 && brokeBankCards.indexOf('visa') === -1){ 
      brokeBankCards.push('visa');
    }else if(firstNumber[j] ===5 && brokeBankCards.indexOf('mastercard') === -1){ 
      brokeBankCards.push('mastercard');
    }else if(firstNumber[j] === 3 && brokeBankCards.indexOf('amex') === -1){ 
      brokeBankCards.push('amex');
    }else if (firstNumber[j] === 6 && brokeBankCards.indexOf('discover') === -1){ 
      brokeBankCards.push('discover');
    }
  }
  return brokeBankCards;
 
}
console.log(idInvalidCardCompanies(invalidCards));