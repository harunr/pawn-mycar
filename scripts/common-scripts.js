;
(function ($) {
    $(function () {

        // Begin input common focus and blur for value.
        $('input:text, input:password,input[type="email"],input[type="tel"],input[type="number"],input[type="search"], textarea').focus(function () {
            if (this.value == this.defaultValue) {
                this.value = '';
            }
        }).blur(function () {
            if (!this.value) {
                this.value = this.defaultValue;
            }
        })
        // Ends input common focus and blur for value.


        //sticky-footer
        function stickyFooter(selector) {
            var getFooterHeight = $(selector).parents('body').find('footer').outerHeight();

            function stickyfun(selector) {
                if (selector.length && $(window).width() > 767) {
                    $(selector).parents('html').addClass('sticky');
                    $(selector).parents('html').find('.main-wrap').css({
                        'padding-bottom': getFooterHeight
                    })
                }
            }
            stickyfun(selector);
            $(window).resize(function () {
                var footerHeight = $('.sticky').find('footer').outerHeight();
                $('.sticky').find('.main-wrap').css({
                    'padding-bottom': footerHeight
                });

                if ($(window).width() < 767) {
                    $('.sticky').find('.main-wrap').css({
                        'padding-bottom': 0
                    });
                }
            })
        }

        //call like this
        //stickyFooter('.home-content');

        $('.feature-item').each(function () {
                var content = $(this).find('p').height();
                if (content <= 31) {
                    $(this).find('p').css('line-height', '42px')
                }
            })

      




    }) // End ready function.

})(jQuery)