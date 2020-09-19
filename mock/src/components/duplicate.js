//得出字典
let array = [1,1,2,3,3,3];
let map = {};
let res = [];
for(let i=0; i<array.length; i++){
    ele = array[i];
    if(!map[array[i]]){
        map[array[i]] = 1;
    }
    else{
        map[array[i]]++;
    }
}
console.log(map);

let maxnum = 0;
let maxname = 0;
for (let i in map){
    if(map[i]> maxnum){
        maxnum = map[i];
        maxname = i; 
    }
}
console.log(maxname);