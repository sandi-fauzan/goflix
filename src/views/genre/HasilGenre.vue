<template>
  <div class="home px-20 mt-10">
    <h1 class="text-4xl pb-6 font-bold">Category {{ namaGenre }}</h1>

    <div class="grid grid-cols-5 gap-3">
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
      results: [],
      namaGenre: "",
    };
  },
  mounted() {
    axios
      .get(`https://api.themoviedb.org/3/discover/movie/`, {
        params: {
          api_key: "747ee4812cc4ea97610aaa379219c8e8",
          adult: "false",
          certification_country: "US",
          "certification.lte": "PG-13",
          with_genres: this.$route.params.id,
        },
      })
      .then((response) => {
        this.results = response.data.results;
        this.namaGenre = this.$route.params.name;
      });
    console.log(this.results);
    console.log(this.namaGenre);
  },
};
</script>

<style scoped>
.bg-card {
  background: rgb(18, 20, 22);
}
</style>