<template>
  <div class="container">
    <main class="mt-4">
      <h1>{{post.title}}</h1>
      <img :src="post.feature_image" class="img-fluid" />
      <div class="content mx-auto">
        <div v-html="post.html">{{post.html}}</div>
      </div>
    </main>
  </div>
</template>

<script>
import { getPost } from "~/api/post.js";

export default {
  async asyncData({ params }) {
    const post = await getPost(params.slug);
    return {
      post: post
    };
  }
};
</script>

<style lang="scss">
h1 {
  // color: white;
  margin-bottom: 1em;
}

.content {
  background: white;
  border-radius: 1em;
  padding: 1em;
  width: 70%;
}

main {
  margin-top: 0.9em;
  .content img {
    width: 100%;
  }
}
</style>
