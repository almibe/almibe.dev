import { defineConfig } from 'vite';
import { resolve, basename } from 'path';
import fs from 'fs';
import walk from 'walkdir';
import { marked } from 'marked';
import Mustache from 'mustache';

export default defineConfig({
    plugins: [
      staticSiteGen(),
    ],
    build: {
      rollupOptions: {
        input: [],
      },
    },
});

function staticSiteGen() {
  return {
    name: 'static-site-gen',

    buildStart(inputOptions) {
      let htmlFiles = []
      let paths = ["./index.md"].concat(walk.sync("./docs"));

      paths.forEach(function (path) {
        if (path.endsWith(".md")) {
          let content = fs.readFileSync(path, 'utf-8')
          let data = {}
          let lines = content.split(/\r?\n/);
          if (lines[0] === "---") { // This file contains metadata
            content = ""
            let endHeader = false
            for (const [i, line] of lines.entries()) {
              if (endHeader) {
                content += line + "\n"
              } else {
                if (line === "---") {
                  endHeader = true && i != 0;
                } else {
                  let [key, ...value] = line.split(':')
                  value = value.join(':')
                  data[key] = value
                }
              }
            }
          }
          data["body"] = marked.parse(content);
          let template = fs.readFileSync(resolve(__dirname, "layout/Main.mustache"), 'utf-8');
          let output = Mustache.render(template, data)
          let fileName = path.replace(".md", ".html");
          htmlFiles.push(fileName)
          fs.writeFileSync(fileName, output)
        }
      });
      inputOptions.input = htmlFiles
    },

    // Handles live code changes to content files.
    handleHotUpdate(ctx) {
      console.log(`In HHU ${ctx}`)
    },
  }
}
