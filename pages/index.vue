<template>
  <div class="container">
    <main>
      <h2>My First Ghost Blog</h2>
      <ul>
        <li v-for="(post, index) in posts" :key="index">
          <img :src="post.feature_image" />
          <div class="content">
            <nuxt-link :to="{ path: post.slug }"> {{ post.title }}</nuxt-link>
            <p>{{post.excerpt }}</p>
          </div>
        </li>
      </ul>
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
