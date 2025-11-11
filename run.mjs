import Module from './beam.debug.emu.mjs';

console.log("before")
const instance = await Module({
    print: console.log,
    printErr: console.error,
    arguments: [
        "--",
    ],

    preRun: (mod) => {
        let { ENV, FS, TTY } = mod;

        ENV.BINDIR = "/";

        // TTY.init(
        //     () => null,
        //     (c) => process.stdout.write(String.fromCharCode(c)),
        //     (c) => process.stderr.write(String.fromCharCode(c))
        // );
        //console.log(TTY);
        // FS.init();
        // FS.mkdir("/tmp/data");
        // const NODEFS = FS.filesystems.NODEFS;
        // console.log(NODEFS);
        // FS.mount(NODEFS, { root: '.' }, '/tmp/data');
    },

    onAbort: (msg) => console.error("ABORT:", msg),
    onExit: (code) => console.log("EXIT CODE:", code),
    locateFile: (path) => {
        console.log("Locating:", path);
        //if (path.endsWith(".emu")) return "./beam.debug.emu.mjs";
        //if (path.endsWith(".wasm")) return "./beam.debug.wasm";
        return "./" + path;
    },
});
console.log("after")


// preRun: (mod) => {
//     let { ENV, FS} = mod;
//     //ENV.BINDIR = "/Users/mf/code/otp/otp/bin/wasm32-unknown-emscripten";
//     //console.log(FS);
//     //FS.mkdir("/data");
//     // const NODEFS = FS.filesystems.NODEFS;
//     // FS.mount(NODEFS, { root: '.' }, '/tmp');

//     //FS.mount(NODEFS, { root: '.' }, '/tmp/host');
//     //FS.mkdir('/work/host');
// },

// preRun: [
//   function ({ FS }) {
//     FS.mkdir("/data");
//     FS.writeFile("/data/bundle.avm", avmBundle);
//   },
// ],

