//数组去重
var a=[123,{a:"1"},{a:{b:2}},{a:1},"meili","null",123,{a:"1"},{a:{b:2}},{a:1},"meili","null"]
var b=[123,[1,2,3],[1,"2",3],"","","meili",123,[1,2,3],[1,"2",3],"meili"]
var c=[123,"meili","123","mogu","undefied",123,"meili","123","mogu","undefied"]
a[15]="ad"
a[18]="ad"

//1.
function remove(data){
    let obj={};
    return data.filter(item=>{
       item=JSON.stringify(item)
       let match=Boolean(obj[item]);
       return match?false:obj[item]=true
    })     
}
console.log(remove(a))
console.log(remove(b))
console.log(remove(c))
//2.
function unique(arr){
  var hash=[];
  for (var i = 0; i < arr.length; i++) {
     if(hash.indexOf(arr[i])==-1){
      hash.push(arr[i]);
     }
  }
  return hash;
}
console.log(unique(a))
console.log(unique(b))
console.log(unique(c))
//3.
function unique3(arr){
    arr.sort();
    var hash=[arr[0]];
    for (var i = 1; i < arr.length; i++) {
       if(arr[i]!=hash[hash.length-1]){
        hash.push(arr[i]);
       }
    }
    return hash;
  }
  console.log(unique3(a))
  console.log(unique3(b))
  console.log(unique3(c))
//4.
  function unique5(arr){
    var x = new Set(arr);
   return [...x];
  }
  console.log(unique5(a))
  console.log(unique5(b))
  console.log(unique5(c))

  function unique6(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    return Array.from(new Set(arr))
}
console.log(unique6(a))
console.log(unique6(b))
console.log(unique6(c))


//filter的一些用法


//创建一个数组，判断数组中是否存在某个值

var newarr = [
  { num: 1, val: 'ceshi', flag: 'aa' },
  { num: 2, val: 'ceshi2', flag: 'aa2'  }
]
console.log(newarr.filter(item => item.num===2 ))


//去掉空数组空字符串、undefined、null

var arr = ['1','2',undefined, '3.jpg',undefined]
var newArr = arr.filter(item => item)
console.log(newArr)

var arr = ['1','2',null, '3.jpg',null]
var newArr = arr.filter(item => item)
console.log(newArr)

//空字符串里面不能包含空格
var arr = ['1','2','', '3.jpg','']
var newArr = arr.filter(item => item)
console.log(newArr)



//去掉数组中不符合项

var arr = [20,30,50, 96,50]
var newArr = arr.filter(item => item>40)  
console.log(newArr)


//过滤不符合项

var arr = ['10','12','23','44','42']
var newArr = arr.filter(item => item.indexOf('2')<0) 
console.log(newArr)

//数组去重

var arr = [1, 2, 2, 3, 4, 5, 5, 6, 7, 7,8,8,0,8,6,3,4,56,2];
var arr2 = arr.filter((x, index,self)=>self.indexOf(x)===index)  
console.log(arr2); //[1, 2, 3, 4, 5, 6, 7, 8, 0, 56]
