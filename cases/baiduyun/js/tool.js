//获取到相应的数据
function getData(n){
	var arr = [];
	for(var i=0; i<aData.length; i++){
		if(aData[i].pId == n){
			arr.push(aData[i]);
		}
	}
	return arr;
}

//渲染拿到的数据
function show(dat){
	gridList.innerHTML = '';
	for(var i=0; i<dat.length; i++){
		create(i,1);
	}
	numb.innerHTML = dat.length;  //页面共多少文件数
	mm.parentNode.parentNode.style.background = '';
}

//根据数据创建页面元素
function create(n,x){
	var gird = document.createElement('div');
	gird.className = 'grid_item';
	var itemT = document.createElement('div');
	itemT.className = 'item_top';
	var em = document.createElement('em');
	em.className = 'checkbox';
	itemT.appendChild(em);
	gird.appendChild(itemT);
	
	var itemR = document.createElement('div');
	itemR.className = 'item_rename';
	var inp = document.createElement('input');
	inp.type= 'text';
	inp.value= '新建文件夹';
	
	var em1 = document.createElement('em');
	var em2 = document.createElement('em');
	itemR.appendChild(inp);
	itemR.appendChild(em1);
	itemR.appendChild(em2);
	gird.appendChild(itemR);
	
	var itemN = document.createElement('div');
	itemN.className = 'item_name';
	var oA = document.createElement('a');
	oA.href = 'javascript:;';
	itemN.appendChild(oA);
	gird.appendChild(itemN);
	
	if(x){ //渲染数据
		gird.id = data[n].id;
		oA.innerHTML = data[n].name;
		itemN.style.display = 'block';
	}else{ //新建文件夹
		itemR.style.display ='block';
	}
	
	if(child[0]){
		gridList.insertBefore(gird,child[0]);
	}else{
		gridList.appendChild(gird);
	}
	inp.select();
	
	gird.onmouseover = function(){
		if(!newF.onOff){
			this.classList.add('active');
		}
	}
	gird.onmouseout = function(){
		var cbox = this.getElementsByClassName('checkbox')[0];
		if(!cbox.onOff){
			this.classList.remove('active');
		}
	}
	
	//双击进入子文件
	gird.ondblclick = function(){
		clearTimeout(this.timer);
		id = gird.id;
		p.push(id);
		mm.style.display = 'none';
		window.location.hash += '/'+oA.innerHTML;
	}
	
	//拖拽文件夹
	gird.onmousedown = function(e){
		e.cancelBubble = true;
		itmmenu.style.display = 'none';
		var dragbox = document.getElementsByClassName('dragbox')[0];
		var x = e.clientX;
		var y = e.clientY;
		if(em.onOff &&　!e.ctrlKey && !newF.onOff){
			filewrap.onmousemove = function(e){
				dragbox.style.display = 'block';
				e.cancelBubble = true;
				newF.onOff = true;
				var X = e.clientX-filewrap.offsetLeft; 
				var Y = e.clientY-filewrap.offsetTop;
				dragbox.style.left = X+'px';
				dragbox.style.top = Y+'px';
			}
			filewrap.onmouseup = function(e){console.log(1)
				e.cancelBubble = true;
				newF.onOff = false;
				var arr =[];
				filewrap.onmousemove = filewrap.onmouseup = null;
				for(var i=0; i<cboxs.length; i++){
					if(cboxs[i].onOff){ //已选中的文件夹排除
						arr.push(items[i]);
						continue;
					}
					if(pZ(dragbox,items[i])){
						dragbox.onOff = true;
						var num = items[i].id;//记录碰到的是第几个
					}
				}
				if(dragbox.onOff){
					for(var i=0; i<arr.length; i++){
						gridList.removeChild(arr[i]);//删除文件夹节点
						for(var j=0; j<aData.length; j++){//修改对应数据
							if(aData[j].id == arr[i].id){
								aData[j].pId = num;
							}
						}
					}
					data = getData(num);
					numb.innerHTML = data.length;
				}else{
					moren();
				}
				check1();
				dragbox.style.cssText = '';
			}
		}
//		return false;
	}
	//文件夹右键菜单
	gird.oncontextmenu = function(e){
		e.cancelBubble = true;
		contmenu.style.display = 'none'; //右键空白区域菜单隐藏
		itmmenu.style.display = 'block';
		var l = e.clientX;
		var t= e.clientY;
		//菜单定位判断
		if(l+itmmenu.offsetWidth>window.innerWidth){
			l = window.innerWidth-itmmenu.offsetWidth;
		}
		if(t+itmmenu.offsetHeight>window.innerHeight){
			t = t-itmmenu.offsetHeight;
		}
		itmmenu.style.left = l +'px';
		itmmenu.style.top = t +'px';
		moren();
		this.classList.add('active');
		var ckbox = this.getElementsByTagName('em')[0];
		ckbox.onOff = true;
		ckbox.style.backgroundPosition = '-36px -42px';//选中true
		check1();
		return false;
	}
	em.onmousedown = em.onmouseup = function(e){  //点击checkbox会触发父级的拖拽
		e.cancelBubble = true;
	};
	
	em.onclick = function(e){//判断是否选中checkbox
		e.cancelBubble = true;
		if(this.onOff){
			this.style.backgroundPosition = '0 -42px';//未选中false
		}else{
			this.style.backgroundPosition = '-36px -42px';//选中true
		}
		this.onOff = !this.onOff;
		check1();
	}
	em1.onclick = function(){//创建文件夹时确认创建
		oA.innerHTML = chaxun(inp.value);//赋值前需先查询
		itemN.style.display = 'block';
		itemR.style.display = 'none';
		newF.onOff = false;
		
		var dat = {};
		dat.id = max1();
		dat.name = oA.innerHTML;
		dat.pId = id;
		aData.push(dat);
		gird.id = aData[aData.length-1].id;
		data = getData(id);
		
		numb.innerHTML = data.length;
	}
	
	em2.onclick = function(){//创建文件夹时取消创建
		gridList.removeChild(gird);
		newF.onOff = false;
	}
}
//浮动元素变定位
function position(){
	for(var i=0; i<items.length; i++){
		items[i].style.left = items[i].offsetLeft +'px';
		items[i].style.top = items[i].offsetTop+'px';
	}
	for(var i=0; i<items.length; i++){
		items[i].style.position = 'absolute';
		items[i].style.marginLeft = 0;
		
	}
}
//检测有多少个checkbox选中,并判断重命名是否显示
function check1(){
	var n=0;
	for(var i=0; i<cboxs.length; i++){
		if(cboxs[i].onOff){
			n++;
		}
	}
	if(n==0){//判断重命名等是否显示
		mm.style.display = 'none';
		mm.parentNode.parentNode.style.background = '';
	}else{
		if(n==1){
			name1.style.opacity = 1;
			name1.onOff = true;
		}else{
			name1.style.opacity = 0.3;
			name1.onOff = false;
		}
		cNum.innerHTML = '已选中'+n+'个文件/文件夹';
		mm.style.display = 'block';
		mm.parentNode.parentNode.style.background = '#f2f6ff';
	}
	if(n==cboxs.length){ //判断全选按钮
		all.onOff = true;
		all.classList.add('active');
	}else{
		all.onOff = false;
		all.classList.remove('active');
	}
}
//面包屑
function nav(){
	path.innerHTML = '';
	var str = '';
	var hash = window.location.hash;
	var arr = hash.split('/');
	if(arr.length>1){
		str +='<a href="javascript:;">返回上一级</a> | <a href="javascript:;">全部文件</a>';
		for(var i=1; i<arr.length-1; i++){
			str += ' > <a href="javascript:;">'+arr[i]+'</a>';
		}
		str += ' > <span>'+arr[arr.length-1]+'</span>';
		path.innerHTML = str;
		
		var as = path.getElementsByTagName('a');
		as[0].onclick = function(){ //返回上一级
			arr.splice(arr.length-1);
			window.location.hash = arr.join('/');
			p.splice(p.length-1);
			id = p[p.length-1];
			moren();
		}
		for(var i=1; i<as.length; i++){
			as[i].index = i;
			as[i].onclick = function(){
				moren();
				arr.splice(this.index);
				p.splice(this.index)
				window.location.hash = arr.join('/');
				id = p[p.length-1];
			}
		}
	}else{
		path.innerHTML = '全部文件';
	}
}

