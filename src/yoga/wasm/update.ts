import Yoga from "yoga-layout-wasm";
import BenchMark from "benchmark";
import BeautifyBenchMark from "beautify-benchmark";

export default async function run(onCycle?: (target: any) => void, onComplete?: () => void) {
    const yoga = await Yoga.init("./node_modules/yoga-layout-wasm/dist/yoga.wasm");
    const node = yoga.Node.create();
    let leaf: typeof node | null = null;
    node.setWidth(1000000);
    node.setHeight(1000000);
  
    for (let i = 0; i < 20; i++) {
      const parent = yoga.Node.create();
      parent.setWidth(2000);
      parent.setHeight(2000);
      parent.setPadding(yoga.EDGE_TOP, 1);
      parent.setPadding(yoga.EDGE_RIGHT, 1);
      parent.setPadding(yoga.EDGE_BOTTOM, 1);
      parent.setPadding(yoga.EDGE_LEFT, 1);
      parent.setMargin(yoga.EDGE_TOP, 1);
      parent.setMargin(yoga.EDGE_RIGHT, 1);
      parent.setMargin(yoga.EDGE_BOTTOM, 1);
      parent.setMargin(yoga.EDGE_LEFT, 1);
      parent.setDisplay(yoga.DISPLAY_FLEX);
      parent.setFlexDirection(yoga.FLEX_DIRECTION_ROW);
      for (let j = 0; j < 20; j++) {
        const child = yoga.Node.create();
        child.setWidth(4);
        child.setHeight(4);
        child.setPadding(yoga.EDGE_TOP, 1);
        child.setPadding(yoga.EDGE_RIGHT, 1);
        child.setPadding(yoga.EDGE_BOTTOM, 1);
        child.setPadding(yoga.EDGE_LEFT, 1);
        child.setMargin(yoga.EDGE_TOP, 1);
        child.setMargin(yoga.EDGE_RIGHT, 1);
        child.setMargin(yoga.EDGE_BOTTOM, 1);
        child.setMargin(yoga.EDGE_LEFT, 1);
        child.setDisplay(yoga.DISPLAY_FLEX);
        child.setFlexDirection(yoga.FLEX_DIRECTION_ROW);
        parent.insertChild(child, j);
        for (let k = 0; k < 20; k++) {
          const child1 = yoga.Node.create();
          child1.setWidth(4);
          child1.setHeight(4);
          child1.setPadding(yoga.EDGE_TOP, 1);
          child1.setPadding(yoga.EDGE_RIGHT, 1);
          child1.setPadding(yoga.EDGE_BOTTOM, 1);
          child1.setPadding(yoga.EDGE_LEFT, 1);
          child1.setMargin(yoga.EDGE_TOP, 1);
          child1.setMargin(yoga.EDGE_RIGHT, 1);
          child1.setMargin(yoga.EDGE_BOTTOM, 1);
          child1.setMargin(yoga.EDGE_LEFT, 1);
          child1.setDisplay(yoga.DISPLAY_FLEX);
          child1.setFlexDirection(yoga.FLEX_DIRECTION_ROW);
          child.insertChild(child1, k);
          for (let q = 0; q < 20; q++) {
            const child2 = yoga.Node.create();
            if (q === 19 && k === 19 && j === 19 && i === 19) {
              leaf = child2;
            }
            child2.setWidth(4);
            child2.setHeight(4);
            child2.setPadding(yoga.EDGE_TOP, 1);
            child2.setPadding(yoga.EDGE_RIGHT, 1);
            child2.setPadding(yoga.EDGE_BOTTOM, 1);
            child2.setPadding(yoga.EDGE_LEFT, 1);
            child2.setMargin(yoga.EDGE_TOP, 1);
            child2.setMargin(yoga.EDGE_RIGHT, 1);
            child2.setMargin(yoga.EDGE_BOTTOM, 1);
            child2.setMargin(yoga.EDGE_LEFT, 1);
            child1.insertChild(child2, q);
          }
        }
      }
      node.insertChild(parent, i);
    }
  
    const suite = new BenchMark.Suite();
    suite
      .add("20*20*20*20 update", function () {
          leaf.setPadding(yoga.EDGE_LEFT, 10);
          leaf.setWidth(20);
          node.calculateLayout(
              yoga.UNIT_UNDEFINED,
              yoga.UNIT_UNDEFINED,
              yoga.DIRECTION_LTR
            );
      })
      .on("cycle", function (event: any) {
        BeautifyBenchMark.add(event.target);
        onCycle?.(event.target);
      })
      .on("complete", function () {
        BeautifyBenchMark.log();
        onComplete?.();
      })
      // run async
      .run({ async: true });
  
}