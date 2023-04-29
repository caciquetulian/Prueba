const array1= ['rojo', 'negro', 'amarillo'];
const array2= ['verde','negro','rosa'];

function compareArray (array1, array2){
    const iguales=[]
    for (i=0; i < array1.length; i++){
        for (j=0; j < array2.length; j++){
            if (array1[i] === array2[j]){
                iguales.push (array2[j]);
            }
         }
    }
    if (iguales.length === 0){
        console.log ('No hay elementos iguales')} 
    else {
        console.log ('Los elementos iguales son: ' + iguales)
        };

    }


compareArray (array1, array2)
