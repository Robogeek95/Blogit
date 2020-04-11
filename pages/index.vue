<template>
  <div class="container">
    <main>
      <h2 class="my-4">My First Ghost Blog</h2>
      <div class="row">
        <div class="col col-6" v-for="(post, index) in posts" :key="index">
          <img :src="post.feature_image" class="img-fluid" />
          <div class="content">
            <nuxt-link :to="{ path: post.slug }">{{ post.title }}</nuxt-link>
            <p>{{post.excerpt }}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { getPosts } from "~/api/post.js";

export default {
  async asyncData() {
    const posts = await getPosts();
    return {
      posts: posts
    };
  }
};
</script>

<style lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
