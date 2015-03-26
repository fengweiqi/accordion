/*
name:jquery.accordion
verson:0.0.1
author:fengweiqi
email:yakia@gm99.com
github:
blog:fengweiqi.cn
date:2015-03-20
*/ 
;(function($, window, document,undefined) {
	var Privateclass = function(el) {//私有类
			this.el=el;
			this.opts=el.data('accordion');//获取插件参数
			this.data=function(dataName,opts){
				el.data(dataName,opts);
			}
	}
	Privateclass.prototype={
		
	};
	var privateclass;//用于私有类实例化
	var methods = {//对外接口
		init: function(options) {
			var that=this;
			return this.each(function() {
				var $this = $(this);
				var opts = $this.data('accordion');
				if(typeof(opts) == 'undefined') {

					var defaults = {
							expandWidth:'720px',//展开宽度
							smallWidth:'72px',//缩小宽度
							expandTime:500 //展开所需时间
					   };

					opts = $.extend({}, defaults, options);
					$this.data('accordion', opts);
				} else {
					opts = $.extend({}, opts, options);
				}
				privateclass=new Privateclass($this);//实例化
				// 代码在这里运行
				that.find('li').click(function(event) {
					if(!$(this).hasClass('expand')){
						that.find('.expand').animate({width:opts.smallWidth}, opts.expandTime).removeClass('expand');
					
					$(this).animate({width:opts.expandWidth}, opts.expandTime+1).addClass('expand');
					}
					
					
					
				});
				
			});
		}
	};

	$.fn.accordion = function() {
		var method = arguments[0];

		if(methods[method]) {
			method = methods[method];
			arguments = Array.prototype.slice.call(arguments, 1);
		} else if( typeof(method) == 'object' || !method ) {
			method = methods.init;
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.accordion' );
			return this;
		}
		
		return method.apply(this, arguments);

	}

})(jQuery, window, document);
