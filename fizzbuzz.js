function fizzbuzz(num){
	if(0 < num && num < 101) 
	  return (((num%3)?'':'Fizz')+((num%5)?'':'Buzz')||num.toString())
	return ('invalid input')
  }
  
  module.exports = fizzbuzz