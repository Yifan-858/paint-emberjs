import { module, test } from 'qunit';
import { setupTest } from 'painting-game/tests/helpers';

module('Unit | Route | design', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:design');
    assert.ok(route);
  });
});
