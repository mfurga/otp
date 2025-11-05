import Module from './beam.emu.mjs';

console.log("before")
const instance = await Module({
    print: console.log,
    printErr: console.error,
    arguments: [
        "--"    
    ],

//       arguments: [
//     "--",
//     "-root", "/Users/mf/code/otp/otp",
//     "-bindir", "/Users/mf/code/otp/otp/bin/wasm32-unknown-emscripten",
//     "-progname", "erl",
//     "--",
//     "-noshell",
//     "-pa", ".",
//     "-s", "hello", "start",
//     "-s", "init", "stop"
//   ],
  ENV: {
    ROOTDIR: "/Users/mf/code/otp/otp",
    BINDIR: "/Users/mf/code/otp/otp/bin/wasm32-unknown-emscripten",
  },

  onAbort: (msg) => console.error("ABORT:", msg),
  onExit: (code) => console.log("EXIT CODE:", code),
    locateFile: (path) => {
    console.log("Locating:", path);
    if (path.endsWith(".emu")) return "./beam.emu.mjs";
    if (path.endsWith(".wasm")) return "./beam.wasm";
    return "./" + path;
  },
});
console.log("after")

//instance._main?.();

