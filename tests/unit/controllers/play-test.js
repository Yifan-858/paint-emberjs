import { module, test } from 'qunit';
import { setupTest } from 'painting-game/tests/helpers';

module('Unit | Controller | play', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:play');
    assert.ok(controller);
  });
});
