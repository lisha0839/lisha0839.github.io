var content = document.getElementById('content');
var path = content.getElementsByClassName('path')[0];  //路径
var mm = content.getElementsByClassName('mm')[0];  //重名名的wrap
var cNum = content.getElementsByClassName('text')[0];  //已选中多少文件夹
var numb = content.getElementsByClassName('numb')[0];  //共numb个
var newF = content.getElementsByClassName('btn')[1];  //新建文件夹
var del = content.getElementsByClassName('del')[0];  //删除文件夹
var all = content.getElementsByClassName('check')[0];  //全选
var name1 = content.getElementsByClassName('btn1')[0]; //重命名
var filewrap = content.getElementsByClassName('filewrap')[0];
var gridList = content.getElementsByClassName('grid_list')[0];
var items  = gridList.getElementsByClassName('grid_item'); //文件
var cboxs  = content.getElementsByClassName('checkbox'); //checkbox
var scrollbar  = content.getElementsByClassName('scrollbar')[0]; 
var span = scrollbar.getElementsByTagName('span')[0];
var contmenu  = content.getElementsByClassName('contentmenu')[0]; 
var cmenuLis  = contmenu.getElementsByTagName('li'); 
var itmmenu  = content.getElementsByClassName('itemmenu')[0]; 
var imenuLis  = itmmenu.getElementsByTagName('li'); 
var kuang  = document.getElementsByClassName('kuang')[0]; 

//初始化
var child = gridList.children;
var p = [];
var id = 0;
p.push(id);
var data = getData(id);//data全局变量存放从数据文件拿到的数据
show(data);//渲染数据
window.location.hash = 'path=';

//空白区域右键菜单
content.oncontextmenu = function(e){
	if(!newF.onOff){
		moren(); //
		contmenu.style.display = 'block';
		var l = e.clientX;
		var t= e.clientY;
		if(l+contmenu.offsetWidth>window.innerWidth){//菜单位置判断
			l = window.innerWidth-contmenu.offsetWidth;
		}
		if(t+contmenu.offsetHeight>window.innerHeight){
			t = t-contmenu.offsetHeight;
		}
		contmenu.style.left = l +'px';
		contmenu.style.top = t +'px';
	}
	return false;
}

//框选的框
document.onmousedown = function(e){ 
	contmenu.style.display = 'none'; //右键空白区域菜单隐藏
	itmmenu.style.display = 'none';//右键文件夹区域菜单隐藏
	var x = e.clientX;
	var y = e.clientY;
	if(!newF.onOff){
		document.onmousemove = function(e){
			var x1 = e.clientX;
			var y1 = e.clientY;
			var n = x1>x ? x:x1;
			var m = y1>y ? y:y1;
			kuang.style.display = 'block';
			kuang.style.width = Math.abs(x-x1) + 'px';
			kuang.style.height = Math.abs(y-y1) + 'px';
			kuang.style.left = n +'px';
			kuang.style.top = m +'px';
			moren();
			for(var i=0; i<items.length; i++){
				if(pZ(kuang,items[i])){
					items[i].classList.add('active');
					var ckbox = items[i].getElementsByTagName('em')[0];
					ckbox.onOff = true;
					ckbox.style.backgroundPosition = '-36px -42px';//选中true
					mm.style.display = 'block';
					onOff = false;
					check1();
				}
			}
		}
		document.onmouseup = function(e){
			kuang.style.cssText = '';
			document.onmousemove = document.onmouseup = null;
		}
	}
}

//当hash值改变时，重新拿到数据，并渲染为文件夹，渲染导航栏
window.onhashchange = function(){
	data = getData(id);
	show(data);
	nav();
}

//新建文件夹：新建按钮、右键菜单按钮
cmenuLis[4].onmousedown = newF.onclick = function(e){
	e.cancelBubble = true;
	contmenu.style.display = 'none';
	if(this.onOff){  //新建文件夹过程中不能再次点击新建文件夹
		return;
	}else{
		create(1);
		generateScroll();
		newF.onOff = true;
		moren();
	}
}
//文件夹右键菜单打开
imenuLis[0].onmousedown =  function(){
	for(var i=0; i<items.length; i++){
		var em = items[i].getElementsByClassName('checkbox')[0];
		var oA = items[i].getElementsByTagName('a')[0];
		if(em.onOff){
			id = items[i].id;break;
		}
	}
	p.push(id);
	mm.style.display = 'none';
	window.location.hash += '/'+oA.innerHTML;
}
	
imenuLis[1].onmousedown = function(){
	check1();
	if(name1.onOff){
		itemRename();
	}
}
name1.onclick = function(e){//重命名
	e.cancelBubble = true;
	itemRename();
}
//删除文件夹,同时删除该文件夹下所有的子数据 
imenuLis[2].onmousedown = del.onclick = function(e){
	e.cancelBubble = true;
	if(confirm('确定删除吗？')){
		var arr = [];  
		for(var i=0; i<cboxs.length; i++){
			if(cboxs[i].onOff){
				for(var j=0; j<aData.length; j++){
					if(items[i].id == aData[j].id){
						arr.push(aData[j]); //放入当前页面删除的文件夹数据
						aData.splice(j,1);
						j--;
						getchild(arr);  //找该文件下所有数据
					}
				}
				gridList.removeChild(items[i]);
				i--;
			}
		}
		data = getData(id);
		numb.innerHTML = data.length;
		moren();
	}
	itmmenu.style.display = 'none';//右键文件夹区域菜单隐藏
}

all.onclick = function(e){ //全选
	e.cancelBubble = true;
	if(this.onOff){//未选中
		moren();
	}else{//选中
		for(var i=0; i<cboxs.length; i++){
			cboxs[i].style.backgroundPosition = '-36px -42px';
			cboxs[i].onOff = true;
			items[i].classList.add('active');
		}
		check1();
	}
}
generateScroll();

//鼠标在文件夹内容区的滚动
filewrap.onmousewheel =function(e){
	var speed = e.wheelDelta>0 ? -20 : 20;
	var st = span.offsetTop + speed;
	scroll(st);
} 

//点击滚动条
scrollbar.onclick = function(e){
	e.cancelBubble = true;
	var t = e.clientY - scrollbar.offsetTop;
	var maxt = scrollbar.offsetHeight - span.offsetHeight;
	if(t>span.offsetTop && t<span.offsetTop+span.offsetHeight){
		return ; 
	}
	t =span.offsetTop+(  t>span.offsetTop ? span.offsetHeight : -span.offsetHeight);
	scroll(t);
}