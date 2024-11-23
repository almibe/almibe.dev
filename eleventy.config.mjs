import feedPlugin from "@11ty/eleventy-plugin-rss";

export default async function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");

	eleventyConfig.addPlugin(feedPlugin, {
		type: "atom", // or "rss", "json"
		outputPath: "/feed.xml",
		collection: {
			name: "post", // iterate over `collections.posts`
			limit: 10,     // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "almibe.dev",
			subtitle: "The personal website of software developer Alex Michael Berry.",
			base: "https://almibe.dev/",
			author: {
				name: "Alex Michael Berry",
				email: "alexmiberry@gmail.com",
			}
		}
	});

	return {
		dir: {
		  input: "src",
		  output: "_site",
		}
	  }  
};
