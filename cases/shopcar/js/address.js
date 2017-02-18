
var vm = new Vue({
    el: '.container',
    data: {
        addressList:[],
        limitNum:3,
        sendtype:true,
    },
    mounted: function () {
        this.$nextTick(function () {
            this.addressView()
        })
    },
    computed:{
        addressListLimit:function(){
            return this.addressList.slice(0,this.limitNum);
        }
    },
    methods:{
        addressView:function(){
            this.$http.get('data/address.json').then((res)=>{
                if(res.status ==200){
                    this.addressList = res.data.result;
                }
            })
        },
        setDefault:function(item){
            for(var i=0; i<this.addressList.length;i++){
                this.addressList[i].isDefault = false;
            }
            item.isDefault = true;
        }
    }
})