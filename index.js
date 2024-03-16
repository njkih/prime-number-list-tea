// index.js

function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function generatePrimeList(max) {
    const primeList = [];
    for (let i = 2; i <= max; i++) {
      if (isPrime(i)) {
        primeList.push(i);
      }
    }
    return primeList;
  }
  
  const maxNumber = 100;
  const primeList = generatePrimeList(maxNumber);
  console.log(`Prime numbers up to ${maxNumber}:`, primeList);
  