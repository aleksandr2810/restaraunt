import $ from 'jquery';

window.$ = window.jQuery = $;
import '@fortawesome/fontawesome-free/js/all.js';
import 'slick-carousel';

import 'inputmask'
import "@scss/main.scss";

$(document).ready(function () {
    $('.js-tab-trigger').on('click', function () {
        let tabName = $(this).data('tab'),
            tab = $('.js-tab-content[data-tab="' + tabName + '"]');

        $('.js-tab-trigger.active').removeClass('active');
        $(this).addClass('active');


        $('.js-tab-content.active').removeClass('active');
        tab.addClass('active');
    });

    $("#menu").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        let id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1000 мс
        $('body,html').animate({ scrollTop: top }, 1000);
    });


    $('.slider').slick({
        arrows: false,
        dots: true
    });

    let input = document.querySelectorAll('.js-date')[0];

    let dateInputMask = function dateInputMask(elm) {
        elm.addEventListener('keypress', function (e) {
            if (e.keyCode < 47 || e.keyCode > 57) {
                e.preventDefault();
            }

            let len = elm.value.length;

            // If we're at a particular place, let the user type the slash
            // i.e., 12/12/1212
            if (len !== 1 || len !== 3) {
                if (e.keyCode == 47) {
                    e.preventDefault();
                }
            }

            // If they don't add the slash, do it for them...
            if (len === 2) {
                elm.value += '/';
            }

            // If they don't add the slash, do it for them...
            if (len === 5) {
                elm.value += '/';
            }
        });
    };

    dateInputMask(input);



    let inputs = document.querySelectorAll('.time')[0];

    let dateInputMasks = function dateInputMasks(elm) {
        elm.addEventListener('keypress', function (e) {
            if (e.keyCode < 47 || e.keyCode > 57) {
                e.preventDefault();
            }

            let lens = elm.value.length;

            if (lens !== 1 || lens !== 3) {
                if (e.keyCode == 47) {
                    e.preventDefault();
                }
            }

            if (lens === 2) {
                elm.value += ':';
            }
        });
    };

    dateInputMasks(inputs);


    $('.menu-burger__header').click(function () {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.menu').toggleClass('open-menu');
    });



    $("#nav").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });


    $(window).scroll(function () {

        if ($(window).scrollTop() > 750) {

            $('.header').addClass('fixed');
        }
        else {
            $('.header').removeClass('fixed');
        }
    });
});