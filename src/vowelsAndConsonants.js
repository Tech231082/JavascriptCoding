let s='javascriptcoding';
let vowels=['a','e','i','o','u'];
function vowelCount( s){


for(let i=0; i<s.length; i++) {
    if(vowels.contains(s[i])) {
      console.log(s[i])
    }
  }
    for(let j=0; j<s. length; j++) {
      if(vowels.indexOf(s[j]) === -1) 
    // note: if(!vowels.includes(s[j])) would work exactly the same too and is the same method as what you used above 
      console.log(s[j]);
    }
  
  }

//vowelCount('javascriptcoding');
