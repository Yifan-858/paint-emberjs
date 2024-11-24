import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PlayController extends Controller {
  @tracked color = 'blue';

  @action
  changeColor(newColor) {
    this.color = newColor;
    console.log(this.color);
  }
}
