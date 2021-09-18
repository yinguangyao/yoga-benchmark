import Yoga from "yoga-layout-prebuilt";
import BenchMark from 'benchmark';
import BeautifyBenchMark from 'beautify-benchmark';

const suite = new BenchMark.Suite;

suite.add('300*300', function() {
    const node = Yoga.Node.create();

  node.setWidth(1000);
  node.setHeight(1000);

  for (let i = 0; i < 300; i++) {
    const parent = Yoga.Node.create();
    parent.setWidth(30);
    parent.setHeight(30);
    parent.setPadding(Yoga.EDGE_TOP, 1);
    parent.setPadding(Yoga.EDGE_RIGHT, 1);
    parent.setPadding(Yoga.EDGE_BOTTOM, 1);
    parent.setPadding(Yoga.EDGE_LEFT, 1);
    parent.setMargin(Yoga.EDGE_TOP, 1);
    parent.setMargin(Yoga.EDGE_RIGHT, 1);
    parent.setMargin(Yoga.EDGE_BOTTOM, 1);
    parent.setMargin(Yoga.EDGE_LEFT, 1);
    parent.setDisplay(Yoga.DISPLAY_FLEX);
    parent.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    for (let j = 0; j < 300; j++) {
      const child = Yoga.Node.create();
      child.setWidth(10);
      child.setHeight(10);
      child.setPadding(Yoga.EDGE_TOP, 1);
      child.setPadding(Yoga.EDGE_RIGHT, 1);
      child.setPadding(Yoga.EDGE_BOTTOM, 1);
      child.setPadding(Yoga.EDGE_LEFT, 1);
      child.setMargin(Yoga.EDGE_TOP, 1);
      child.setMargin(Yoga.EDGE_RIGHT, 1);
      child.setMargin(Yoga.EDGE_BOTTOM, 1);
      child.setMargin(Yoga.EDGE_LEFT, 1);
      parent.insertChild(child, j);
    }
    node.insertChild(parent, i);
  }
  node.calculateLayout(
    Yoga.UNIT_UNDEFINED,
    Yoga.UNIT_UNDEFINED,
    Yoga.DIRECTION_LTR
  );
  // 每次运行完要销毁，不然会报节点超出上限
  node.freeRecursive();
})
.on('cycle', function(event: any) {
    BeautifyBenchMark.add(event.target);
})
.on('complete', function() {
    BeautifyBenchMark.log();
})
// run async
.run({ 'async': true });