$(function() {
    $('#yx>li').mouseenter(function() {
        $(this).css({
            "background-color": "#fff",
            "cursor": "pointer"
        })
    })
    $('#yx>li').mouseout(function() {
        $(this).css({
            "background-color": "",
            "cursor": "pointer"
        })
    })

    //$("#yx>li").hover(function () {
    //$("#xiala").show();
    //}, function () {
    //$("#xiala").hide();
    //})

    // $('#yx>li').mouseenter(function() {
    // $('#xiala').css('visibility', 'visible')
    //})
    // $('#yx>li').mouseout(function() {
    // $('#xiala>ul').css('visibility', '')
    //})
    $(document).ready(function() {
        $('#yx>li').hover(function() {
            $("#xiala").css('display', 'block');
        }, function() {
            $("#xiala").css('display', 'none');
        });
        $("#xiala").hover(function() {
            $(this).css('display', 'block');;
        }, function() {
            $(this).css('display', 'none');
        });
    })

})
$(function() {
    $('#loldhl>li').mouseenter(function() {
        $(this).addClass('zhzx').siblings().removeClass('zhzx'); //当前的ul>li添加一个类'active-tit'。方法返回被选元素的所有同级元素。
        //removeClass('active-tit')方法从被选元素移除一个或多个类。
        // var i = $(this).index();
        // $('#tp div').eq(i).css('display', 'block').addClass('active-content').siblings('#tp div').css(
        //     'display', 'none'
        // )

    })
    $(function() {
        $('#ssyg>.yg>dl').mouseover(function() {
            var i = $('#ssyg>.yg>dl').index(this);
            $('#ssyg>.yg>dl>dt>make').css({
                'background-color': '#ebebeb',
                'color': '#7a7a7a',
                "cursor": "pointer",
            })
            $('#ssyg>.yg>dl>dt>make').eq(i).css({
                'background-color': '#dlab57',
                'color': '#fff',
                "cursor": "pointer",
            })
            $('#ssyg>.yg>dl').css({
                'color': '#ccc',
                "cursor": "pointer",
            })
            $('#ssyg>.yg>dl').eq(i).css({
                'color': '#dlab57',
                "cursor": "pointer",
            })


            $('#ssyg>.yg>dl').mouseover(function() {
                $('#ssyg>.yg>dl>dt>make').css({
                    'background-color': '#ebebeb',
                    "cursor": "pointer",
                })
                $('#ssyg>.yg>dl').css({
                    'color': '#dlab57',
                    "cursor": "pointer",
                })
            })
        })

    })

})
// $(function() {
//         $('#zhxw>li').mouseenter(function() {
//             $(this).addClass('bb').siblings().removeClass('bb'); //当前的ul>li添加一个类'active-tit'。方法返回被选元素的所有同级元素。
//             //removeClass('active-tit')方法从被选元素移除一个或多个类。
//             var i = $(this).index();
//             $('#ssyg div').eq(i).css('display', 'block').addClass('yg').siblings('#ssyg div').css(
//                 'display', 'none'
//             )

//         })
//     })
    // $(document).ready(function() {
    //     $("#zhxw>li").hover(function() {
    //         var i = $('#ssyg div').index(this);
    //         $("#zhxw>li").eq($(this).index()).addClass("bb").siblings().removeClass("bb");
    //         $("#ssyg div").hide().eq($(i).index()).show();
    //     });
    // })