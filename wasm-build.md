# wasm build

### build & run POSIX sockets proxy server

https://emscripten.org/docs/porting/networking.html#full-posix-sockets-over-websocket-proxy-server

```bash
git clone --depth 1 https://github.com/emscripten-core/emscripten.git
cd emscripten/tools/websocket_to_posix_proxy
cmake .
make
./websocket_to_posix_proxy 8000
```

### build & run beam VM

```bash
./wasm-configure.sh
emmake make -j$(sysctl -n hw.ncpu)
cp bin/wasm32-unknown-emscripten/beam.emu bin/wasm32-unknown-emscripten/beam.emu.js
sed -i '' 's/beam\.emu/beam.emu.js/g' bin/wasm32-unknown-emscripten/beam.emu.js
cp -r bootstrap/bin bin/wasm32-unknown-emscripten
cp -r bootstrap/lib bin/wasm32-unknown-emscripten
cp index.html bin/wasm32-unknown-emscripten
emrun --no_browser --port 8080 bin/wasm32-unknown-emscripten
```
