const s={
    h:"10",
    e:"10",
    sc:"10",
    ss:"10",
    m:"10"
};

let total=(parseInt(s.h) + parseInt(s.e) + parseInt(s.sc) + parseInt(s.ss) +
parseInt(s.m) );

let ave=total/5;

console.log(`the average is ${ave}`);

if (ave>=90) {
    console.log(`A+`);
} else if(ave>80){
    console.log(`A`);
} else if(ave>70){
    console.log(`B+`);
}  else if(ave>60){
    console.log(`B`);
} else if(ave>50){
    console.log(`C+`);
} else if(ave>40){
    console.log(`C`);
}else if(ave>30){
    console.log(`D+`);
}else {
    console.log(`Grade : FAIL`);
}