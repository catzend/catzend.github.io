"use strict";!function(){function t(i){this.wrap=i.wrap,this.imgList=i.imgList,this.imgNum=this.imgList.length,this.width=i.width||$(this.wrap).width(),this.height=i.height||$(this.wrap).height(),this.isAuto=i.isAuto||!0,this.moveTime=i.moveTime,this.direction=i.direction||"right",this.btnWidth=i.btnWidth,this.btnHeight=i.btnHeight,this.spanWidth=i.spanWidth,this.spanHeight=i.spanHeight,this.spanColor=i.spanColor,this.activeSpanColor=i.activeSpanColor,this.btnBackgroundColor=i.btnBackgroundColor,this.spanRadius=i.spanRadius,this.spanMargin=i.spanMargin,this.flag=!1,this.nowIndex=0,this.createDom(),this.initStyle(),this.bindEvent(),!0===this.isAuto&&this.autoMove()}t.prototype.createDom=function(){var s=$('<ul class="imgList"></ul>'),n=$('<div class="spot"></div>');this.imgList.forEach(function(i){var t='<li><a  href=" '+i.a+'target="_blank" "><img src=" '+i.img+' "></a></li>';s.append(t),n.append("<span></span>")});var i=$('<div class="left-btn"><i class="fas fa-angle-left"></i></div>'),t=$('<div class="right-btn"><i class="fas fa-angle-right"></i></div>');this.wrap.append(s).append(i).append(t).append(n)},t.prototype.initStyle=function(){$("*",this.wrap).css({margin:0,padding:0,listStyle:"none"}),$(this.wrap).css({overflow:"hidden",position:"relative"}),$(".imgList",this.wrap).css({width:this.width,height:this.height,position:"relative"}),$(".imgList li",this.wrap).css({width:this.width,height:this.height,position:"absolute",left:0,top:0,display:"none"}).eq(this.nowIndex).css({display:"block"}),$(".imgList li a, .imgList li a img",this.wrap).css({display:"inline-block",width:this.width,height:this.height}),$(".left-btn, .right-btn",this.wrap).css({width:this.btnWidth,height:this.btnHeight,backgroundColor:this.btnBackgroundColor,color:"#fff",textAlign:"center",lineHeight:this.btnHeight+"px",position:"absolute",top:"50%",marginTop:-this.btnHeight/2,cursor:"pointer"}),$(".right-btn",this.wrap).css({right:0}),$(".spot",this.wrap).css({height:this.spanHeight+2*this.spanMargin,position:"absolute",left:"50%",marginLeft:-this.imgNum*(this.spanWidth+2*this.spanMargin)/2,bottom:10}),$(".spot span",this.wrap).css({display:"inline-block",width:this.spanWidth,height:this.spanHeight,margin:this.spanMargin,backgroundColor:this.spanColor,borderRadius:this.spanRadius,cursor:"pointer"}).eq(this.nowIndex).css({backgroundColor:this.activeSpanColor})},t.prototype.bindEvent=function(){var t=this;$(".left-btn",this.wrap).click(function(){t.move("prev")}),$(".right-btn",this.wrap).click(function(){t.move("next")}),$(".spot span").click(function(i){t.move($(this).index())}),$(this.wrap).mouseenter(function(){clearInterval(t.time)})},t.prototype.move=function(i){if(this.flag)return!1;switch(this.flag=!0,i){case"prev":0===this.nowIndex?this.nowIndex=this.imgNum-1:this.nowIndex--;break;case"next":this.nowIndex===this.imgNum-1?this.nowIndex=0:this.nowIndex++;break;default:this.nowIndex=i}var t=this;$(".imgList li",this.wrap).fadeOut().eq(this.nowIndex).fadeIn(function(){t.flag=!1}),$(".spot  span",this.wrap).css({backgroundColor:this.spanColor}).eq(this.nowIndex%this.imgNum).css({backgroundColor:this.activeSpanColor})},t.prototype.autoMove=function(){this.time=setInterval(function(){"left"==this.direction?$(".left-btn",this.wrap).trigger("click"):$(".right-btn",this.wrap).trigger("click")},this.moveTime)},$.fn.extend({slider:function(i){i.wrap=this,new t(i)}})}();