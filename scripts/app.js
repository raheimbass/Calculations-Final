function convertTemperature(scale,temp){
    let result;
    if(scale == "F"){
        result= (temp - 32) * 5/9;
        console.log(result);
        
    }else if(scale=="C"){
        result = (temp * 9/5) + 32;
        console.log(result);
    }else{
        console.log("Incorrect scale");
    }

    return result;
}

function runApp(){
    let s=prompt("Enter F or C");
    let t=Number(prompt("Enter temp:"));
    let e=Number(prompt("Enter end temp:"));
    
    for(let i=t;i<e;i++){
        convertTemperature(s,t);
    }

}