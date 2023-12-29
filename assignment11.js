 // question-11

 const counter=()=>{

    let counter =10;

    let interval = setInterval(counting,1000)

    function counting(){
        if(counter==0){
        clearInterval(interval);
          alert("counter ends")
        }else{
            counter--;
            counting_value.innerText = counter;
        }
        

    }
   
}


