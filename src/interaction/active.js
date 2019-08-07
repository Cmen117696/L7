import Interaction from './base';
export default class Active extends Interaction {
  constructor(cfg) {
    super({
      processEvent: 'mousemove',
      resetEvent: 'mouseleave',
      ...cfg
    });
  }
  process(ev) {
    this.layer._addActiveFeature(ev);
  }
  reset() {
    this.layer._resetStyle();
  }
}