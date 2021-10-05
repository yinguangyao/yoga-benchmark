import Taitank from "../../lib/taitank/taitank_wasm";
import BenchMark from "benchmark";
import BeautifyBenchMark from "beautify-benchmark";

(async () => {
  const suite = new BenchMark.Suite();
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
  suite
    .add("300*300", function () {
      Taitank.set_taitank_node_style_margin(leaf, 20);
      Taitank.set_taitank_node_style_width(leaf, 50);
      Taitank.DoLayout(
        node,
        1000,
        1000,
        Taitank.TaitankDirection.DIRECTION_LTR
      );
    })
    .on("cycle", function (event: any) {
      BeautifyBenchMark.add(event.target);
    })
    .on("complete", function () {
      BeautifyBenchMark.log();
    })
    // run async
    .run({ async: true });

  // 每次运行完要销毁，不然会报节点超出上限
})();
