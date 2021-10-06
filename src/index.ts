import xlsx from "node-xlsx";
import fs from "fs";
import path from "path";

import initialYogaAsm from "./yoga/asm/initial";
import initialYogaWasm from "./yoga/wasm/initial";
import updateYogaAsm from "./yoga/asm/update";
import updateYogaWasm from "./yoga/wasm/update";
import initialTaitank from "./taitank/wasm/initial";
import updateTaitank from "./taitank/wasm/update";

type Suite = "300*300" | "500*500" | "20*20*20*20";
export default class Calculator {
  multiSuite = [
    "Yoga ASM Initial",
    "Yoga WASM Initial",
    "Taitank WASM Initial",
  ];
  results = {
    "Yoga ASM Initial": {
      func: initialYogaAsm,
      results: {
        "300*300": [] as number[],
        "500*500": [] as number[],
        "20*20*20*20": [] as number[],
      },
    },
    "Yoga WASM Initial": {
      func: initialYogaWasm,
      results: {
        "300*300": [] as number[],
        "500*500": [] as number[],
        "20*20*20*20": [] as number[],
      },
    },
    "Yoga ASM Update": {
      func: updateYogaAsm,
      results: [] as number[],
    },
    "Yoga WASM Update": {
      func: updateYogaWasm,
      results: [] as number[],
    },
    "Taitank WASM Initial": {
      func: initialTaitank,
      results: {
        "300*300": [] as number[],
        "500*500": [] as number[],
        "20*20*20*20": [] as number[],
      },
    },
    "Taitank WASM Update": {
      func: updateTaitank,
      results: [] as number[],
    },
  };
  get filename() {
    return `benchmark ${this.times}次统计结果`;
  }
  constructor(private readonly times = 5) {}
  async run() {
    const { results, times } = this;
    for (let i = 0; i <= times - 1; i++) {
      await Promise.all(
        (Object.keys(results) as Array<keyof typeof results>).map(
          (key) =>
            new Promise<void>((r) => {
              results[key].func((bench) => this.onCycle(key, bench), r);
            })
        )
      );
    }
    const buffer = xlsx.build([
      { name: this.filename, data: this.getXlsxData() },
    ]);
    const stream = fs.createWriteStream(
      path.resolve(__dirname, "./build/benchmark.xlsx")
    );
    stream.write(buffer);
  }
  onCycle(name: keyof typeof this.results, bench: { name: Suite; hz: number }) {
    const result = bench.hz;
    const results = this.results[name].results;
    console.log('name', name)
    if (!Array.isArray(results)) {
      results[bench.name].push(result);
    } else {
      results.push(result);
    }
  }
  getXlsxData() {
    const data = [];
    const title: string[] = [];
    const keys = Object.keys(this.results) as Array<keyof typeof this.results>;
    keys.forEach((key) => {
      if (this.multiSuite.includes(key)) {
        ["300*300", "500*500", "20*20*20*20"].forEach((name) => {
          title.push(`${key}-${name}`);
        });
      } else {
        title.push(key);
      }
    });
    data.push(title);
    for (let i = 0; i <= this.times - 1; i++) {
      const result: number[] = [];
      keys.forEach((key) => {
        const results = this.results[key].results;
        if (Array.isArray(results)) {
          result.push(results[i]);
        } else {
          ["300*300", "500*500", "20*20*20*20"].forEach((name: Suite) => {
            result.push(results[name][i]);
          });
        }
      });
      data.push(result);
    }
    return data;
  }
}

const calculator = new Calculator();
calculator.run();
