// let maths=75;
// let science=80;
// let social=60;
// let english=80;
// let hindi=65;
// let marathi=60;
// let total_marks=600;

// The percentage of Krishna in 10th Std is

function calculate(){
let hindi = parseInt(document.getElementById("input1").value);
console.log(hindi);

let marathi =parseInt(document.getElementById("input2").value);
console.log(marathi);

let english =parseInt(document.getElementById("input3").value);
console.log(english);

let maths =parseInt(document.getElementById("input4").value);
console.log(maths);

let science =parseInt(document.getElementById("input5").value);
console.log(science);

let social =parseInt(document.getElementById("input6").value);
console.log(social);

let total_marks=parseInt(document.getElementById("total").value);
console.log(total_marks);

function add(maths=0,science=0,social=0,english=0,hindi=0,marathi=0){
       return maths + science + social + english + hindi + marathi;
}

let ob_marks = add(maths,science,social,english,hindi,marathi);
console.log(ob_marks);

function div_marks(ob_marks=0,total_marks=0){
    return ob_marks/total_marks;
}
let div_value = div_marks(ob_marks,total_marks);
console.log(div_value);

function percentage(div_value=0){
    return div_value * 100;
}
let per = percentage(div_value);
console.log(per);

document.getElementById("display").innerHTML="Your  Percentage is  "+ per.toFixed(2);

if(per >= 60){
    document.getElementById("result").innerHTML=" congratulation You are pass with First Class..!";
    document.getElementById("emoji").innerHTML=String.fromCodePoint(0x1F60E);
}
else if( per < 60 && per > 35){
    document.getElementById("result").innerHTML="Congratulation You are Pass";
    document.getElementById("emoji").innerHTML=String.fromCodePoint(0x1F60A);
}
else if(per < 35){
    document.getElementById("result").innerHTML="You are failed,better luck Next time";
    document.getElementById("emoji").innerHTML=String.fromCodePoint(0x1F61F);
}
else{
    document.getElementById("result").innerHTML=" Enter the proper value or Data";
    document.getElementById("emoji").innerHTML=String.fromCodePoint(0x1F644);  
}
}