//查询最大的id
function max1(){
	var max = aData[0].id;
	for(var i=0; i<aData.length; i++){
		if(aData[i].id>max){
			max = aData[i].id;
		}
	}
	return max+1;
}

//查询是否有重名，重名+（i）
function chaxun(value){
	var n=0;
	var arr = [];
	for(var i=0; i<data.length; i++){
		if(data[i].name == value){
			n++;
			arr.push(1);
		}else{
			for(var j=1; j<data.length; j++){
				if(data[i].name == value+'('+j+')'){
					arr.push(j+1);
				}
			}
		} 
	}
	return n ? value+'('+arr[arr.length-1]+')'  :  value;//n==0,直接返回，n!=0,返回（）
}
//获取要删除文件夹下的所有数据，并删除
function getchild(arr){
	for(var i=0; i<arr.length; i++){
		for(var j=0; j<aData.length; j++){
			if(aData[j].pId == arr[i].id){
				arr.push(aData[j]);
				aData.splice(j,1);
				j--;
			}
		}
	}
}

//所有checkbox没有选中的，wrap隐藏的样式
function moren(){
	all.onOff = false;
	all.classList.remove('active');
	mm.style.display = 'none';
	for(var i=0; i<cboxs.length; i++){
		cboxs[i].style.backgroundPosition = '0 -42px';
		cboxs[i].onOff = false;
		items[i].classList.remove('active');
	}
	mm.parentNode.parentNode.style.background = '';
}

