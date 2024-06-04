let n = 5;

outer:
for( let i = 1; i<=n; i++){

    for( let j = 1; j<=n; j++){
       
        console.log(i,j)

        if(j==3){
            break outer;
        }
    
    }
}