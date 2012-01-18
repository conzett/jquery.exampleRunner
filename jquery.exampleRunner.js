(function ($) {
    'use strict';
    var pluginName = 'exampleRunner',
        defaults = {
            propertyName: "value"
        };

    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);

        this.selectExample = function (number) {
            var target = $(children[number]);

            children.hide();
            target.show();

            //new Function(target.find('code').text())();
            eval(target.find('code').text());
        };

        var children = $(element).children(),
            select = $('<select></select>'),
            that = this;

        children.each(function (index) {
            var currentChild = $(children[index]),
                option;

            option = $('<option></option>').html(currentChild.attr('title')).attr('value', index);
            select.append(option);
        });

        select.change(function () {
            that.selectExample($(this).val());
        });

        $(this.element).prepend(select);

        this.init();
    }

    Plugin.prototype.init = function () {
        this.selectExample(0);
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });
    };

}(jQuery));