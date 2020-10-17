// 1.Evaluation marks:
// statibility:
// 稳定：如果a原本在b前面，而a=b，排序之后a仍然在b的前面； 不稳定：如果a原本在b的前面，而a=b，排序之后a可能会出现在b的后面；
// 内排序：所有排序操作都在内存中完成； 外排序：由于数据太大，因此把数据放在磁盘中，而排序通过磁盘和内存的数据传输才能进行；

// 时间复杂度: 一个算法执行所耗费的时间。[https://blog.csdn.net/firefly_2002/article/details/8008987?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param] 空间复杂度: 运行完一个程序所需内存的大小。 


// Bubble Sort Object(n^2) bestO(n) Worst(n^2) space complecity(1) in place stable:
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        //相邻元素两两对比
                var temp = arr[j+1];        //元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]

//Bubble sort improvement:
function bubbleSort3(arr3) {
    var low = 0;
    var high= arr.length-1; //设置变量的初始值
    var tmp,j;
    console.time('2.改进后冒泡排序耗时');
    while (low < high) {
        for (j= low; j< high; ++j) //正向冒泡,找到最大者
            if (arr[j]> arr[j+1]) {
                tmp = arr[j]; arr[j]=arr[j+1];arr[j+1]=tmp;
            }
        --high;                 //修改high值, 前移一位
        for (j=high; j>low; --j) //反向冒泡,找到最小者
            if (arr[j]<arr[j-1]) {
                tmp = arr[j]; arr[j]=arr[j-1];arr[j-1]=tmp;
            }
        ++low;                  //修改low值,后移一位
    }
    console.timeEnd('2.改进后冒泡排序耗时');
    return arr3;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort3(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]

//Select sort
function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    console.time('选择排序耗时');
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     //寻找最小的数
                minIndex = j;                 //将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    console.timeEnd('选择排序耗时');
    return arr;
}


// insert sort:
// 一般来说，插入排序都采用in-place在数组上实现。具体算法描述如下：

// <1>.从第一个元素开始，该元素可以认为已经被排序；
// <2>.取出下一个元素，在已经排序的元素序列中从后向前扫描；
// <3>.如果该元素（已排序）大于新元素，将该元素移到下一位置；
// <4>.重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
// <5>.将新元素插入到该位置后；
// <6>.重复步骤2~5。


function insertionSort(array) {
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
        console.time('插入排序耗时：');
        for (var i = 1; i < array.length; i++) {
            var key = array[i];
            var j = i - 1;
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        }
        console.timeEnd('插入排序耗时：');
        return array;
    } else {
        return 'array is not an Array!';
    }
}

Shell sort:
<1>. 选择一个增量序列t1，t2，…，tk，其中ti>tj，tk=1；
<2>.按增量序列个数k，对序列进行k 趟排序；
<3>.每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m 的子序列，分别对各子表进行直接插入排序。仅增量因子为1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。

作者：Damonare
链接：https://juejin.im/post/6844903444365443080
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
function shellSort(arr) {
    var len = arr.length,
        temp,
        gap = 1;
    console.time('希尔排序耗时:');
    while(gap < len/5) {          //动态定义间隔序列
        gap =gap*5+1;
    }
    for (gap; gap > 0; gap = Math.floor(gap/5)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }
    console.timeEnd('希尔排序耗时:');
    return arr;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(shellSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]

// Merged sort:
// <1>.把长度为n的输入序列分成两个长度为n/2的子序列；
// <2>.对这两个子序列分别采用归并排序；
// <3>.将两个排序好的子序列合并成一个最终的排序序列。
// 最佳情况：T(n) = O(n)
// 最差情况：T(n) = O(nlogn)
// 平均情况：T(n) = O(nlogn)
function mergeSort(arr) {  //采用自上而下的递归方法
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
    var result = [];
    console.time('归并排序耗时');
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());
    console.timeEnd('归并排序耗时');
    return result;
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(mergeSort(arr));


// Quick sort:
// 快速排序使用分治法来把一个串（list）分为两个子串（sub-lists）。具体算法描述如下：

// <1>.从数列中挑出一个元素，称为 "基准"（pivot）；
// <2>.重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
// <3>.递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。

function quickSort(array, left, right) {
    console.time('1.快速排序耗时');
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array' && typeof left === 'number' && typeof right === 'number') {
        if (left < right) {
            var x = array[right], i = left - 1, temp;
            for (var j = left; j <= right; j++) {
                if (array[j] <= x) {
                    i++;
                    temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                } 
            }
            quickSort(array, left, i - 1);
            quickSort(array, i + 1, right);
        }
        console.timeEnd('1.快速排序耗时');
        return array;
    } else {
        return 'array is not an Array or left or right is not a number!';
    }
}

// Use Pivot, Quick sort solution2:
//Last Step : left 越过right，左半区start-right，右半区,left -end
var quickSort = function(nums, start, end){
	if(start >= end) return
	let left = start, right = end;
	let pivot = nums[Math.floor((start+end) / 2)];
	while(left <= right) {
		while(left <= right && nums[left] < pivot){
			left++
		}
		while(left <= right && nums[right] > pivot){
			right--
		}
		if(left <= right){
			let temp = nums[left]
			nums[left] = nums[right]
			nums[right] = temp
			left++
			right--
		}
	}
	quickSort(nums, start, right)
	quickSort(nums, left, end)
}



//Heap sort堆排序
var array_length;
/* to create MAX  array */  
function heap_root(input, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }

    if (right < array_length && input[right] > input[max])     {
        max = right;
    }

    if (max != i) {
        swap(input, i, max);
        heap_root(input, max);
    }
}

function swap(input, index_A, index_B) {
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapSort(input) {
    
    array_length = input.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heap_root(input, i);
      }

    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        array_length--;
      
      
        heap_root(input, 0);
    }
}

var arr = [3, 0, 2, 5, -1, 4, 1];
heapSort(arr);
console.log(arr);