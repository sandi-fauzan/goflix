<template>
  <div class="search pt-20 px-10 lg:px-20">
    <h1 class="text-3xl font-bold">Search Movies</h1>
    <input
      class="w-full mt-8 px-6 py-4 h-16 rounded-full shadow-xl"
      type="text"
      placeholder="Search Movie..."
      @keyup.prevent="searchMovie"
      v-model="searchInput"
    />

    <div class="lg:grid lg:grid-cols-5 lg:gap-3 block py-8">
      <!-- isLoading -->

      <!-- card -->
      <div
        class="card p-2 mb-6 bg-card"
        v-for="result in movies"
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
            class="hover:text-red-500 text-sm font-medium"
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
      searchInput: "",
      searchResult: null,
      movies: [],
    };
  },
  methods: {
    async searchMovie() {
      await axios
        .get(
          "https://api.themoviedb.org/3/search/movie?query=" + this.searchInput,
          {
            params: {
              api_key: "747ee4812cc4ea97610aaa379219c8e8",
              adult: "false",
              certification_country: "US",
              "certification.lte": "PG-13",
            },
          }
        )
        .then((response) => {
          this.movies = response.data.results;
          console.log(this.movies);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
input {
  background-color: rgb(26, 27, 28);
  outline: none;
  border: none;
}
</style>