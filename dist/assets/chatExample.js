"use strict";



define('chatExample/app', ['exports', 'chatExample/resolver', 'ember-load-initializers', 'chatExample/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('chatExample/breakpoints', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    mobile: '(max-width: 767px)',
    tablet: '(min-width: 768px) and (max-width: 991px)',
    desktop: '(min-width: 992px) and (max-width: 1200px)'
  };
});
define('chatExample/components/basic-dropdown', ['exports', 'ember-basic-dropdown/components/basic-dropdown'], function (exports, _basicDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDropdown.default;
    }
  });
});
define('chatExample/components/basic-dropdown/content-element', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content-element'], function (exports, _contentElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contentElement.default;
    }
  });
});
define('chatExample/components/basic-dropdown/content', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('chatExample/components/basic-dropdown/trigger', ['exports', 'ember-basic-dropdown/components/basic-dropdown/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('chatExample/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
define('chatExample/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('chatExample/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('chatExample/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('chatExample/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
define('chatExample/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
define('chatExample/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('chatExample/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
define('chatExample/components/bs-carousel', ['exports', 'ember-bootstrap/components/bs-carousel'], function (exports, _bsCarousel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
define('chatExample/components/bs-carousel/slide', ['exports', 'ember-bootstrap/components/bs-carousel/slide'], function (exports, _slide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
define('chatExample/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
define('chatExample/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
define('chatExample/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('chatExample/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
define('chatExample/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
define('chatExample/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('chatExample/components/bs-dropdown/menu/link-to', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('chatExample/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('chatExample/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
define('chatExample/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('chatExample/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
define('chatExample/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('chatExample/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
define('chatExample/components/bs-form/element/control/radio', ['exports', 'ember-bootstrap/components/bs-form/element/control/radio'], function (exports, _radio) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _radio.default;
    }
  });
});
define('chatExample/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
define('chatExample/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
define('chatExample/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
define('chatExample/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
define('chatExample/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
define('chatExample/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
define('chatExample/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('chatExample/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
define('chatExample/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('chatExample/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
define('chatExample/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('chatExample/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
define('chatExample/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
define('chatExample/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
define('chatExample/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('chatExample/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
define('chatExample/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('chatExample/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
define('chatExample/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
define('chatExample/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('chatExample/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
define('chatExample/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('chatExample/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('chatExample/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
define('chatExample/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('chatExample/components/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-navbar/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('chatExample/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
define('chatExample/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('chatExample/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
define('chatExample/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('chatExample/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('chatExample/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
define('chatExample/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
define('chatExample/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
define('chatExample/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
define('chatExample/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('chatExample/components/ember-popper-targeting-parent', ['exports', 'ember-popper/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
define('chatExample/components/ember-popper', ['exports', 'ember-popper/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define('chatExample/components/fixtable-column-header', ['exports', 'fixtable-ember/components/fixtable-column-header'], function (exports, _fixtableColumnHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fixtableColumnHeader.default;
    }
  });
});
define('chatExample/components/fixtable-column-label', ['exports', 'fixtable-ember/components/fixtable-column-label'], function (exports, _fixtableColumnLabel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fixtableColumnLabel.default;
    }
  });
});
define('chatExample/components/fixtable-empty-state', ['exports', 'fixtable-ember/components/fixtable-empty-state'], function (exports, _fixtableEmptyState) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fixtableEmptyState.default;
    }
  });
});
define('chatExample/components/fixtable-footer', ['exports', 'fixtable-ember/components/fixtable-footer'], function (exports, _fixtableFooter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fixtableFooter.default;
    }
  });
});
define('chatExample/components/fixtable-grid', ['exports', 'fixtable-ember/components/fixtable-grid'], function (exports, _fixtableGrid) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fixtableGrid.default;
    }
  });
});
define('chatExample/components/fixtable-row-toggle', ['exports', 'fixtable-ember/components/fixtable-row-toggle'], function (exports, _fixtableRowToggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fixtableRowToggle.default;
    }
  });
});
define('chatExample/components/fixtable-row', ['exports', 'fixtable-ember/components/fixtable-row'], function (exports, _fixtableRow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fixtableRow.default;
    }
  });
});
define('chatExample/components/groups-overview/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        classNames: ['groups-overview'],
        groupService: Ember.inject.service(),
        searchService: Ember.inject.service(),

        sortResults(response) {
            let results = response.results;

            let sortedResults = [];

            this.group.forEach(group => {
                let filteredResults = results.filter(result => result.chatRoomName === group.name);

                let helloThere = {
                    name: group.name,
                    results: filteredResults
                };

                sortedResults.push(helloThere);
            });

            this.set('sortedResults', sortedResults);
        },

        actions: {
            searchRepo(searchValue) {
                // console.log(searchValue);
                // console.log(this.model);
                if (searchValue && searchValue.length > 1) {
                    return this.model.filter(group => {
                        const name = group.name; //,listingName = name[selectedLocale] || name['en-us'];

                        //this.set('currentPage', 1);
                        return name && name.toLowerCase().includes(searchValue.toLowerCase());
                    });
                } else {
                    return this.model;
                }
            },
            searchChatRooms() {
                if (this.group && this.term && this.group.length > 0) {
                    return this.get('searchService').searchChat(this.term, this.group).then(result => {
                        this.sortResults(result);
                        this.set('resultsCount', result.total);
                        this.set('resultsContent', result.results);
                        return result;
                    });
                }
            },
            onKeyPress(event) {
                if (event.key === 'Enter') {
                    this.send('searchChatRooms');
                }
            }
        }
    });
});
define("chatExample/components/groups-overview/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "BBoWaZOW", "block": "{\"symbols\":[\"result\",\"chatRoomName\",\"group\"],\"statements\":[[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"groups-container\"],[7],[0,\"\\n\"],[4,\"power-select-multiple\",null,[[\"search\",\"options\",\"placeholder\",\"selected\",\"onchange\"],[[25,\"action\",[[19,0,[]],\"searchRepo\"],null],[20,[\"model\"]],\"Select conversations to Search\",[20,[\"group\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[20,[\"group\"]]],null]],null]]],{\"statements\":[[0,\"    \"],[1,[19,3,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[3]},null],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"search-container\"],[7],[0,\"\\n  \"],[1,[25,\"input\",null,[[\"value\",\"keyPress\",\"placeholder\"],[[20,[\"term\"]],[25,\"action\",[[19,0,[]],\"onKeyPress\"],null],\"Type search term\"]]],false],[0,\"\\n  \"],[6,\"button\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"searchChatRooms\"],null],null],[7],[0,\"Search\"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"results-container\"],[7],[0,\"\\n  \"],[6,\"h4\"],[7],[0,\"Results Found: \"],[1,[18,\"resultsCount\"],false],[8],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"resultCountContainer\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"sortedResults\"]]],null,{\"statements\":[[0,\"      \"],[6,\"span\"],[9,\"class\",\"resultCountBubble\"],[7],[1,[19,2,[\"name\"]],false],[0,\": \"],[1,[19,2,[\"results\",\"length\"]],false],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"  \"],[8],[0,\"\\n\\n  \"],[6,\"br\"],[7],[8],[0,\"\\n\\n\"],[4,\"each\",[[20,[\"resultsContent\"]]],null,{\"statements\":[[0,\"      \"],[1,[19,1,[\"chatRoomName\"]],false],[0,\"\\n      \"],[6,\"li\"],[7],[1,[19,1,[\"from\",\"name\"]],false],[0,\": \"],[1,[19,1,[\"body\"]],false],[0,\" (\"],[1,[25,\"convert-timestamp\",[[19,1,[\"created\"]]],null],false],[0,\")\"],[8],[0,\"\\n      \"],[6,\"hr\"],[7],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[8],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "chatExample/components/groups-overview/template.hbs" } });
});
define('chatExample/components/link-to-cell/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        route: Ember.computed.alias('columnDef.route'),
        text: Ember.computed('dataRow', function () {
            return this.get('dataRow.' + this.get('columnDef.key'));
        }),
        cellId: Ember.computed.alias('dataRow.id'),
        actions: {
            clicked: function () {
                console.log('Group was clicked: navigating to ', this.get('dataRow').id);
            }
        }
    });
});
define("chatExample/components/link-to-cell/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "sTd4sl+z", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"center\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"clickable\"],[3,\"action\",[[19,0,[]],\"clicked\"]],[7],[0,\"\\n        \"],[1,[18,\"text\"],false],[0,\"\\n    \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "chatExample/components/link-to-cell/template.hbs" } });
});
define('chatExample/components/power-select-multiple', ['exports', 'ember-power-select/components/power-select-multiple'], function (exports, _powerSelectMultiple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectMultiple.default;
    }
  });
});
define('chatExample/components/power-select-multiple/trigger', ['exports', 'ember-power-select/components/power-select-multiple/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('chatExample/components/power-select', ['exports', 'ember-power-select/components/power-select'], function (exports, _powerSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelect.default;
    }
  });
});
define('chatExample/components/power-select/before-options', ['exports', 'ember-power-select/components/power-select/before-options'], function (exports, _beforeOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _beforeOptions.default;
    }
  });
});
define('chatExample/components/power-select/options', ['exports', 'ember-power-select/components/power-select/options'], function (exports, _options) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _options.default;
    }
  });
});
define('chatExample/components/power-select/placeholder', ['exports', 'ember-power-select/components/power-select/placeholder'], function (exports, _placeholder) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _placeholder.default;
    }
  });
});
define('chatExample/components/power-select/power-select-group', ['exports', 'ember-power-select/components/power-select/power-select-group'], function (exports, _powerSelectGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectGroup.default;
    }
  });
});
define('chatExample/components/power-select/search-message', ['exports', 'ember-power-select/components/power-select/search-message'], function (exports, _searchMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _searchMessage.default;
    }
  });
});
define('chatExample/components/power-select/trigger', ['exports', 'ember-power-select/components/power-select/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('chatExample/formats', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    time: {
      hhmmss: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }
    },
    date: {
      hhmmss: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }
    },
    number: {
      EUR: {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      },
      USD: {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }
    }
  };
});
define('chatExample/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
define('chatExample/helpers/app-version', ['exports', 'chatExample/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('chatExample/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _bsContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
define('chatExample/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _bsEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
define('chatExample/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _cancelAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
define('chatExample/helpers/convert-timestamp', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.convertTimestamp = convertTimestamp;
  function convertTimestamp(params /*, hash*/) {
    return new Date(params[0]).toDateString();
  }

  exports.default = Ember.Helper.helper(convertTimestamp);
});
define('chatExample/helpers/ember-power-select-is-group', ['exports', 'ember-power-select/helpers/ember-power-select-is-group'], function (exports, _emberPowerSelectIsGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsGroup', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
});
define('chatExample/helpers/ember-power-select-is-selected', ['exports', 'ember-power-select/helpers/ember-power-select-is-selected'], function (exports, _emberPowerSelectIsSelected) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsSelected', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
define('chatExample/helpers/ember-power-select-true-string-if-present', ['exports', 'ember-power-select/helpers/ember-power-select-true-string-if-present'], function (exports, _emberPowerSelectTrueStringIfPresent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectTrueStringIfPresent', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.emberPowerSelectTrueStringIfPresent;
    }
  });
});
define('chatExample/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(exports, 'equal', {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
define('chatExample/helpers/equals', ['exports', 'fixtable-ember/helpers/equals'], function (exports, _equals) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _equals.default;
    }
  });
  Object.defineProperty(exports, 'equals', {
    enumerable: true,
    get: function () {
      return _equals.equals;
    }
  });
});
define('chatExample/helpers/format-date', ['exports', 'ember-intl/helpers/format-date'], function (exports, _formatDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatDate.default;
    }
  });
});
define('chatExample/helpers/format-html-message', ['exports', 'ember-intl/helpers/format-html-message'], function (exports, _formatHtmlMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatHtmlMessage.default;
    }
  });
});
define('chatExample/helpers/format-message', ['exports', 'ember-intl/helpers/format-message'], function (exports, _formatMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatMessage.default;
    }
  });
});
define('chatExample/helpers/format-number', ['exports', 'ember-intl/helpers/format-number'], function (exports, _formatNumber) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatNumber.default;
    }
  });
});
define('chatExample/helpers/format-relative', ['exports', 'ember-intl/helpers/format-relative'], function (exports, _formatRelative) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatRelative.default;
    }
  });
});
define('chatExample/helpers/format-time', ['exports', 'ember-intl/helpers/format-time'], function (exports, _formatTime) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatTime.default;
    }
  });
});
define('chatExample/helpers/get-select-options', ['exports', 'fixtable-ember/helpers/get-select-options'], function (exports, _getSelectOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _getSelectOptions.default;
    }
  });
  Object.defineProperty(exports, 'getSelectOptions', {
    enumerable: true,
    get: function () {
      return _getSelectOptions.getSelectOptions;
    }
  });
});
define('chatExample/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
define('chatExample/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
define('chatExample/helpers/intl-get', ['exports', 'ember-intl/helpers/intl-get'], function (exports, _intlGet) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _intlGet.default;
    }
  });
});
define('chatExample/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
define('chatExample/helpers/is-empty', ['exports', 'ember-truth-helpers/helpers/is-empty'], function (exports, _isEmpty) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
define('chatExample/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('chatExample/helpers/l', ['exports', 'ember-intl/helpers/l'], function (exports, _l) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _l.default;
    }
  });
});
define('chatExample/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
define('chatExample/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
define('chatExample/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(exports, 'notEq', {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
define('chatExample/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
define('chatExample/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
define('chatExample/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _perform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
define('chatExample/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('chatExample/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('chatExample/helpers/t-html', ['exports', 'ember-intl/helpers/format-html-message'], function (exports, _formatHtmlMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatHtmlMessage.default;
    }
  });
});
define('chatExample/helpers/t', ['exports', 'ember-intl/helpers/t'], function (exports, _t) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _t.default;
    }
  });
});
define('chatExample/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _task) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
define('chatExample/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
define('chatExample/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'chatExample/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('chatExample/initializers/component-styles', ['exports', 'ember-component-css/initializers/component-styles', 'chatExample/mixins/style-namespacing-extras'], function (exports, _componentStyles, _styleNamespacingExtras) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = exports.default = undefined;
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _componentStyles.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _componentStyles.initialize;
    }
  });


  // eslint-disable-next-line ember/new-module-imports
  Ember.Component.reopen(_styleNamespacingExtras.default);
});
define('chatExample/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('chatExample/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
define('chatExample/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('chatExample/initializers/export-application-global', ['exports', 'chatExample/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('chatExample/initializers/load-bootstrap-config', ['exports', 'chatExample/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize
  };
});
define('chatExample/initializers/route-styles', ['exports', 'ember-component-css/initializers/route-styles'], function (exports, _routeStyles) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _routeStyles.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _routeStyles.initialize;
    }
  });
});
define("chatExample/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('chatExample/instance-initializers/ember-intl', ['exports', 'ember-intl/initializer'], function (exports, _initializer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.instanceInitializer = undefined;
  exports.instanceInitializer = _initializer.instanceInitializer;
  exports.default = _initializer.default;
});
define('chatExample/mixins/style-namespacing-extras', ['exports', 'ember-component-css/mixins/style-namespacing-extras'], function (exports, _styleNamespacingExtras) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _styleNamespacingExtras.default;
    }
  });
});
define('chatExample/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('chatExample/router', ['exports', 'chatExample/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('index', { path: '/' });
  });

  exports.default = Router;
});
define('chatExample/routes/index', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        intl: Ember.inject.service(),
        groupService: Ember.inject.service(),
        init() {
            this._super();
            this.get('intl').setLocale('en-us');
        },
        model() {
            return this.get('groupService').getGroups().then(groups => {
                return this.get('groupService').getFavorites().then(favs => {
                    const favoriteIds = favs.res.map(x => x.favoriteId);
                    const favoriteGroups = Ember.A();
                    groups.entities.forEach(group => {
                        if (favoriteIds.includes(group.id)) {
                            favoriteGroups.pushObject(group);
                            groups.entities.removeObject(group);
                        }
                    });

                    this.get('groupService').set('favoriteGroups', favoriteGroups);

                    const response = Ember.A([{
                        groupName: "Favorites", options: favoriteGroups
                    }, {
                        groupName: "Official Groups", options: groups.entities
                    }]);

                    return response;
                }).catch(error => {
                    return groups.entities;
                });
            });
        }
    });
});
define('chatExample/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('chatExample/services/auth-service', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    function _convertUrl(url, clientId) {
        return url + `/oauth/authorize?client_id=${clientId}&response_type=token&redirect_uri=${window.location.origin}`;
    }

    exports.default = Ember.Service.extend({
        restClientService: Ember.inject.service(),
        regionLocatorService: Ember.inject.service(),
        urlStateService: Ember.inject.service(),
        authToken: undefined,
        init() {
            let urlParams = new URLSearchParams(window.location.hash.substr(1));
            let token = urlParams.get('access_token');
            if (!token) {
                console.log("#### No Token");
                urlParams = new URLSearchParams(window.location.search);
                this.get('urlStateService').storeState();
                let clientId = urlParams.get('clientId');
                let regionUrl = this.get('regionLocatorService').getRegionAuthUrl(urlParams.get('region'));
                window.location = _convertUrl(regionUrl, clientId);
            } else {
                console.log(' TOKEN FOUND');
                this.authToken = token;
            }
        }
    });
});
define('chatExample/services/browser-storage-service', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    let parseItem = function (item) {
        let value;
        if (item) {
            value = JSON.parse(item);
        }
        return value;
    };

    exports.default = Ember.Service.extend({
        getLocalStorageItem: function (key) {
            let value = window.localStorage.getItem(key);
            return parseItem(value);
        },

        getSessionStorageItem: function (key) {
            let value = window.sessionStorage.getItem(key);
            return parseItem(value);
        },

        setLocalStorageItem: function (key, value) {
            window.localStorage.setItem(key, JSON.stringify(value));
        },

        setSessionStorageItem: function (key, value) {
            window.sessionStorage.setItem(key, JSON.stringify(value));
        },

        removeLocalStorageItem: function (key) {
            window.localStorage.removeItem(key);
        },

        removeSessionStorageItem: function (key) {
            window.sessionStorage.removeItem(key);
        }
    });
});
define('chatExample/services/chat-groups-service', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Service.extend({
        authService: Ember.inject.service(),
        urlStateService: Ember.inject.service(),
        regionLocatorService: Ember.inject.service(),
        restClientService: Ember.inject.service(),

        getCurrentChatGroups: function () {
            if (this.get('authService').authToken) {
                this.getCurrentUser().then(results => {
                    console.log(results);

                    let userId = results.id;

                    this.getFavorites(userId).then(results => {
                        console.log(results);
                        // this.getGroupDetailsFromGroupIds(results.res).then(moreResults => {
                        //     console.log(moreResults);
                        // });
                    });

                    //let groups = results.groups;
                    //let favorites = results.favorites;
                });
            }
        },

        getCurrentUser: function () {
            if (this.get('authService').authToken) {
                let state = this.get('urlStateService').cachedState();
                let urlParams = new URLSearchParams(state);
                let url = this.get('regionLocatorService').getRegionApiUrl(urlParams.get('region'));

                let headers = {
                    'Content-Type': 'application/json',
                    Authorization: 'bearer ' + this.get('authService').authToken
                };

                return this.get('restClientService').get(url + '/api/v2/users/me?expand=groups,favorites', { headers });
            }
        },

        getFavorites: function (userId) {
            if (this.get('authService').authToken) {
                let state = this.get('urlStateService').cachedState();
                let urlParams = new URLSearchParams(state);
                let url = this.get('regionLocatorService').getRegionUrl(urlParams.get('region'));

                let headers = {
                    'Content-Type': 'application/json',
                    //'Access-Control-Allow-Origin': '*',
                    Authorization: 'bearer ' + this.get('authService').authToken
                };

                return this.get('restClientService').get(url + '/directory/api/v3/people/' + userId + '/favorites?entityType=group,person', { headers });
            }
        },

        getGroupDetailsFromGroupIds: function (groups) {
            if (this.get('authService').authToken) {
                let state = this.get('urlStateService').cachedState();
                let urlParams = new URLSearchParams(state);
                let url = this.get('regionLocatorService').getRegionApiUrl(urlParams.get('region'));

                let headers = {
                    'Content-Type': 'application/json',
                    Authorization: 'bearer ' + this.get('authService').authToken
                };

                let ids = '';

                groups.forEach((x, index, array) => {
                    ids += x.id;
                    if (index !== array.length - 1) {
                        ids += ',';
                    }
                });

                return this.get('restClientService').get(url + '/api/v2/groups?id=' + ids, { headers });
            }
        }

    });
});
define('chatExample/services/group-service', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Service.extend({
        // store: Ember.inject.service(),
        authService: Ember.inject.service(),
        urlStateService: Ember.inject.service(),
        restClientService: Ember.inject.service(),
        regionLocatorService: Ember.inject.service(),
        allGroups: [],
        favoriteGroups: [],

        getFavorites: function () {
            if (this.get('authService').authToken) {
                let state = this.get('urlStateService').cachedState();
                let urlParams = new URLSearchParams(state);
                let url = this.get('regionLocatorService').getRegionApiUrl(urlParams.get('region'));

                return this.getCurrentUser().then(user => {
                    return this.get('restClientService').get(`https://apps.inindca.com/directory/api/v3/people/${user.id}/favorites?entityType=person,group`, { headers: { 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.get('authService').authToken } });
                });
            }
        },

        getGroups: function () {
            if (this.get('authService').authToken) {
                let state = this.get('urlStateService').cachedState();
                let urlParams = new URLSearchParams(state);
                let url = this.get('regionLocatorService').getRegionApiUrl(urlParams.get('region'));
                return this.get('restClientService').get(url + '/api/v2/groups?pageSize=500', { headers: { 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.get('authService').authToken } }).then(results => {
                    this.allGroups = results.entities;
                    return results;
                });
            }
        },

        getCurrentUser: function () {
            if (this.get('authService').authToken) {
                let state = this.get('urlStateService').cachedState();
                let urlParams = new URLSearchParams(state);
                let url = this.get('regionLocatorService').getRegionApiUrl(urlParams.get('region'));

                let headers = {
                    'Content-Type': 'application/json',
                    Authorization: 'bearer ' + this.get('authService').authToken
                };

                return this.get('restClientService').get(url + '/api/v2/users/me?expand=groups,favorites', { headers });
            }
        }
    });
});
define('chatExample/services/intl', ['exports', 'ember-intl/services/intl'], function (exports, _intl) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _intl.default;
    }
  });
});
define('chatExample/services/region-locator-service', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    const regions = [{
        extension: 'com',
        domain: 'inindca',
        region: 'inindca'
    }, {
        extension: 'com',
        domain: 'mypurecloud',
        region: 'us-east-1'
    }, {
        extension: 'cloud',
        domain: 'usw2.pure',
        region: 'us-west-2'
    }, {
        extension: 'com.au',
        domain: 'mypurecloud',
        region: 'ap-southeast-2'
    }, {
        extension: 'jp',
        domain: 'mypurecloud',
        region: 'ap-northeast-1'
    }, {
        extension: 'ie',
        domain: 'mypurecloud',
        region: 'eu-west-1'
    }, {
        extension: 'de',
        domain: 'mypurecloud',
        region: 'eu-central-1'
    }, {
        extension: 'cloud',
        domain: 'apne2.pure',
        region: 'ap-northeast-2',
        icon: 'seoul'
    }, {
        extension: 'cloud',
        domain: 'euw2.pure',
        region: 'eu-west-2'
    }, {
        extension: 'cloud',
        domain: 'cac1.pure',
        region: 'ca-central-1'
    }, {
        extension: 'cloud',
        domain: 'aps1.pure',
        region: 'ap-south-1'
    }, {
        extension: 'cloud',
        domain: 'use2.us-gov-pure',
        region: 'fedramp-use2-core'
    }, {
        extension: 'cloud',
        domain: 'use2.maximus-pure.cloud',
        region: 'maximus-use2-core'
    }];

    function _getRegion(region) {
        for (var i = 0; i < regions.length; i++) {
            if (regions[i].region == region) {
                return regions[i];
            }
        }
    }

    exports.default = Ember.Service.extend({
        region: undefined,
        getRegionUrl(region) {
            this.region = _getRegion(region);
            return `https://apps.${this.region.domain}.${this.region.extension}`;
        },
        getRegionApiUrl(region) {
            this.region = _getRegion(region);
            return `https://api.${this.region.domain}.${this.region.extension}`;
        },
        getRegionAuthUrl(region) {
            this.region = _getRegion(region);
            return `https://login.${this.region.domain}.${this.region.extension}`;
        }
    });
});
define('chatExample/services/rest-client-service', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Service.extend({
        getOptions: function (token) {
            return {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'bearer ' + token
                }
            };
        },
        get: function (url, options) {
            options.url = url;
            return $.ajax(options);
        },
        post: function (url, data, options) {
            options.url = url;
            options.method = 'POST';
            // options.data = options.processData ? JSON.stringify(data) : data;
            options.data = JSON.stringify(data);
            return $.ajax(options);
        },
        put: function (url, data, options) {
            options.url = url;
            options.method = 'PUT';
            options.data = options.processData ? JSON.stringify(data) : data;
            return $.ajax(options);
        },
        delete: function (url, options) {
            options.url = url;
            options.method = 'DELETE';
            return $.ajax(options);
        }
    });
});
define('chatExample/services/search-service', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Service.extend({
        store: Ember.inject.service(),
        authService: Ember.inject.service(),
        urlStateService: Ember.inject.service(),
        restClientService: Ember.inject.service(),
        regionLocatorService: Ember.inject.service(),
        groupService: Ember.inject.service(),

        getBaseUrl: function () {
            let state = this.get('urlStateService').cachedState();
            let urlParams = new URLSearchParams(state);
            return this.get('regionLocatorService').getRegionApiUrl(urlParams.get('region'));
        },
        searchChatRooms: async function (term, chatRooms) {
            if (this.get('authService').authToken) {
                let results = [];
                chatRooms.forEach(async room => {
                    let searchResults = await this.searchChat(term, room);
                    results.push({ id: room.id, results: searchResults });
                });
                return results;
            }
        },
        searchChat: function (term, chatRooms) {
            let jabberIds = chatRooms.map(x => x.chat.jabberId);
            let restClient = this.get('restClientService');
            let baseUrl = this.getBaseUrl();
            let url = `${baseUrl}/api/v2/search`;
            let data = {
                types: ['messages'],
                sortBy: 'created',
                sortOrder: 'DESC',
                expand: ['to', 'from'],
                pageNumber: 1,
                pageSize: 25,
                query: [{
                    type: 'SIMPLE',
                    value: term,
                    fields: ['body']
                }, {
                    type: 'EXACT',
                    fields: ['targetJids'],
                    values: jabberIds
                }]
            };
            return restClient.post(url, data, restClient.getOptions(this.get('authService').authToken)).then(response => {
                let results = response.results;

                let groupService = this.get('groupService');

                results.forEach(x => {
                    let jid = x.to.jid;

                    let group = groupService.favoriteGroups.find(y => {
                        return y.chat.jabberId.startsWith(jid);
                    });
                    if (!group) {
                        group = groupService.allGroups.find(y => {
                            return y.chat.jabberId.startsWith(jid);
                        });
                    }
                    if (group) {
                        x.chatRoomName = group.name;
                    }
                });

                return response;
            });
        }
    });
});
define('chatExample/services/text-measurer', ['exports', 'ember-text-measurer/services/text-measurer'], function (exports, _textMeasurer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textMeasurer.default;
    }
  });
});
define('chatExample/services/url-state-service', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Service.extend({
        browserStorageService: Ember.inject.service(),
        storeState: function () {
            this.get('browserStorageService').setLocalStorageItem('GroupExample.UrlState', window.location.search);
        },
        cachedState: function () {
            return this.get('browserStorageService').getLocalStorageItem('GroupExample.UrlState');
        }
    });
});
define("chatExample/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "57kXWdqj", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"main\"],[7],[0,\"\\n    \"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "chatExample/templates/application.hbs" } });
});
define('chatExample/templates/components/ember-popper-targeting-parent', ['exports', 'ember-popper/templates/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
define('chatExample/templates/components/ember-popper', ['exports', 'ember-popper/templates/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define("chatExample/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qCmIvb6k", "block": "{\"symbols\":[],\"statements\":[[6,\"span\"],[9,\"class\",\"title\"],[7],[0,\"Dude, where's my chat?\"],[8],[0,\"\\n\"],[1,[25,\"groups-overview\",null,[[\"model\"],[[20,[\"model\"]]]]],false]],\"hasEval\":false}", "meta": { "moduleName": "chatExample/templates/index.hbs" } });
});
define('chatExample/utils/intl/missing-message', ['exports', 'ember-intl/utils/missing-message'], function (exports, _missingMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _missingMessage.default;
    }
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

if (!runningTests) {
  require("chatExample/app")["default"].create({"name":"chatExample","version":"0.0.0+817775f6"});
}
//# sourceMappingURL=chatExample.map
