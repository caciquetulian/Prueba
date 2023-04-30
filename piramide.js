let num
function piramide(num){
    for (i = 1; i <= num; i++){
        let nivel = "";  
        for (j=1; j <= i; j++){
            nivel= nivel + j; 
     }   
    console.log(nivel);
    }
}

piramide(10)