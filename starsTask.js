for(var i=0;i<5;i++){
    let output=""
    if(i<3){
        for(var j=i;j<2;j++){
            output+=' '
        }
        for(var j=0;j<=i;j++){
            output+='* '
        }
        console.log(output)
    }
    else{
        for(var j=2;j<i;j++){
            output+=' '
        }
        for(var j=i;j<5;j++){
            output+='* '
        }
        console.log(output)
    }
}
