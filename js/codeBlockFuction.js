// 代码块功能依赖

$(function () {
    $('pre').wrap('<div class="code-area" style="position: relative"></div>');

    // 代码块一键复制
    $('pre').each(function () {
        var code_language = $(this).attr('class');
        console.log($(this))

        if (!code_language) {
            return true;
        };
        var lang_name = code_language.replace("line-numbers", "").trim().replace("language-", "").trim();

        // 首字母大写
        // lang_name = lang_name.slice(0, 1).toUpperCase() + lang_name.slice(1);
        console.log($(this))
        $(this).siblings(".code_lang").text(lang_name);
    });
    var $copyIcon = $('<i class="fas fa-copy code_copy" >复制</i>')
    var $notice = $('<div class="codecopy_notice"></div>')
    $('.code-area').prepend($copyIcon)
    $('.code-area').prepend($notice)
    // “复制成功”字出现
    function copy(text, ctx) {
        if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
            try {
                document.execCommand('copy') // Security exception may be thrown by some browsers.
                $(ctx).prev('.codecopy_notice')
                    .text("复制成功")
                    .animate({
                        opacity: 1,
                        top: 50
                    }, 450, function () {
                        setTimeout(function () {
                            $(ctx).prev('.codecopy_notice').animate({
                                opacity: 0,
                                top: 0
                            }, 650)
                        }, 400)
                    })
            } catch (ex) {
                $(ctx).prev('.codecopy_notice')
                    .text("复制失败")
                    .animate({
                        opacity: 1,
                        top: 30
                    }, 650, function () {
                        setTimeout(function () {
                            $(ctx).prev('.codecopy_notice').animate({
                                opacity: 0,
                                top: 0
                            }, 650)
                        }, 400)
                    })
                return false
            }
        } else {
            $(ctx).prev('.codecopy_notice').text("浏览器不支持复制")
        }
    }
    // 复制
    $('.code-area .fa-copy').on('click', function () {
        var selection = window.getSelection()
        var range = document.createRange()
        range.selectNodeContents($(this).siblings('pre').find('code')[0])
        selection.removeAllRanges()
        selection.addRange(range)
        var text = selection.toString()
        copy(text, this)
        selection.removeAllRanges()
    })
    console.log(tocbot)
    // tocbot.init({
    //     tocSelector: '#toc',
    //     contentSelector: '#post',
    //     headingsOffset: -($(window).height() * 0.4 - 45),
    //     collapseDepth: 0,
    //     headingSelector: 'h2, h3, h4'
    // });
});

