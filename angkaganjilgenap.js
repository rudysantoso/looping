for(let i=0;i<=100;i++){
    if((i%2)==1){
        console.log('ganjil');
    } else {
        console.log('genap');
      }
}

for(let i=1;i<=100;i+=2){
    if((i%3)===0){
        console.log(i + ' kelipatan 3')
    } else {
        console.log('')
    }
}

for(let i=1;i<=100;i+=5){
    if((i%6)===0){
        console.log(i + ' kelipatan 6')
    } else {
        console.log('')
    }
}

for(let i=1;i<=100;i+=9){
    if((i%10)===0){
        console.log(i + ' kelipatan 10')
    } else {
        console.log('')
    }
}
