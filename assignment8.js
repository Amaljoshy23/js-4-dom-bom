 // question-8

 function getInformation(){
    let currentUrl= window.location.href;
    let url = new URL(currentUrl);
    let protocol= url.protocol;
    let hostName=url.hostname;
    let param= url.searchParams;
    let result= " URL's Protocol : " + protocol + "  and  " + "Host name : " + hostName + "  and  "+ "Query Parameters : " + param;
    const info= document.getElementById('information');
    info.innerText= result;
  }
