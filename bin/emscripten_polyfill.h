
// Polyfill, damit VSCODE nicht wegen emscripten.h meckert
#ifndef __EMSCRIPTEN_POLYFILL_H__
#define __EMSCRIPTEN_POLYFILL_H__

#ifdef __EMSCRIPTEN__
#include <emscripten.h>
#else

#define EMSCRIPTEN_KEEPALIVE

#endif

#endif