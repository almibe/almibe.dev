---
layout: Main.mustache
title: almibe.dev
---
<main>
	<section>Hi, I'm Alex Michael Berry a software developer interested in libre software.</section>
	<section>I'm planning on expanding this site, but for now here's links to other sites I'm on and projects I work on.</section>
	<ul>
		<li><a href="https://fosstodon.org/@almibe">My mastodon account</a></li>
		<li><a href="https://ligature.dev">Ligature</a> - A FLOSS knowledge graph.</li>
		<li><a href="https://wander-lang.dev">Wander</a> - An embedded scripting language.</li>
		<li><a href="https://github.com/almibe">My github account</a></li>
		<li><a href="https://codeberg.org/almibe">My codeberg account</a></li>
	</ul>
	<section>Blerg</section>
	<ul>
		{{#posts}}
			<li>{{date}} - <a href="{{{url}}}">{{title}}</a></li>
		{{/posts}}
	</ul>
</main>
