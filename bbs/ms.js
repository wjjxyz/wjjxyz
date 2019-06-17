1.请看上述代码：
    var m=true;
    setTimeout(function(){m=false},3000);
    while(m){}alert("ok");
    请问多久能弹出ok?
2.请实现下JavaScript多线程如何简单实现

3.简述http缓存策略（本地缓存/重新请求考虑）

4.请问本体的输出结果是：
    const a=[];
    for(var i=0;i<10;i++){
        a.push(function(){
            return console.log(i)
        })
    };
    a[0]()
    a[1]()

5.请写出下列js对比的结果
typeof{}==='object'
typeof[]==='object'
[5,9,1]===[5,9,1]
[1,9,1]===[3,9,1]
{}==={}
{a:1}==={a:1}
console.log(typeof{}==='object')
console.log(typeof{}==='object')
console.log([5,9,1]===[5,9,1])
console.log([1,9,1]===[3,9,1])
console.log({}==={})
console.log({a:1}==={a:1})

6.使用canvas绘制一个三角形并填充颜色为绿色

7.写一个函数。输入一个数组a，找到里面是否存在三个不同的元素
使得a[i]+a[j]==a[k]
如果能找到就输出true 找不到输出flase
例如 a1=[1,5,10,25,9,17,100] 输出false
a2=[2,99,3,5] 输出true

8.var a=1
    function func(){
        a=c=b=2
    }
    func()
    a=
    b=
    c=

9.var name="jack"
    function change (){
        alert(name)
        var uname="lily"
        alert(name)
    }
    change() //?

10.
function change(){
    alert(typeof fn)
    function fn(){
        alert("hello")
    }
    var fn
}
未完

11.执行结果是什么，并阐述原因
function Gyyx(){
    this.text=function(){
        alert(a1)
    }
}
Gyyx.prototype.text=function(){
    alert(a2)
}
New Gyyx().text()

var length=10;
function fn(){
    console.log(this.length)
}
var obj={
    length:5,
    method:function(fn){
        fn()
        console.log(this.length)
    }
}
obj.method(fn)