/// <reference types="vite/client" />

import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import packageJson from "./package.json";

const bigLibs = [
  { regExp: /^@mui*/, chunkName: "@mui" },
  { regExp: /^i18next*/, chunkName: "i18next" },
  { regExp: /^react*/, chunkName: "react" },
];

function getManualChunks(deps: any) {
  return Object.keys(deps).reduce(
    (prev, cur) => {
      // console.log("\nPREV: ", prev, "\nCUR: ", cur);
      if (!cur.includes("@capacitor")) {
        let isBigLib = false;
        for (const l of bigLibs) {
          if (l.regExp.test(cur)) {
            isBigLib = true;
            if (prev[l.chunkName]) {
              prev[l.chunkName].push(cur);
            } else {
              prev[l.chunkName] = [cur];
            }
            break;
          }
        }

        if (!isBigLib) prev.vendors.push(cur);
      }
      return prev;
    },
    { vendors: [] }
  );
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), legacy()],
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks: getManualChunks(packageJson.dependencies),
  //     },
  //   },
  // },
});
