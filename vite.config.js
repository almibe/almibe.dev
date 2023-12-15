import { basename } from "path";
import fs from 'fs';
import { defineConfig } from 'vite';
import { nailClipperScrewdriver, processContent } from './ncs.js';
import { globSync } from 'glob';

export default defineConfig({
    plugins: [
      nailClipperScrewdriver(createConfig()),
    ],
    build: {
      rollupOptions: {
        input: [],
      },
    },
});

function createConfig() {
  let blergs = globSync('blerg/**.md').map((file) => {
    let url = '/blerg/' + basename(file).replace('.md', '.html');
    let content = fs.readFileSync(file, 'utf-8');
    let data = processContent(content);
    return { date: data.date, url: url, title: data.title };
  });
  let config = { layout: 'Blerg.mustache', data: { posts: blergs } };
  return config;
}
