// 快速排序
var quickSort = function(arr) {
    if(arr.length < 1) {//如果数组就是一项，那么可以直接返回
        return arr;
    }
    var centerIndex = Math.floor(arr.length / 2);//获取数组中间的索引
    var centerValue = arr[centerIndex];//获取数组中间项
    var left = [], right = [];
    for(var i = 0; i < arr.lenght; i++){
        if(arr[i] < centerValue){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).contanct([centerValue], quickSort(right));//递归调用
}

// 冒泡排序
var bubbleSort = function(arr) {
    var len = arr.length;
    for(var i = 0; i < len; i++){
        for(var j = 0; i < len - 1 - i; i++){
            if(arr[j] > arr[j+1]) {//相邻元素两两对比
                var temp = arr[j+1];//元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// 插入排序
var insertSort = function(arr) {
    var len = arr.length;
    var preIndex, current;
    for(var i = 1; i < len; i++){
        preIndex = i - 1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current){
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}


//数组去重:
Array.prototype.myUnique = function myUnique(){
    //this是当前要操作的数组
    var obj = {};
    for(var i = 0; i < this.length; i++){
        var cur = this[i];
        if (obj[cur] == cur){
            this[i] = this[this.length-1];
            this.length--;
            i--;//防止数组塌陷
            continue;
        }
        obj[cur] = cur;
    }
    obj = null;
    return this;//为了实现链式写法
};
ary.myUnique().sort();
ary.myUnique();
