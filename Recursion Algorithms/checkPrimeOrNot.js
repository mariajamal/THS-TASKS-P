function prime(n){
    if(n===1){
      console.log("false")
    }
    else if(n === 2){
      console.log("true")
    }else{
      for(var x = 2; x < n; x++)
      {
        if(n % x === 0){
           var a = false
           break;
        }else{
            var a = true
        }
      }
      console.log(a)
    }
}
prime(137);