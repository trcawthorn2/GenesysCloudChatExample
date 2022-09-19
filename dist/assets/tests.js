'use strict';

define('chatExample/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'app.js should pass ESLint\n\n1:1 - Definition for rule \'ember/require-return-from-computed\' was not found (ember/require-return-from-computed)\n7:1 - Expected indentation of 4 spaces but found 2. (indent)\n8:1 - Expected indentation of 4 spaces but found 2. (indent)\n9:1 - Expected indentation of 4 spaces but found 2. (indent)');
  });

  QUnit.test('breakpoints.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'breakpoints.js should pass ESLint\n\n1:1 - Definition for rule \'ember/require-return-from-computed\' was not found (ember/require-return-from-computed)\n2:1 - Expected indentation of 4 spaces but found 2. (indent)\n3:1 - Expected indentation of 4 spaces but found 2. (indent)\n4:1 - Expected indentation of 4 spaces but found 2. (indent)');
  });

  QUnit.test('components/groups-overview/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/groups-overview/component.js should pass ESLint\n\n1:1 - Definition for rule \'ember/require-return-from-computed\' was not found (ember/require-return-from-computed)\n8:18 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n9:19 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n11:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n13:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n14:20 - Don\'t use observers if possible (ember/no-observers)\n14:90 - Missing space before opening brace. (space-before-blocks)\n24:17 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)');
  });

  QUnit.test('components/link-to-cell/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/link-to-cell/component.js should pass ESLint\n\n1:1 - Definition for rule \'ember/require-return-from-computed\' was not found (ember/require-return-from-computed)\n5:12 - Use import { alias } from \'@ember/object/computed\'; instead of using Ember.computed.alias (ember/new-module-imports)\n6:11 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n7:35 - Infix operators must be spaced. (space-infix-ops)\n9:13 - Use import { alias } from \'@ember/object/computed\'; instead of using Ember.computed.alias (ember/new-module-imports)\n11:28 - Missing space before opening brace. (space-before-blocks)\n12:13 - Unexpected console statement. (no-console)');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n1:1 - Definition for rule \'ember/require-return-from-computed\' was not found (ember/require-return-from-computed)');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass ESLint\n\n1:1 - Definition for rule \'ember/require-return-from-computed\' was not found (ember/require-return-from-computed)\n5:1 - Expected indentation of 4 spaces but found 2. (indent)\n6:1 - Expected indentation of 4 spaces but found 2. (indent)\n10:1 - Expected indentation of 4 spaces but found 2. (indent)');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass ESLint\n\n1:1 - Definition for rule \'ember/require-return-from-computed\' was not found (ember/require-return-from-computed)\n5:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n6:11 - Missing space before opening brace. (space-before-blocks)');
  });

  QUnit.test('services/auth-service.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/auth-service.js should pass ESLint\n\n1:1 - Definition for rule \'ember/require-return-from-computed\' was not found (ember/require-return-from-computed)\n4:36 - Missing space before opening brace. (space-before-blocks)\n5:15 - Infix operators must be spaced. (space-infix-ops)\n9:24 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n10:27 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n11:22 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n13:5 - Call this._super(...arguments) in init hook (ember/require-super-in-init)\n13:11 - Missing space before opening brace. (space-before-blocks)\n22:1 - Trailing spaces not allowed. (no-trailing-spaces)\n24:13 - Unexpected console statement. (no-console)');
  });

  QUnit.test('services/browser-storage-service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/browser-storage-service.js should pass ESLint\n\n1:1 - Definition for rule \'ember/require-return-from-computed\' was not found (ember/require-return-from-computed)');
  });

  QUnit.test('services/group-service.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/group-service.js should pass ESLint\n\n1:1 - Definition for rule \'ember/require-return-from-computed\' was not found (ember/require-return-from-computed)\n5:12 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n6:18 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n7:22 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n8:24 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n9:27 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n10:26 - Missing space before opening brace. (space-before-blocks)\n11:9 - Expected space(s) after "if". (keyword-spacing)\n11:46 - Missing space before opening brace. (space-before-blocks)\n15:57 - Infix operators must be spaced. (space-infix-ops)\n15:134 - Unnecessarily quoted property \'Authorization\' found. (quote-props)\n15:160 - Infix operators must be spaced. (space-infix-ops)\n17:6 - Unexpected trailing comma. (comma-dangle)');
  });

  QUnit.test('services/region-locator-service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/region-locator-service.js should pass ESLint\n\n1:1 - Definition for rule \'ember/require-return-from-computed\' was not found (ember/require-return-from-computed)\n7:26 - Unexpected trailing comma. (comma-dangle)\n12:28 - Unexpected trailing comma. (comma-dangle)\n17:28 - Unexpected trailing comma. (comma-dangle)\n22:33 - Unexpected trailing comma. (comma-dangle)\n27:33 - Unexpected trailing comma. (comma-dangle)\n32:28 - Unexpected trailing comma. (comma-dangle)\n37:31 - Unexpected trailing comma. (comma-dangle)\n48:28 - Unexpected trailing comma. (comma-dangle)\n53:31 - Unexpected trailing comma. (comma-dangle)\n58:29 - Unexpected trailing comma. (comma-dangle)\n63:36 - Unexpected trailing comma. (comma-dangle)\n68:36 - Unexpected trailing comma. (comma-dangle)\n93:6 - Unexpected trailing comma. (comma-dangle)');
  });

  QUnit.test('services/rest-client-service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/rest-client-service.js should pass ESLint\n\n1:1 - Definition for rule \'ember/require-return-from-computed\' was not found (ember/require-return-from-computed)');
  });

  QUnit.test('services/url-state-service.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/url-state-service.js should pass ESLint\n\n1:1 - Definition for rule \'ember/require-return-from-computed\' was not found (ember/require-return-from-computed)\n5:28 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n6:27 - Missing space before opening brace. (space-before-blocks)\n9:28 - Missing space before opening brace. (space-before-blocks)');
  });
});
define('chatExample/tests/helpers/ember-power-select', ['exports', 'ember-power-select/test-support/helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectChoose = exports.touchTrigger = exports.nativeTouch = exports.clickTrigger = exports.typeInSearch = exports.triggerKeydown = exports.nativeMouseUp = exports.nativeMouseDown = exports.findContains = undefined;
  exports.default = deprecatedRegisterHelpers;


  function deprecateHelper(fn, name) {
    return function (...args) {
      (true && !(false) && Ember.deprecate(`DEPRECATED \`import { ${name} } from '../../tests/helpers/ember-power-select';\` is deprecated. Please, replace it with \`import { ${name} } from 'ember-power-select/test-support/helpers';\``, false, { until: '1.11.0', id: `ember-power-select-test-support-${name}` }));

      return fn(...args);
    };
  }

  let findContains = deprecateHelper(_helpers.findContains, 'findContains');
  let nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  let nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  let triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  let typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  let clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  let nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  let touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  let selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, { until: '1.11.0', id: 'ember-power-select-test-support-register-helpers' }));

    return (0, _helpers.default)();
  }

  exports.findContains = findContains;
  exports.nativeMouseDown = nativeMouseDown;
  exports.nativeMouseUp = nativeMouseUp;
  exports.triggerKeydown = triggerKeydown;
  exports.typeInSearch = typeInSearch;
  exports.clickTrigger = clickTrigger;
  exports.nativeTouch = nativeTouch;
  exports.touchTrigger = touchTrigger;
  exports.selectChoose = selectChoose;
});
define('chatExample/tests/integration/components/groups-overview/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | groups-overview', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "/WEpnjCb",
        "block": "{\"symbols\":[],\"statements\":[[1,[18,\"groups-overview\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Y7FcXxgu",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"groups-overview\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('chatExample/tests/test-helper', ['chatExample/app', 'chatExample/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('chatExample/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('integration/components/groups-overview/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'integration/components/groups-overview/component-test.js should pass ESLint\n\n1:1 - Definition for rule \'ember/require-return-from-computed\' was not found (ember/require-return-from-computed)\n7:1 - Expected indentation of 4 spaces but found 2. (indent)\n9:1 - Expected indentation of 4 spaces but found 2. (indent)\n13:1 - Expected indentation of 8 spaces but found 4. (indent)\n15:1 - Expected indentation of 8 spaces but found 4. (indent)\n17:1 - Expected indentation of 8 spaces but found 4. (indent)\n18:1 - Expected indentation of 8 spaces but found 4. (indent)\n24:1 - Expected indentation of 8 spaces but found 4. (indent)\n25:1 - Expected indentation of 4 spaces but found 2. (indent)');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n1:1 - Definition for rule \'ember/require-return-from-computed\' was not found (ember/require-return-from-computed)');
  });
});
define('chatExample/config/environment', [], function() {
  var prefix = 'chatExample';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('chatExample/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
