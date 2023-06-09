import Scrollbar from 'smooth-scrollbar';

export class HorizontalScrollPlugin extends Scrollbar.ScrollbarPlugin {
  static pluginName = 'horizontalScroll';

  transformDelta(delta: any, fromEvent:any) {
    if (!/wheel/.test(fromEvent.type)) {
      return delta;
    }

    const { x, y } = delta;

    return {
      y: 0,
      x: Math.abs(x) > Math.abs(y) ? x : y,
      // x: Math.sign(x || y) * Math.sqrt(x*x + y*y),
    };
  }
}