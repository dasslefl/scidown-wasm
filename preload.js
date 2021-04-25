
// Javascript, der von Emscripten vorgeladen wird

let is_node = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string';

Module["noExitRuntime"] = true; 
Module["noInitialRun"] = true;

Module["onRuntimeInitialized"] = function() {

    // Methoden exportieren
    Module["scidownStartRender"] = Module.cwrap('scidown_start_render', 'number', ['string']);
    Module["scidownGetOutputSize"] = Module.cwrap('scidown_get_output_size', 'number', ['']);
    Module["scidownGetOutputBuffer"] = Module.cwrap('scidown_get_output_buffer', 'number', ['']);
    Module["scidownFree"] = Module.cwrap('scidown_free', 'void', ['']);

    if(is_node) {
        // NodeFS einhängen, main aufrufen
        FS.mkdir("/data");
        FS.mount(NODEFS, { root: "." }, "/data");
        FS.chdir("/data");

        callMain(process['argv'].slice(2));
    } else {
        console.log("WASM erfolgreich geladen.");
        if(typeof dispatchEvent === "function") dispatchEvent(new Event("WASMLoaded"));
    }
};
