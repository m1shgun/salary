'use strict';
$(function () {
    function Button() {
        this.main = $(document);
        this.cont = $('.cont');
        this.b2 = $('.b2');
        this.pic = $('.pic2');
        this.text = $('.text1');
        this.bottom = $('.bottom');
        this.bottomText = ['Упс!', 'Ахаха! 😆', 'Ой...', 'Опа!', 'Как же так! 😭', '凸(¬‿¬)凸', 'Не туда! 😇'];
        this.bottomText.push('Неверно! =)', 'Попробуй ещё раз! 🙋', 'Эх... ヅ', 'Недоволен?! 😲');

        this.init();
    }

    Button.prototype.init = function () {
        var _self = this;

        this.main.on('mousedown contextmenu', function(e) {
            e.preventDefault();
        });
        
        this.b2.on('mouseover mousedown mouseup', function () {
            // Расчет случайной позиции кнопки
            this.style.bottom = Math.random() * (_self.cont.height() - _self.b2.innerHeight()) + 'px';
            this.style.right = Math.random() * (_self.cont.width() - _self.b2.innerWidth()) + 'px';

            // Генерация случайных сообщений
            _self.bottom.html(_self.bottomText[ Math.floor(Math.random() * _self.bottomText.length) ])
                .fadeIn(300, function () {
                    $(this).fadeOut(600);
            });
        });

        this.buttonClick();
    };

    Button.prototype.buttonClick = function () {
        var _self = this;
        
        // Прячем и показываем элементы 
        this.b2.prev().click(function (e) {
            $(this).hide().next().hide().next().show();
            _self.text.hide().next().show();
            _self.pic.hide().nextAll('div').show();
            _self.bottom.html('Спасибо! Ваше мнение очень важно для нас 😈');
            _self.b2.next().hover(
                function () {
                _self.bottom.fadeIn(50);},
                function () {
                _self.bottom.fadeOut(50);}
            );
        });
    };

    new Button();
});
