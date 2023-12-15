import { basename, resolve } from "path";
import fs from "fs";
import { marked } from "marked";
import Mustache from "mustache";
import { globSync } from "glob";

/**
 * Takes a single config object with the following fields
 *  - layout: the default layout
 *  - data: globalData available to all pages
 */
export function nailClipperScrewdriver(config) {
  return {
    name: "nailer-clipper-screwdriver",

    buildStart(inputOptions) {
      let htmlFiles = processMustache(config);
      htmlFiles = htmlFiles.concat(processDocs(config));
      inputOptions.input = htmlFiles;
    },

    // Handles live code changes to content files.
    handleHotUpdate(ctx) {
      console.log(`In HHU ${ctx}`);
    },
  };
}

function processMustache(config) {
  let htmlFiles = [];

  let indexFile = resolve(__dirname, "./index.md");
  let indexTemplate = fs.readFileSync(indexFile, "utf-8");

  let data = processContent(indexTemplate);
  data.data = config.data;
  let layoutTemplate = fs.readFileSync(
    resolve(__dirname, "./src/layout/" + data.layout),
    "utf-8",
  );

  data["body"] = Mustache.render(data.body, data);
  let output = Mustache.render(layoutTemplate, data);

  indexFile = indexFile.replace(".md", ".html");
  fs.writeFileSync(indexFile, output);
  htmlFiles.push(indexFile);
  return htmlFiles;
}

function processDocs() {
  let htmlFiles = [];
  let paths = globSync("./blerg/**.md");

  paths.forEach(function (path) {
    let data = processContent(fs.readFileSync(path, "utf-8"));
    let template = fs.readFileSync(
      resolve(__dirname, "./src/layout/Blerg.mustache"),
      "utf-8",
    );
    let output = Mustache.render(template, data);
    let fileName = path.replace(".md", ".html");
    htmlFiles.push(fileName);
    fs.writeFileSync(fileName, output);
  });
  return htmlFiles;
}

export function processContent(content) {
  let data = {};
  let lines = content.split(/\r?\n/);
  if (lines[0] === "---") { // This file contains metadata
    content = "";
    let endHeader = false;
    for (const [i, line] of lines.entries()) {
      if (endHeader) {
        content += line + "\n";
      } else {
        if (line === "---") {
          endHeader = true && i != 0;
        } else {
          let [key, ...value] = line.split(":");
          value = value.join(":");
          data[key.trim()] = value.trim();
        }
      }
    }
  }
  data["body"] = marked.parse(content);
  return data;
}
