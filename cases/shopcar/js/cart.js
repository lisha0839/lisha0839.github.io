
var vm = new Vue({
	el:'.wrap',
	data:{
		productList:[],
		totalMoney:0,
		allChecked:false,
		delFlag:false,
		curProduct:''
	},
	mounted:function(){
		this.$nextTick(function(){
			this.cartView()
		})
	},
	filters:{
		formatImgSrc:function(value){
			return "img/"+value;
		},
		formatMoney:function(value){
			return value.toFixed(2);
		}
	},
	methods:{
		cartView:function(){	//获取json数据
			this.$http.get("data/cart.json",{"id":123}).then((res)=>{
				if( res.status==200 ){
					var result = res.data.result;
					this.productList = result.productList;
					this.totalMoney = result.totalMoney;
				}
			})
		},
		selectProduct:function(item,type){	//商品数量
			if(type>0){
				item.productQuentity++;
			}else{
				item.productQuentity==1 ? 1:item.productQuentity--;
			}
			if(typeof item.checked == 'undefined'){		//商品数量变动，自动选中该商品
				this.$set(item,"checked",true);
			}else{
				item.checked = true;
			}
			this.total();
		},
		changeCheck:function(item){		//单个商品选中状态确定
			if(typeof item.checked == 'undefined'){
				this.$set(item,"checked",true);
			}else{
				item.checked = !item.checked;
			}
			this.checkAllState();
		},
		checkAllState:function(){	//根据单选按钮的数量确定全选按钮是否选中
			var checkNum = this.productList.filter(function(item){
				if(item.checked){
					return item;
				}
			}).length;
			this.allChecked = checkNum==this.productList.length ? true:false;
			this.total();
		},
		isCheckAll:function(type){		//全选或取消全选
			if(type==1){
				this.productList.forEach((item,index)=>{
					if(typeof item.checked == 'undefined'){
						this.$set(item,"checked",true);
					}else{
						item.checked = true;
					}
					this.allChecked = true;
				})
			}else{
				this.productList.forEach((item,index)=>{
					if(typeof item.checked == 'undefined'){
						this.$set(item,"checked",false);
					}
					item.checked = false;
				})
				this.allChecked = false;
			}
			this.total();
		},
		total:function(){		//商品总价
			this.totalMoney = 0;
			this.productList.forEach((item)=>{
				if(item.checked){
					this.totalMoney += item.productPrice*item.productQuentity;
				}
			})
		},
		delConfirm:function(item){		//确定删除的是哪个商品
			this.delFlag = true;
			this.curProduct = item;
		},
		delProduct:function(){		//删除商品并确定全选按钮的状态
			this.delFlag = false;
			var index = this.productList.indexOf(this.curProduct);
			this.productList.splice(index,1);
			this.checkAllState();
		}
	}
})
