<template>
  <div class="home px-10 lg:px-20 mt-10">
    <h1 class="text-4xl pb-6 font-bold lg:mt-0 mt-24">Category</h1>

    <div class="lg:grid lg:grid-cols-5 lg:gap-3 block mt-12">
      <div
        class="card p-2 mb-6 bg-card"
        v-for="result in category"
        :key="result.id"
      >
        <div class="pr-12 pt-2 transition">
          <router-link
            class="hover:text-red-500 text-sm font-medium"
            :to="`/hasil-genre/${result.id}`"
            >{{ result.name }}</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      category: [],
    };
  },
  mounted() {
    axios
      .get(`https://api.themoviedb.org/3//genre/movie/list`, {
        params: {
          api_key: "747ee4812cc4ea97610aaa379219c8e8",
          adult: "false",
          certification_country: "US",
          "certification.lte": "PG-13",
        },
      })
      .then((response) => {
        this.category = response.data.genres;
      });
    console.log(this.category);
  },
};
</script>

<style scoped>
.bg-card {
  background: rgb(18, 20, 22);
}
</style>