#!/bin/bash

export CC=emcc
export LD=emcc
export CXX=em++
export AR=emar

export CFLAGS="
    -O2
    -g
    -pthread
    -gsource-map
    -DDEBUG
    -Wno-undef
"
export LDFLAGS="
    -pthread
    -g
    -gsource-map
    -s USE_PTHREADS=1
    -s PTHREAD_POOL_SIZE=16
    -s PROXY_TO_PTHREAD
    -s ENVIRONMENT=web,worker
    -s EXPORT_ES6=1
    -s INITIAL_MEMORY=512MB
    -s MAXIMUM_MEMORY=2GB
    -s ALLOW_MEMORY_GROWTH=1
    -s EXPORTED_RUNTIME_METHODS=ENV,FS,TTY
    -s FORCE_FILESYSTEM=1
    -s EMULATE_FUNCTION_POINTER_CASTS
    -s ASSERTIONS=2
    -s EXIT_RUNTIME=1
"
export ac_cv_func_pthread_create=yes
export ac_cv_header_pthread_h=yes

export ac_cv_sizeof_short=2
export ac_cv_sizeof_int=4
export ac_cv_sizeof_long=4
export ac_cv_sizeof_long_long=8
export ac_cv_sizeof___int128_t=16
export ac_cv_sizeof_void_p=4
export ac_cv_c_bigendian=no

export ac_cv_have_32bit_atomic=yes
export ac_cv_have_64bit_atomic=yes
export ac_cv_have_128bit_atomic=no
export ac_cv_have_native_atomics=yes
export ac_cv_func_sched_yield=yes

export ac_cv_func_tgetent=yes
export ac_cv_lib_curses_tgetent=yes
export ac_cv_lib_ncurses_tgetent=yes
export ac_cv_lib_termcap_tgetent=yes
export ac_cv_lib_ltermlib_tgetent=yes
export ac_cv_lib_curses_exists=yes

emconfigure ./configure \
  --host=wasm32-unknown-emscripten \
  --build=$(uname -m)-apple-darwin \
  --without-debugger \
  --without-dialyzer \
  --without-et \
  --without-hipe \
  --without-javac \
  --without-jinterface \
  --without-megaco \
  --without-observer \
  --without-odbc \
  --without-os_mon \
  --without-typer \
  --without-wx \
  --without-termcap \
  --without-reltool

#  --disable-threads \
#  --disable-smp-support
