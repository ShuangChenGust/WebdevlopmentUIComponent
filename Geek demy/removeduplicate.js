// remove the duplicate in the array Js :

// Method1: use Set:

function unique(arr){
    return arr.from(new Set(arr));
}

// Method2: use IndexOf: if array has the duplicate value then skip or push in

function unique(arr){
    if(!Array.isArray(arr)){
        console.log('type error');
        return;
    }
    var array = [];
    for(let i =0; i< arr.length; i++){
        if (array.indexOf(arr[i]) == -1){
            array.push(arr[i]);
        }
    }
    return array;
}

//Method3: use splice 
function unique(arr){
    for(let i =0; i<arr.length; i++){
        for (let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}

//Method4: use sort;
function unique(arr){
    arr = arr.sort();
    var array = [arr[0]];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] != arr[i+1]){
            array.push(arr[i]);
        }
    }
    return array;
}

//Method5: use filter;第一个索引等于当前索引 否则返回那个钱元素

function unique(arr){
    return arr.filter(function(item, index, arr){
        return arr.indexOf(item, 0) === index;
    })
}

Method5 ：use set
[...new Set(arr)];

function unique(arr){
    
}