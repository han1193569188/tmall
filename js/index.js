$(function () {
    //头部
    let t;
    $(".headercenter-right > li").hover(function () {
        clearTimeout(t);
        t=setTimeout(()=>$(this).children(".header_popup").css("display","block"),300)
    },function () {
        clearTimeout(t);
        $(this).children(".header_popup").css("display","none");
    });
    //banner
    let num=0;
    let t2;
    let flag=true;
    function aa() {
        num++;
        let length=$(".banner-pic").children().length;
        if (num==length){
            num=0;
        }
        $(".circle").children().css("background","rgba(0, 0, 0, 0.5)").eq(num).css("background","#fff");
        $(".banner-pic").children().fadeOut(1000).eq(num).fadeIn(1000,function () {
            flag=true;
        });
    }
    t2=setInterval(function () {
		flag=false;
		aa();
    },4000);
    $(".banner").hover(function () {
		clearInterval(t2);
    },function () {
		clearInterval(t2);
        t2=setInterval(aa,4000);
    });
    $(".circle").on("click","li",function () {
    	if(!flag){
    		return;
		}
		flag=false;
		num=$(this).index();
        $(".circle").children().css("background","rgba(0, 0, 0, 0.5)").eq(num).css("background","#fff");
        $(".banner-pic").children().fadeOut(1000).eq(num).fadeIn(1000,function () {
            flag=true;
        });
    });
    //侧导航
	$(".bannerleft-list").children("li").hover(function () {
		let index=$(".bannerleft-list").children("li").index(this);
        $(".bannerleft-list").children(".pannel-con").fadeOut(1).eq(index).show();
        $(".bannerleft-list").children(".pannel-con").hover(function () {
            $(this).show();
        },function () {
            $(this).hide();
        })
    },function () {
        $(".bannerleft-list").children(".pannel-con").hide();
    });
    //右导航
	let t3;
    $(".ydh1").hover(function () {
        clearTimeout(t3);
        t3=setTimeout(()=>$(".ydhhover-s").fadeIn().animate({right:35,opacity:1}),200);
    },function () {
        clearTimeout(t3);
        t3=setTimeout(()=>$(".ydhhover-s").animate({right:70,opacity:0}).fadeOut(),300);
    });
    let t4;
    $(".ydh3").children("li").hover(function () {
        t4=setTimeout(()=>$(this).find(".ydhhover").fadeIn().animate({right:35,opacity:1}),300);
    },function () {
    	clearTimeout(t4);
        t4=setTimeout(()=>$(this).find(".ydhhover").animate({right:70,opacity:0}).fadeOut(),300);
    });
    //楼层跳转
    let height=$(".section3").offset().top;
    let color=["#64C333","#FF0036","#EA5F8D","#0AA6E8","#64C333","#F15453","#19C8A9","#FF0036"];
    $(".aside-top").click(function () {
        let aa = {num: $(window).scrollTop()};
        $(aa).animate({num: 0}, {
            duration: 500,
            step: function (val) {
                $(window).scrollTop(val);
            }
        });
    });
    let indexsave;
    $(window).scroll(function () {
        if($(document).scrollTop()>height-400){
            $("aside").show(200);
            $(".section6").slideDown(200);
            $(".list-jump").each(function (index,val) {
                if($(document).scrollTop()>val.offsetTop-400){
                    $("aside").children("li").each(function (a,b) {
                        $(b).css("background","#626262");
                    });
                    $("aside").children("li").eq(index).css("background",color[index]);
                    indexsave=index;
                }
            })
        }else{
            $("aside").hide(200);
            $(".section6").slideUp(200);
        }
    });
    $("aside").children("li").hover(function () {
        let index=$("aside").children("li").index(this);
        $(this).css("background",color[index]);
    },function () {
        $("aside").children("li").css("background","#626262");
        $("aside").children("li").eq(indexsave).css("background",color[indexsave]);
    });
    $("aside").children("li").click(function (e) {
        e.preventDefault();
        let index=$("aside").children("li").index(this);
        $(document.documentElement).animate({scrollTop:$(".list-jump")[index].offsetTop-50},200);
        $(document.body).animate({scrollTop:$(".list-jump")[index].offsetTop-50},200);
        indexsave=index;
    });

    //搜索栏出现

});
// window.onload=function(){
// 	let header_popup=document.getElementsByClassName("header_popup");
// 	let headercenter1=document.getElementsByClassName("headercenter-right_a");
// 	// console.log(header_popup,headercenter1)
// 	for(let i=0;i<header_popup.length;i++){
// 		headercenter1[i].onmouseover=function(){
// 			header_popup[i].style.display="block";
// 		}
// 		headercenter1[i].onmouseout=function(){
// 			header_popup[i].style.display="none";
// 		}
// 		header_popup[i].onmouseover=function(){
// 			header_popup[i].style.display="block";
// 		}
// 		header_popup[i].onmouseout=function(){
// 			header_popup[i].style.display="none";
// 		}
//
// 	}
// 	//轮播图
// 	let banner_pic=document.getElementsByClassName("banner-pic")[0];
// 	let banner_list=banner_pic.getElementsByTagName("li");
// 	let banner_circle=document.getElementsByClassName("circle")[0];
// 	let banner_cil=banner_circle.getElementsByTagName("li");
// 	let banner=document.getElementsByClassName("banner")[0];
// 	// console.log(banner);
// 	let t;
// 	let num=0;
// 	let banner_flag=true;
// 	t=setInterval(fn,4000);
// 	banner.onmouseover=function(){
// 		clearInterval(t);
// 	};
// 	banner.onmouseout=function(){
//         // banner_flag=false;
//         clearInterval(t);
// 		t=setInterval(fn,4000);
// 	};
// 	for(let i=0;i<banner_cil.length;i++){
// 		banner_cil[i].onclick=function(){
// 			// clearInterval(t);
// 			if (i!=num) {
// 				if(!banner_flag){
// 					return;
// 				}
//                 banner_flag=false;
//                 animate(banner_list[num],{opacity:0,zIndex:3},1000);
//                 animate(banner_list[i],{opacity:1,zIndex:5},2000,function () {
//                     banner_flag=true;
//                 });
//                 this.style.background="#fff";
// 				banner_cil[num].style.background="rgba(0, 0, 0, 0.5)";
// 				num=i;
// 			}
// 		}
// 	}
// 	function fn(){
// 		num++;
// 		if (num==banner_list.length) {
// 			num=0;
// 		}
// 		for(let i=0;i<banner_list.length;i++){
// 			banner_cil[i].style.background="rgba(0, 0, 0, 0.5)";
//             animate(banner_list[i],{opacity:0,zIndex:3},1000);
// 		}
// 		animate(banner_list[num],{opacity:1,zIndex:5},2000,function () {
// 			banner_flag=true;
//         });
// 		banner_cil[num].style.background="#fff";
// 	}
// 	//侧导航选项卡
// 	let bannerleft_list=document.getElementsByClassName("bannerleft-list")[0];
// 	let bannerleft_lis=bannerleft_list.getElementsByTagName("li");
// 	let pannel_con=document.getElementsByClassName("pannel-con");
//
// 	// console.log(bannerleft_lis,pannel_con);
// 	for(let i=0;i<bannerleft_lis.length;i++){
// 		bannerleft_lis[i].onmouseover=function(){
// 			pannel_con[i].style.display="block";
// 		}
// 		bannerleft_lis[i].onmouseout=function(){
// 			pannel_con[i].style.display="none";
// 		}
// 		pannel_con[i].onmouseover=function(){
// 			pannel_con[i].style.display="block";
// 		}
// 		pannel_con[i].onmouseout=function(){
// 			pannel_con[i].style.display="none";
// 		}
// 	}
// 	//楼层跳转
// 	let aside=document.querySelector("aside");
// 	let asides=document.querySelectorAll("aside li");
// 	let aside_top=document.querySelector(".aside-top");
// 	let aside_jump=document.querySelectorAll(".list-jump");
// 	let aside_save=0;
// 	let up=false;
// 	let down=true;
// 	let search=document.querySelector(".section6");
// 	console.log(aside_jump);
//     aside_top.onclick=function () {
// 		animate(document.documentElement,{scrollTop:0});
//         animate(document.body,{scrollTop:0});
//     };
//     let aside_color=["#64C333","#FF0036","#EA5F8D","#0AA6E8","#64C333","#F15453","#19C8A9","#FF0036"];
//     window.onscroll=function () {
//         let aside_height=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
//         aside_jump.forEach(function (val,index) {
// 			if(aside_height>=val.offsetTop-400){
// 				for(let i=0;i<aside_jump.length;i++){
//                     asides[i].style.background="#626262";
// 				}
// 				asides[index].style.background=`${aside_color[index]}`;
//                 aside_save=index;
// 			}
//         });
// 		if(aside_height>=aside_jump[0].offsetTop-400){
// 			if(down){
// 				down=false;
//                 animate(aside,{width:36,height:369},200,function () {
// 					up=true;
//                 });
//                 animate(search,{top:0},200);
// 			}
// 		}
// 		else {
// 			if(up){
// 				up=false;
//                 animate(aside,{width:0,height:0},200,function () {
// 					down=true;
//                 });
//                 animate(search,{top:-50},200);
// 			}
//
// 		}
//     };
//     asides.forEach(function (val,index) {
// 		val.onclick=function () {
// 			animate(document.documentElement,{scrollTop:aside_jump[index].offsetTop-50},200);
//             animate(document.body,{scrollTop:aside_jump[index].offsetTop-50},200);
//             aside_save=index;
//         };
//         val.onmouseenter=function () {
//             asides[index].style.background=`${aside_color[index]}`;
//         };
//         val.onmouseleave=function () {
//             for(let i=0;i<asides.length;i++){
//                 asides[i].style.background="#626262";
// 			}
//             asides[aside_save].style.background=`${aside_color[aside_save]}`;
//         }
//     })
// 	//右导航选项卡
// 	let rnav_list=document.querySelectorAll(".ydh3 li");
//     let rnav_cont=document.querySelectorAll(".ydhhover");
//     let rnav_first=document.querySelector(".ydh1");
//     let rnav_fcont=document.querySelector(".ydhhover-s");
//     console.log(rnav_first,rnav_fcont)
//     rnav_first.onmouseenter=function () {
//         animate(rnav_fcont,{right:35,opacity:1});
//         rnav_fcont.style.display="block";
//     };
//     rnav_first.onmouseleave=function () {
//         animate(rnav_fcont,{right:70,opacity:0},function () {
//             rnav_fcont.style.display="none";
//         });
//     };
//     rnav_list.forEach(function (val,index) {
//     	if(index==6){
//             val.onmouseenter=function () {
//                 animate(rnav_cont[index],{opacity:1});
//                 rnav_cont[index].style.display="block";
//             };
//             val.onmouseleave=function () {
//                 animate(rnav_cont[index],{opacity:0},function () {
//                     rnav_cont[index].style.display="none";
//                 });
//             }
// 		}
// 		else{
//             val.onmouseenter=function () {
//                 animate(rnav_cont[index],{right:35,opacity:1});
//                 rnav_cont[index].style.display="block";
//             };
//             val.onmouseleave=function () {
//                 animate(rnav_cont[index],{right:70,opacity:0},function () {
//                     rnav_cont[index].style.display="none";
//                 });
//             }
// 		}
//     });
//     rnav_list[rnav_list.length-1].onclick=function () {
//         animate(document.documentElement,{scrollTop:0});
//         animate(document.body,{scrollTop:0});
//     }
// };

