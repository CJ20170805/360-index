/**
 * Created by Administrator on 2017/6/10.
 */
	// ==========上方轮播=============
var top_b= $('#top-banner').unslider({
		dots: true
	});
date_top=top_b.data('unslider');
$('.unslider-arrow04').click(function() {
	var fn = this.className.split(' ')[1];
	date_top[fn]();
});
//=======商城轮播========
var mall_b=$('#mall-banner').unslider({
	dots:true
});
date_mall=mall_b.data('unslider');
$('.unslider-arrow04').click(function() {
	var fn = this.className.split(' ')[1];
	date_mall[fn]();
});



// 上方背景切换效果
var t_bottom=document.getElementsByClassName('t-bottom')[0];
var t_div=t_bottom.children;
for (var i = 0 ; i < t_div.length ; i++) {
	t_div[i].onclick=function(){
		for (var j = 0 ; j < t_div.length ; j++) {
			t_div[j].className=''
		}
		this.className='t-b-active'
	}
}
//返回顶部
var return_btn=document.getElementById('return-top').children[0];
var right_fix=document.getElementsByClassName('right-btn')[0];
//right_fix.style.top = document.body.scrollTop+'px';
return_btn.addEventListener('click',function(){
	document.body.scrollTop=0;
	document.documentElement.scrollTop=0;
})
//导航隐藏菜单
// var tnav_li=document.getElementById('top-nav-ul').children;
// var tnav_div=document.getElementById('tnav-hide').children;
// for (var i = 0; i < tnav_li.length; i++) {
// 	//tnav_li[i].index=i;
// 	tnav_li[i].onmouseover=function(){
        
// 	}
// }
// 
//反馈页面左侧固定栏
var dh_btn=document.getElementsByClassName('ss-dh')[0];
var dh_pag=document.getElementsByClassName('lxdh')[0];