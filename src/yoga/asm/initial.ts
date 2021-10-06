import Yoga from "yoga-layout-wasm/asm";
import BenchMark from "benchmark";
import BeautifyBenchMark from "beautify-benchmark";

export default async function run(onCycle?: (target: any) => void, onComplete?: () => void) {
  const yoga = await Yoga.init();
  const suite = new BenchMark.Suite();
  suite
    .add("300*300", function () {
      const node = yoga.Node.create();

      node.setWidth(1000);
      node.setHeight(1000);

      for (let i = 0; i < 300; i++) {
        const parent = yoga.Node.create();
        parent.setWidth(30);
        parent.setHeight(30);
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
        for (let j = 0; j < 300; j++) {
          const child = yoga.Node.create();
          child.setWidth(10);
          child.setHeight(10);
          child.setPadding(yoga.EDGE_TOP, 1);
          child.setPadding(yoga.EDGE_RIGHT, 1);
          child.setPadding(yoga.EDGE_BOTTOM, 1);
          child.setPadding(yoga.EDGE_LEFT, 1);
          child.setMargin(yoga.EDGE_TOP, 1);
          child.setMargin(yoga.EDGE_RIGHT, 1);
          child.setMargin(yoga.EDGE_BOTTOM, 1);
          child.setMargin(yoga.EDGE_LEFT, 1);
          parent.insertChild(child, j);
        }
        node.insertChild(parent, i);
      }
      node.calculateLayout(
        yoga.UNIT_UNDEFINED,
        yoga.UNIT_UNDEFINED,
        yoga.DIRECTION_LTR
      );
      node.freeRecursive();
    })
    .add("500*500", function () {
      const node = yoga.Node.create();

      node.setWidth(1000000);
      node.setHeight(1000000);

      for (let i = 0; i < 500; i++) {
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
        for (let j = 0; j < 500; j++) {
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
          parent.insertChild(child, j);
        }
        node.insertChild(parent, i);
      }
      node.calculateLayout(
        yoga.UNIT_UNDEFINED,
        yoga.UNIT_UNDEFINED,
        yoga.DIRECTION_LTR
      );
      node.freeRecursive();
    })
    .add("20*20*20*20", function () {
      const node = yoga.Node.create();

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
      node.calculateLayout(
        yoga.UNIT_UNDEFINED,
        yoga.UNIT_UNDEFINED,
        yoga.DIRECTION_LTR
      );
      node.freeRecursive();
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