//渲染滚动条，滚动条显示隐藏，及高度自适应
function generateScroll(){
	if(gridList.offsetHeight < filewrap.offsetHeight){
		scrollbar.style.display = 'none';
	}else{
		scrollbar.style.display = 'block';
		var bl =( gridList.offsetHeight-filewrap.offsetHeight) / filewrap.offsetHeight;
		span.style.height =scrollbar.offsetHeight - bl * scrollbar.offsetHeight + 'px';
	}
}

//滚动条位置控制显示内容的位置
function scroll(t){
	var maxt = scrollbar.offsetHeight - span.offsetHeight;
	if(t<0){
		t = 0;
	}
	if(t>maxt){
		t = maxt;
	}
	var cbl = t / maxt;
	gridList.style.top = -cbl * ( gridList.offsetHeight-filewrap.offsetHeight) +'px';
	span.style.top = t + 'px';
	return false;
}
//碰撞检测
function pZ(obj1,obj2){
	var pos1 = obj1.getBoundingClientRect();
	var pos2 = obj2.getBoundingClientRect();
	if(pos1.right < pos2.left || pos1.bottom < pos2.top || pos1.left > pos2.right || pos1.top > pos2.bottom){
		return false;
	}else{
		return true;
	}
}
//重命名
function itemRename(){
	if(name1.onOff){
		newF.onOff = true;
		for(var i=0; i<cboxs.length; i++){
			if(cboxs[i].onOff){
				break ;
			}
		}
		var itemN =	items[i].getElementsByClassName('item_name')[0];
		var itemR =	items[i].getElementsByClassName('item_rename')[0];
		var oA = items[i].getElementsByTagName('a')[0];
		var inp = items[i].getElementsByTagName('input')[0];
		var em = itemR.getElementsByTagName('em');
		
		itemN.style.display = 'none';
		itemR.style.display = 'block';
		inp.value = oA.innerHTML;
		inp.select();
		
		em[0].onclick = function(e){
			e.cancelBubble = true;
			if(inp.value != oA.innerHTML){
				oA.innerHTML = chaxun(inp.value);
				for(var j=0; j<aData.length; j++){
					if(items[i].id == aData[j].id){
						aData[j].name = oA.innerHTML;
						break;
					}
				}
			}
			newF.onOff = false;
			itemN.style.display = 'block';
			itemR.style.display = 'none';
		}
		
		em[1].onclick = function(e){
			e.cancelBubble = true;
			itemN.style.display = 'block';
			itemR.style.display = 'none';
			newF.onOff = false;
		}
	}
}