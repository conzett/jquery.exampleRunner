var testMarkup = '<div id="examples">',
    testElement = '<div id="test"></div>',
    container;

testMarkup += '<div title="Example 1" data-group="Basic Group"><code>$("#test").attr("data-test1", "Example 1a");</code><code>$("#test").attr("data-test2", "Example 1b");</code></div>';
testMarkup += '<div title="Example 2" data-group="Basic Group"><code>$("#test").attr("data-test1", "Example 2");</code></div>';
testMarkup += '<div title="Example 3"><code>$("#test").attr("data-test1", "Example 3");</code></div>';
testMarkup += '</div>';

module("Main", {
    setup: function () {
        'use strict';
        $('#qunit-fixture').append(testMarkup, testElement);
        $('#examples').exampleRunner();
    }
});

test("By default all but the first example should be hidden.", function () {
    'use strict';
    equal($($('#examples').children(':not(select)')[1]).is(':visible'), false, "Expect the second child to be hidden.");
});

test("By default the code from the first example should be executed.", function () {
    'use strict';
    equal($('#test').attr('data-test1'), 'Example 1a', "Expect the attribute to be set by example 1.");
});

test("Check to assure both code blocks are executed.", function () {
    'use strict';
    equal($('#test').attr('data-test2'), 'Example 1b', "Expect the attribute to be set by example 1.");
});

test("Drop down for examples is generated.", function () {
    'use strict';
    var select = $('#examples').find('select'),
        options;

    options = select.find('option');
    equal($(options[0]).text(), 'Example 1', "Expect the first options text to be the same as the first example's title.");
    equal($(options[1]).text(), 'Example 2', "Expect the second options text to be the same as the second example's title.");
});

test("Test changing the drop down.", function () {
    'use strict';
    var examples = $('#examples'),
        select,
        children;

    children = examples.children(':not(select)');
    select = examples.find('select');
    select.val('1').change();

    equal($('#test').attr('data-test1'), 'Example 2', "Expect the attribute to be set by example 2.");
    equal($(children[1]).is(':visible'), true, "Expect the second child to be visible.");
    equal($(children[0]).is(':visible'), false, "Expect the first child to be hidden.");
});

test("Test option grouping", function () {
    'use strict';
    var examples = $('#examples'),
        options;

    options = examples.find('option');

    equal($(options[0]).parent()[0].tagName, 'OPTGROUP', "Expect this options parent to be an optgroup");
    equal($(options[0]).parent().attr('label'), 'Basic Group', "Expect the options parent to have a label");
    equal($(options[2]).parent()[0].tagName, 'SELECT', "Expect this options parent to be the select elment");
});