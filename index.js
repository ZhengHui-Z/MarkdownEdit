layui.config({
    base: 'layui/lay/modules/'
}).use(['layer','element','jquery','form','markdown'], function(){
 	var 	layer   = layui.layer,
 			element = layui.element,
 			$		= layui.jquery,
 			form = layui.form();
  			markdown= layui.markdown;
  	
  	markdown.build("layui_md", 'markdown_html',{
        image_upload_action: '#',
        height: '650px',
        required: true,
    });
    layer.msg('加载成功');

});
