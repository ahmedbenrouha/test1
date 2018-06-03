 /*TEST1*/
  let frequenceOfchars = new Map();
  
  function f1(a,b) {
  	let arrA = a.split("");
  	let arrB = b.split("");
  	let result = 0;
  	arrA.forEach((element)=>{
  		if(!frequenceOfchars.has(element))
  		{
  			frequenceOfchars.set(element,calculatFrequency(element,arrA));
  		}
  		
  	});
  	arrB.forEach((element)=>{
  		if(!frequenceOfchars.has(element))
  		{
  			frequenceOfchars.set(element,calculatFrequency(element,arrB));
  		}
  		else
  		{
  			if(arrA.includes(element))
  			{
  			let value = Math.abs(calculatFrequency(element,arrB)-frequenceOfchars.get(element));
  			frequenceOfchars.set(element,value);
  			}
  		}
  		
  	});
  	frequenceOfchars.forEach((value, key, mapObj)=>{
  		result= result+ value;
  	});
  	return result;
  }

  function calculatFrequency(item,arr)
  {
  	let count= 0;
  	arr.forEach((element)=>{
  		if(element === item)
  			count++;
  	});
  	return count;
  }

  console.log(f1('aafffa','afafezbbbb'));
  console.log(frequenceOfchars);
  