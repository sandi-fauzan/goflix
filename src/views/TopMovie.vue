<template>
  <div class="home px-10 lg:px-20 mt-10">
    <h1 class="text-4xl pb-6 font-bold lg:mt-0 mt-20">Top Rated Movies</h1>

    <div class="lg:grid lg:grid-cols-5 lg:gap-3 block">
      <div
        class="card p-2 mb-6 bg-card"
        v-for="result in results"
        :key="result.id"
      >
        <div class="img">
          <div
            class="
              rating
              absolute
              bg-red-500
              pt-2
              pl-2
              pr-3
              pb-3
              rounded-br-3xl
            "
          >
            <h4 class="text-sm font-semibold">{{ result.vote_average }}</h4>
          </div>
          <img
            class="w-full"
            :src="'https://image.tmdb.org/t/p/w500/' + result.poster_path"
          />
        </div>
        <div class="pr-12 pt-2 transition">
          <router-link
            class="hover:text-red-500 text-lg lg:text-sm font-medium"
            :to="'/movie/' + result.id"
            >{{ result.title }}</router-link
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
      results: [],
    };
  },
  mounted() {
    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated`, {
        params: {
          api_key: "747ee4812cc4ea97610aaa379219c8e8",
          adult: "false",
          certification_country: "US",
          "certification.lte": "PG-13",
        },
      })
      .then((response) => {
        this.results = response.data.results;
      });
    console.log(this.results);
  },
};
</script>

<style scoped>
.bg-card {
  background: rgb(18, 20, 22);
}
</style>