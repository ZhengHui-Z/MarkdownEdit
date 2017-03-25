var tab;

layui.config({
    base: './static/layui/lay/modules/' //你的模块目录
}).use(['layer','element','jquery','tab'], function(){
  var 	layer   = layui.layer,
  		element = layui.element,
  		$		= layui.jquery,
  		tab 	= layui.tab({
			elem: '.admin-nav-card' //设置选项卡容器
			,
			//maxSetting: {
			//	max: 5,
			//	tipMsg: '只能开5个哇，不能再开了。真的。'
			//},
			contextMenu:true
		});
  	$('.admin-side-full').click(function(){
  		layer.msg("123");
	});


  	//iframe自适应
	$(window).on('resize', function() {
		var $content = $('.admin-nav-card .layui-tab-content');
		$content.height($(this).height() - 147);
		$content.find('iframe').each(function() {
			$(this).height($content.height());
		});
	}).resize();
	$('.admin-side-full').on('click', function() {
		var docElm = document.documentElement;
		//W3C  
		if(docElm.requestFullscreen) {
			docElm.requestFullscreen();
		}
		//FireFox  
		else if(docElm.mozRequestFullScreen) {
			docElm.mozRequestFullScreen();
		}
		//Chrome等  
		else if(docElm.webkitRequestFullScreen) {
			docElm.webkitRequestFullScreen();
		}
		//IE11
		else if(elem.msRequestFullscreen) {
			elem.msRequestFullscreen();
		}
		layer.msg('按Esc即可退出全屏');
	});

	//手机设备的简单适配
	var treeMobile = $('.site-tree-mobile'),
		shadeMobile = $('.site-mobile-shade');
	treeMobile.on('click', function() {
		$('body').addClass('site-mobile');
	});
	shadeMobile.on('click', function() {
		$('body').removeClass('site-mobile');
	});
	
});