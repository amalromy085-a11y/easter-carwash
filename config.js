/* Easter Car Wash - Runtime Configuration
 * This file is intentionally obfuscated.
 * IMPORTANT: Real security comes from Firebase Security Rules, NOT from hiding this.
 * See SECURITY_RULES.txt for the database rules you must set in Firebase Console.
 */
(function(){
  // Config parts split + base64-encoded to deter casual scraping.
  // Anyone with DevTools can still read these — this is normal for Firebase web apps.
  const _p = [
    "QUl6YVN5QndBdkpSZm5LcHhNclFnRTVCYU1YNVlsd29FS1N1V05F",        // k
    "ZWFzdGVyLWNhci13YXNoLmZpcmViYXNlYXBwLmNvbQ==",                 // auth
    "aHR0cHM6Ly9lYXN0ZXItY2FyLXdhc2gtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29t", // db
    "ZWFzdGVyLWNhci13YXNo",                                          // proj
    "ZWFzdGVyLWNhci13YXNoLmZpcmViYXNlc3RvcmFnZS5hcHA=",              // stor
    "MzYzNjA1ODI3MDU0",                                              // send
    "MTozNjM2MDU4MjcwNTQ6d2ViOmVmYzhhMDJmN2VkNmNiNGFjYTQyZmY=",      // app
    "Ry1FTkpSVEg4R1JC"                                               // meas
  ];
  const _d = s => atob(s);
  const _cfg = Object.freeze({
    apiKey: _d(_p[0]),
    authDomain: _d(_p[1]),
    databaseURL: _d(_p[2]),
    projectId: _d(_p[3]),
    storageBucket: _d(_p[4]),
    messagingSenderId: _d(_p[5]),
    appId: _d(_p[6]),
    measurementId: _d(_p[7])
  });
  // Expose via non-obvious key
  Object.defineProperty(window, '__ECW_RT__', {
    value: _cfg,
    writable: false,
    configurable: false,
    enumerable: false
  });
})();
