/**
 * Created by xin on 2018-09-20.
 */
$(function($){
    /*fullpage初始化*/
    $('#fullpage').fullpage({
        //每屏的颜色背景设置
        sectionsColor:["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        //设置内容的对齐方式
        verticalCentered:false,
        //导航栏显示
        navigation:true,
        //每页滚动时间设置
        scrollingSpeed:1000,
        //实现点击向下滚动按钮，但最好是在fullpage加载完成后才能点击
        afterRender: function(){
           $('.more').on('click', function(){
               //执行下一页
               $.fn.fullpage.moveSectionDown();
           });
           //第四屏购物车动画完成后执行的方法
           $('.screen04 .cart').on('transitionend', function(){
               $('.screen04 .text').addClass('show');
               //$('.screen04 .address').show().find('img:last').fadeIn(1000);
               $('.screen04 .address').addClass('show');
           });
            //第八屏手跟着鼠标移动
            //第八屏注册监听鼠标事件
            $('.screen08').on('mousemove', function(e){
                //设置手的坐标
                $(this).find('.hand').css({
                   'left': e.clientX - 200,
                    'top': e.clientY - 30
                });
            }).find('.again').on('click', function(){
                //删除所有动画，返回第一页
                //动画：
                /*
                * 1.now 类
                * 2.leaved类
                * 3.show 类
                * 4.js 设置css属性
                * 5.js 设置fadeIn()方法
                *  4.5 的结果会在元素添加了style属性
                * */
                $('.now, .show, .leaved').removeClass('now').removeClass('show').removeClass('leaved');
                $('.content [style]').removeAttr('style');
                $.fn.fullpage.moveTo(1);
            });
        },
        //动画很执行等完全加载了页面才开始
        afterLoad: function(anchorLink, index){
            /*index 序号 1开始  当前屏的序号*/
            $('.section').eq(index-1).addClass('now');
        },
        //因沙发要滚动到下一屏，注册这个监听并作动画
        onLeave: function(index, nextIndex, direction){
            if (index == 2 && nextIndex == 3) {
                $('.section').eq(index-1).addClass('leaved');
            } else if (index == 3 && nextIndex == 4) {
                $('.section').eq(index-1).addClass('leaved');
            } else if (index == 5 && nextIndex == 6) {
                $('.section').eq(index-1).addClass('leaved');
                $('.screen06 .box').addClass('show');
            } else if (index == 6 && nextIndex == 7) {
                $('.screen07 .text').addClass('show');
                $('.screen07 .star img').each(function(index,item){
                    console.log(index);
                    $(this).delay(index * 0.5 * 1000).fadeIn();
                });
                /*可通过css('transition-delay,index' * 0.5) +  addClass*/
            }
        }
    });
});