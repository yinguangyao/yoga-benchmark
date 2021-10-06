import loadTaitankWasm from "../../lib/taitank";
import BenchMark from "benchmark";
import BeautifyBenchMark from "beautify-benchmark";

export default async function run(onCycle?: (target: any) => void, onComplete?: () => void) {
  const suite = new BenchMark.Suite();
  const Taitank = await loadTaitankWasm();
  suite
    .add("300*300", function () {
      const node = Taitank.TaitankNodeCreate();
      let leaf: any = null;

      Taitank.set_taitank_node_style_width(node, 1000);
      Taitank.set_taitank_node_style_height(node, 1000);

      for (let i = 0; i < 300; i++) {
        const parent = Taitank.TaitankNodeCreate();
        Taitank.set_taitank_node_style_width(parent, 30);
        Taitank.set_taitank_node_style_height(parent, 30);
        Taitank.set_taitank_node_style_padding(
          parent,
          Taitank.CSSDirection.CSS_TOP,
          1
        );
        Taitank.set_taitank_node_style_padding(
          parent,
          Taitank.CSSDirection.CSS_RIGHT,
          1
        );
        Taitank.set_taitank_node_style_padding(
          parent,
          Taitank.CSSDirection.CSS_BOTTOM,
          1
        );
        Taitank.set_taitank_node_style_padding(
          parent,
          Taitank.CSSDirection.CSS_LEFT,
          1
        );
        Taitank.set_taitank_node_style_margin(
          parent,
          Taitank.CSSDirection.CSS_TOP,
          1
        );
        Taitank.set_taitank_node_style_margin(
          parent,
          Taitank.CSSDirection.CSS_RIGHT,
          1
        );
        Taitank.set_taitank_node_style_margin(
          parent,
          Taitank.CSSDirection.CSS_BOTTOM,
          1
        );
        Taitank.set_taitank_node_style_margin(
          parent,
          Taitank.CSSDirection.CSS_LEFT,
          1
        );
        Taitank.set_taitank_node_style_display(
          parent,
          Taitank.DisplayType.DISPLAY_TYPE_FLEX
        );
        Taitank.set_taitank_node_style_flex_direction(
          parent,
          Taitank.FlexDirection
        );
        for (let j = 0; j < 300; j++) {
          const child = Taitank.TaitankNodeCreate();
          leaf = child;
          Taitank.set_taitank_node_style_width(child, 10);
          Taitank.set_taitank_node_style_height(child, 10);
          Taitank.set_taitank_node_style_padding(
            child,
            Taitank.CSSDirection.CSS_TOP,
            1
          );
          Taitank.set_taitank_node_style_padding(
            child,
            Taitank.CSSDirection.CSS_RIGHT,
            1
          );
          Taitank.set_taitank_node_style_padding(
            child,
            Taitank.CSSDirection.CSS_BOTTOM,
            1
          );
          Taitank.set_taitank_node_style_padding(
            child,
            Taitank.CSSDirection.CSS_LEFT,
            1
          );
          Taitank.set_taitank_node_style_margin(
            child,
            Taitank.CSSDirection.CSS_TOP,
            1
          );
          Taitank.set_taitank_node_style_margin(
            child,
            Taitank.CSSDirection.CSS_RIGHT,
            1
          );
          Taitank.set_taitank_node_style_margin(
            child,
            Taitank.CSSDirection.CSS_BOTTOM,
            1
          );
          Taitank.set_taitank_node_style_margin(
            child,
            Taitank.CSSDirection.CSS_LEFT,
            1
          );
          Taitank.TaitankNodeInsertChild(parent, child, j);
        }
        Taitank.TaitankNodeInsertChild(node, parent, i);
      }
      Taitank.DoLayout(
        node,
        1000,
        1000,
        Taitank.TaitankDirection.DIRECTION_LTR
      );
      Taitank.TaitankNodeFreeRecursive(node);
    })
    .add("500*500", function () {
      const node = Taitank.TaitankNodeCreate();
      let leaf: any = null;

      Taitank.set_taitank_node_style_width(node, 1000);
      Taitank.set_taitank_node_style_height(node, 1000);

      for (let i = 0; i < 300; i++) {
        const parent = Taitank.TaitankNodeCreate();
        Taitank.set_taitank_node_style_width(parent, 30);
        Taitank.set_taitank_node_style_height(parent, 30);
        Taitank.set_taitank_node_style_padding(
          parent,
          Taitank.CSSDirection.CSS_TOP,
          1
        );
        Taitank.set_taitank_node_style_padding(
          parent,
          Taitank.CSSDirection.CSS_RIGHT,
          1
        );
        Taitank.set_taitank_node_style_padding(
          parent,
          Taitank.CSSDirection.CSS_BOTTOM,
          1
        );
        Taitank.set_taitank_node_style_padding(
          parent,
          Taitank.CSSDirection.CSS_LEFT,
          1
        );
        Taitank.set_taitank_node_style_margin(
          parent,
          Taitank.CSSDirection.CSS_TOP,
          1
        );
        Taitank.set_taitank_node_style_margin(
          parent,
          Taitank.CSSDirection.CSS_RIGHT,
          1
        );
        Taitank.set_taitank_node_style_margin(
          parent,
          Taitank.CSSDirection.CSS_BOTTOM,
          1
        );
        Taitank.set_taitank_node_style_margin(
          parent,
          Taitank.CSSDirection.CSS_LEFT,
          1
        );
        Taitank.set_taitank_node_style_display(
          parent,
          Taitank.DisplayType.DISPLAY_TYPE_FLEX
        );
        Taitank.set_taitank_node_style_flex_direction(
          parent,
          Taitank.FlexDirection
        );
        for (let j = 0; j < 300; j++) {
          const child = Taitank.TaitankNodeCreate();
          leaf = child;
          Taitank.set_taitank_node_style_width(child, 10);
          Taitank.set_taitank_node_style_height(child, 10);
          Taitank.set_taitank_node_style_padding(
            child,
            Taitank.CSSDirection.CSS_TOP,
            1
          );
          Taitank.set_taitank_node_style_padding(
            child,
            Taitank.CSSDirection.CSS_RIGHT,
            1
          );
          Taitank.set_taitank_node_style_padding(
            child,
            Taitank.CSSDirection.CSS_BOTTOM,
            1
          );
          Taitank.set_taitank_node_style_padding(
            child,
            Taitank.CSSDirection.CSS_LEFT,
            1
          );
          Taitank.set_taitank_node_style_margin(
            child,
            Taitank.CSSDirection.CSS_TOP,
            1
          );
          Taitank.set_taitank_node_style_margin(
            child,
            Taitank.CSSDirection.CSS_RIGHT,
            1
          );
          Taitank.set_taitank_node_style_margin(
            child,
            Taitank.CSSDirection.CSS_BOTTOM,
            1
          );
          Taitank.set_taitank_node_style_margin(
            child,
            Taitank.CSSDirection.CSS_LEFT,
            1
          );
          Taitank.TaitankNodeInsertChild(parent, child, j);
        }
        Taitank.TaitankNodeInsertChild(node, parent, i);
      }
      Taitank.DoLayout(
        node,
        1000,
        1000,
        Taitank.TaitankDirection.DIRECTION_LTR
      );
      Taitank.TaitankNodeFreeRecursive(node);
    })
    .add("20*20*20*20", function () {
      const node = Taitank.TaitankNodeCreate();
      let leaf: any = null;

      Taitank.set_taitank_node_style_width(node, 1000);
      Taitank.set_taitank_node_style_height(node, 1000);

      for (let i = 0; i < 20; i++) {
        const parent = Taitank.TaitankNodeCreate();
        Taitank.set_taitank_node_style_width(parent, 30);
        Taitank.set_taitank_node_style_height(parent, 30);
        Taitank.set_taitank_node_style_padding(
          parent,
          Taitank.CSSDirection.CSS_TOP,
          1
        );
        Taitank.set_taitank_node_style_padding(
          parent,
          Taitank.CSSDirection.CSS_RIGHT,
          1
        );
        Taitank.set_taitank_node_style_padding(
          parent,
          Taitank.CSSDirection.CSS_BOTTOM,
          1
        );
        Taitank.set_taitank_node_style_padding(
          parent,
          Taitank.CSSDirection.CSS_LEFT,
          1
        );
        Taitank.set_taitank_node_style_margin(
          parent,
          Taitank.CSSDirection.CSS_TOP,
          1
        );
        Taitank.set_taitank_node_style_margin(
          parent,
          Taitank.CSSDirection.CSS_RIGHT,
          1
        );
        Taitank.set_taitank_node_style_margin(
          parent,
          Taitank.CSSDirection.CSS_BOTTOM,
          1
        );
        Taitank.set_taitank_node_style_margin(
          parent,
          Taitank.CSSDirection.CSS_LEFT,
          1
        );
        Taitank.set_taitank_node_style_display(
          parent,
          Taitank.DisplayType.DISPLAY_TYPE_FLEX
        );
        Taitank.set_taitank_node_style_flex_direction(
          parent,
          Taitank.FlexDirection
        );
        for (let j = 0; j < 20; j++) {
          const child = Taitank.TaitankNodeCreate();
          leaf = child;
          Taitank.set_taitank_node_style_width(child, 10);
          Taitank.set_taitank_node_style_height(child, 10);
          Taitank.set_taitank_node_style_padding(
            child,
            Taitank.CSSDirection.CSS_TOP,
            1
          );
          Taitank.set_taitank_node_style_padding(
            child,
            Taitank.CSSDirection.CSS_RIGHT,
            1
          );
          Taitank.set_taitank_node_style_padding(
            child,
            Taitank.CSSDirection.CSS_BOTTOM,
            1
          );
          Taitank.set_taitank_node_style_padding(
            child,
            Taitank.CSSDirection.CSS_LEFT,
            1
          );
          Taitank.set_taitank_node_style_margin(
            child,
            Taitank.CSSDirection.CSS_TOP,
            1
          );
          Taitank.set_taitank_node_style_margin(
            child,
            Taitank.CSSDirection.CSS_RIGHT,
            1
          );
          Taitank.set_taitank_node_style_margin(
            child,
            Taitank.CSSDirection.CSS_BOTTOM,
            1
          );
          Taitank.set_taitank_node_style_margin(
            child,
            Taitank.CSSDirection.CSS_LEFT,
            1
          );
          for (let k = 0; k < 20; k++) {
            const child1 = Taitank.TaitankNodeCreate();
            leaf = child1;
            Taitank.set_taitank_node_style_width(child1, 10);
            Taitank.set_taitank_node_style_height(child1, 10);
            Taitank.set_taitank_node_style_padding(
              child1,
              Taitank.CSSDirection.CSS_TOP,
              1
            );
            Taitank.set_taitank_node_style_padding(
              child1,
              Taitank.CSSDirection.CSS_RIGHT,
              1
            );
            Taitank.set_taitank_node_style_padding(
              child1,
              Taitank.CSSDirection.CSS_BOTTOM,
              1
            );
            Taitank.set_taitank_node_style_padding(
              child1,
              Taitank.CSSDirection.CSS_LEFT,
              1
            );
            Taitank.set_taitank_node_style_margin(
              child1,
              Taitank.CSSDirection.CSS_TOP,
              1
            );
            Taitank.set_taitank_node_style_margin(
              child1,
              Taitank.CSSDirection.CSS_RIGHT,
              1
            );
            Taitank.set_taitank_node_style_margin(
              child1,
              Taitank.CSSDirection.CSS_BOTTOM,
              1
            );
            Taitank.set_taitank_node_style_margin(
              child1,
              Taitank.CSSDirection.CSS_LEFT,
              1
            );
            Taitank.TaitankNodeInsertChild(child, child1, k);
            for (let q = 0; q < 20; q++) {
              const child2 = Taitank.TaitankNodeCreate();
              leaf = child2;
              Taitank.set_taitank_node_style_width(child2, 10);
              Taitank.set_taitank_node_style_height(child2, 10);
              Taitank.set_taitank_node_style_padding(
                child2,
                Taitank.CSSDirection.CSS_TOP,
                1
              );
              Taitank.set_taitank_node_style_padding(
                child2,
                Taitank.CSSDirection.CSS_RIGHT,
                1
              );
              Taitank.set_taitank_node_style_padding(
                child2,
                Taitank.CSSDirection.CSS_BOTTOM,
                1
              );
              Taitank.set_taitank_node_style_padding(
                child2,
                Taitank.CSSDirection.CSS_LEFT,
                1
              );
              Taitank.set_taitank_node_style_margin(
                child2,
                Taitank.CSSDirection.CSS_TOP,
                1
              );
              Taitank.set_taitank_node_style_margin(
                child2,
                Taitank.CSSDirection.CSS_RIGHT,
                1
              );
              Taitank.set_taitank_node_style_margin(
                child2,
                Taitank.CSSDirection.CSS_BOTTOM,
                1
              );
              Taitank.set_taitank_node_style_margin(
                child2,
                Taitank.CSSDirection.CSS_LEFT,
                1
              );
              Taitank.TaitankNodeInsertChild(child1, child2, q);
            }
          }
          Taitank.TaitankNodeInsertChild(parent, child, j);
        }
        Taitank.TaitankNodeInsertChild(node, parent, i);
      }
      Taitank.DoLayout(
        node,
        1000,
        1000,
        Taitank.TaitankDirection.DIRECTION_LTR
      );
      Taitank.TaitankNodeFreeRecursive(node);
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
