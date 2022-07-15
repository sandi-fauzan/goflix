<template>
  <div class="movie block">
    <button
      @click="$router.go(-1)"
      class="
        back
        px-8
        py-2
        mt-20
        border border-white
        rounded-full
        absolute
        z-30
        lg:mt-4 lg:ml-8
        ml-4
      "
    >
      Back
    </button>
    <div class="backdrop brightness-50">
      <img
        :src="'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path"
        class="w-full brightness-50 h-80 object-cover"
      />
    </div>

    <!-- detail movies -->
    <div class="lg:grid lg:grid-cols-4 block mx-10 py-8">
      <div>
        <div class="poster">
          <img
            :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
            class="w-12/12 shadow-lg top-3 rounded-lg"
          />
        </div>
        <div class="flex py-6 lg:py-0">
          <h3
            class="
              mt-4
              bg-secondary
              rounded-full
              border-4 border-red-500
              w-16
              h-16
              text-center
              py-4
            "
          >
            {{ movie.vote_average }}
          </h3>
          <div class="block my-6 ml-4">
            <h4 class="font-semibold m-0">
              {{ movie.popularity
              }}<span class="font-normal text-sm"> popularity</span>
            </h4>
            <h4 class="font-semibold">
              {{ movie.vote_count
              }}<span class="font-normal text-sm"> reviews</span>
            </h4>
          </div>
        </div>
      </div>
      <div class="detail col-span-2 lg:px-12">
        <h4 class="text-4xl font-semibold">{{ movie.title }}</h4>
        <h4 class="py-2">
          {{ movie.original_language }}, {{ movie.release_date }}
        </h4>
        <div class="flex overflow-x-scroll">
          <div class="flex" v-for="(genre, index) in movie.genres" :key="index">
            <h4
              class="
                py-2
                px-4
                border
                rounded-full
                border-white
                text-sm
                mr-3
                bg-transparent
              "
            >
              {{ genre.name }}
            </h4>
          </div>
        </div>

        <!-- trailer btn -->
        <button
          class="
            px-10
            py-3
            bg-red-600
            hover:bg-red-700
            transition
            ease-in-out
            my-5
            rounded-full
          "
        >
          <font-awesome-icon icon="fa-solid fa-play" class="text-white px-1" />
          Watch Trailer
        </button>
        <!-- end trailer btn -->

        <button
          class="
            ml-3
            w-12
            h-12
            bg-transparent
            border border-white
            transition
            my-6
            rounded-full
          "
        >
          <font-awesome-icon icon="fa-solid fa-bookmark" />
        </button>

        <h4 class="py-2 font-medium">"{{ movie.tagline }}"</h4>
        <h4 class="py-2 font-normal text-sm leading-7">
          {{ movie.overview }}
        </h4>
      </div>
      <div class="cast">
        <h2 class="font-semibold text-lg">Cast & Crew</h2>
        <div v-for="(cast, index) in credit.slice(0, 14)" :key="index">
          <div class="img-cast flex my-3 items-center">
            <img
              :src="'https://image.tmdb.org/t/p/w500/' + cast.profile_path"
              class="w-12 h-12 rounded-full object-cover"
            />
            <div class="block">
              <h4 class="text-white ml-3">{{ cast.name }}</h4>
              <h5 class="text-gray-300 text-xs ml-3">
                as {{ cast.character }}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- similar movies -->
    <h2 class="font-semibold text-2xl mx-10">Similar Movies</h2>
    <div class="lg:grid lg:grid-cols-6 block mx-10 py-8">
      <div
        class="card p-2 mb-6 bg-card"
        v-for="result in similarMovies.slice(0, 12)"
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
            <h4 class="text-sm font-semibold">
              {{ result.vote_average }}
            </h4>
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
      movie: [],
      credit: [],
      similarMovies: [],
    };
  },
  methods: {
    async fetchMovie(index) {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/` + index,
        {
          params: {
            api_key: "747ee4812cc4ea97610aaa379219c8e8",
            adult: "false",
            certification_country: "US",
            "certification.lte": "PG-13",
          },
        }
      );
      this.movie = res.data;
    },
    async fetchSimilarMovies(index) {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${index}/similar`,
        {
          params: {
            api_key: "747ee4812cc4ea97610aaa379219c8e8",
            adult: "false",
            certification_country: "US",
            "certification.lte": "PG-13",
          },
        }
      );
      this.similarMovies = res.data.results;
    },
    async fetchChar(index) {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/` + index + `/credits`,
        {
          params: {
            api_key: "747ee4812cc4ea97610aaa379219c8e8",
            adult: "false",
            certification_country: "US",
            "certification.lte": "PG-13",
          },
        }
      );
      this.credit = res.data.cast;
      console.log(this.credit);
    },
  },
  mounted() {
    this.fetchSimilarMovies(this.$route.params.id);
    this.fetchMovie(this.$route.params.id);
    this.fetchChar(this.$route.params.id);
  },
};
</script>

<style scoped>
.brightness-50 {
  filter: brightness(0.7);
}
</style>