import Taitank from "../../lib/taitank/taitank_wasm";

// wasm 是通过 ajax 异步加载的，这里在加载完成后抛出 onRuntimeInitialized 事件
// 以此来判断是否加载完成
const p = new Promise<any>(r => {
    Taitank.onRuntimeInitialized = function() {
        r(Taitank)
    }
});

export default function loadWasm() {
    if (Taitank.calledRun) {
        return Taitank;
    }
    return p;
}