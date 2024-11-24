import { module, test } from 'qunit';
import { setupRenderingTest } from 'painting-game/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | picture-grid', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<PictureGrid />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <PictureGrid>
        template block text
      </PictureGrid>
    `);

    assert.dom().hasText('template block text');
  });
});
