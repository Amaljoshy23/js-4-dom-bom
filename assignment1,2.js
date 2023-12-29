// q1.  Write a JavaScript program to remove items from a drop-down list


document.getElementById('Remove').addEventListener('click',function(){
    document.getElementById('colorSelectDelete').removeChild(document.getElementById('colorSelectDelete').lastElementChild);
});

// question-2

function changeColor(){
    let wantedColor=document.getElementById('colorSelect').value;
    document.getElementById('sampletext').style.color=wantedColor;
}

