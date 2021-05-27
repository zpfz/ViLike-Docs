<template>
	<div>
		<Header />
		<div id="main">
			<Content />
		</div>
		<Footer />
	</div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
	name: "Layout",
	components: {
		Header,
		Footer,
	},
	computed: {
		resetTitle() {
			if (this.$page.path === "/") {
				document.title = `${this.$site.title} - ${this.$site.description}`;
			} else {
				document.title = `${this.$site.title} - 一款轻量级访问量&点赞插件`;
			}
		},
	},
	mounted() {
		this.resetTitle;
	},
	watch: {
		$route(to, from) {
			if (to.path !== from.path) {
				this.resetTitle;
			}
		},
	},
};
</script>
