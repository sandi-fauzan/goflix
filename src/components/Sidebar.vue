<template>
  <!-- desktop -->
  <div class="sidebar md:inline-block hidden pt-10 px-12">
    <!-- brand -->
    <div class="brand flex py-4">
      <h1 class="text-3xl font-bold">
        <font-awesome-icon
          class="text-lg pr-1"
          icon="fa-solid fa-clapperboard"
        />
        Go<span class="text-red-600">Flix</span>
      </h1>
    </div>

    <div class="w-full h-0.5 mt-5 hr"></div>
    <!-- link -->
    <div class="links py-8">
      <h2 class="font-semibold text-lg pb-3">Movies</h2>
      <div class="link py-2">
        <router-link to="/" class="text-lg text-gray-300 hover:text-white"
          ><font-awesome-icon icon="fa-solid fa-film" class="text-xs mr-1" />
          Trending Movie
        </router-link>
      </div>

      <div class="link py-2">
        <router-link
          to="/top-rated"
          class="text-sm text-gray-300 hover:text-white"
          ><font-awesome-icon
            icon="fa-solid fa-arrow-trend-up"
            class="text-xs mr-1"
          />
          Top Rated Movie
        </router-link>
      </div>

      <div class="link py-2">
        <router-link
          to="/upcoming"
          class="text-sm text-gray-300 hover:text-white"
          ><font-awesome-icon icon="fa-solid fa-ticket" class="text-xs mr-1" />
          Upcoming Movie
        </router-link>
      </div>
    </div>

    <div class="w-full h-0.5 mt-2 hr"></div>
    <!-- search -->
    <div class="search">
      <h2 class="font-semibold text-lg pb-3 mt-5">Menu</h2>
      <div class="link py-1">
        <router-link to="/search" class="text-sm text-gray-300 hover:text-white"
          ><font-awesome-icon icon="fa-solid fa-search" class="text-xs mr-1" />
          Search Movie
        </router-link>
      </div>

      <!-- Category -->
      <div class="link py-2">
        <router-link
          to="/category"
          class="text-sm text-gray-300 hover:text-white"
        >
          <font-awesome-icon icon="fa-solid fa-list" class="text-xs mr-1" />
          Category
        </router-link>
      </div>
    </div>
  </div>

  <!-- mobile -->
  <div
    class="fixed top-0 z-50 min-h-screen w-full md:hidden"
    data-dev-hint="container"
  >
    <input type="checkbox" id="menu-open" class="hidden" />

    <header
      class="bg-secondary text-gray-100 flex justify-between md:hidden"
      data-dev-hint="mobile menu bar"
    >
      <!-- brand -->
      <div class="brand flex">
        <h1 class="text-3xl font-bold py-4 px-2">
          <font-awesome-icon
            class="text-lg pr-1"
            icon="fa-solid fa-clapperboard"
          />
          Go<span class="text-red-600">Flix</span>
        </h1>
      </div>

      <label
        for="menu-open"
        id="mobile-menu-button"
        class="
          m-2
          p-2
          focus:outline-none
          hover:text-white hover:bg-gray-700
          rounded-md
        "
      >
        <svg
          id="menu-open-icon"
          class="h-6 w-6 transition duration-200 ease-in-out"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          id="menu-close-icon"
          class="h-6 w-6 transition duration-200 ease-in-out"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </label>
    </header>

    <aside
      id="sidebar"
      class="
        bg-secondary
        text-gray-100
        md:w-64
        w-3/4
        space-y-6
        pt-6
        px-0
        absolute
        inset-y-0
        left-0
        transform
        md:relative md:translate-x-0
        transition
        duration-200
        ease-in-out
        md:flex md:flex-col md:justify-between
        overflow-y-auto
      "
      data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
    >
      <div
        class="flex flex-col space-y-6 py-4 px-5"
        data-dev-hint="optional div for having an extra footer navigation"
      >
        <!-- brand -->
        <div class="brand flex">
          <h1 class="text-3xl font-bold">
            <font-awesome-icon
              class="text-lg pr-1"
              icon="fa-solid fa-clapperboard"
            />
            Go<span class="text-red-600">Flix</span>
          </h1>
        </div>

        <div class="w-full h-0.5 mt-2 hr"></div>
        <!-- link -->
        <div class="links py-8">
          <h2 class="font-semibold text-lg pb-3">Movies</h2>
          <div class="link py-2">
            <router-link to="/" class="text-lg text-gray-300 hover:text-white"
              ><font-awesome-icon
                icon="fa-solid fa-film"
                class="text-sm mr-1"
              />
              Trending Movie
            </router-link>
          </div>

          <div class="link py-2">
            <router-link
              to="/top-rated"
              class="text-lg text-gray-300 hover:text-white"
              ><font-awesome-icon
                icon="fa-solid fa-arrow-trend-up"
                class="text-sm mr-1"
              />
              Top Rated Movie
            </router-link>
          </div>

          <div class="link py-2">
            <router-link
              to="/upcoming"
              class="text-lg text-gray-300 hover:text-white"
              ><font-awesome-icon
                icon="fa-solid fa-ticket"
                class="text-sm mr-1"
              />
              Upcoming Movie
            </router-link>
          </div>
        </div>

        <div class="w-full h-0.5 mt-2 hr"></div>
        <!-- search -->
        <div class="search">
          <h2 class="font-semibold text-lg pb-3 mt-1">Menu</h2>
          <div class="link py-1">
            <router-link
              to="/search"
              class="text-lg text-gray-300 hover:text-white"
              ><font-awesome-icon
                icon="fa-solid fa-search"
                class="text-xs mr-1"
              />
              Search Movie
            </router-link>
          </div>

          <!-- Category -->
          <div class="link py-2">
            <router-link
              to="/category"
              class="text-lg text-gray-300 hover:text-white"
            >
              <font-awesome-icon icon="fa-solid fa-list" class="text-xs mr-1" />
              Category
            </router-link>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<style scoped>
.sidebar {
  background: rgb(11, 11, 14);
  height: 100% !important;
  position: relative;
  min-height: 100vh;
}
.hr {
  background: rgb(21, 21, 25);
}

#sidebar {
  --tw-translate-x: -100%;
}
#menu-close-icon {
  display: none;
}

#menu-open:checked ~ #sidebar {
  --tw-translate-x: 0;
}
#menu-open:checked ~ * #mobile-menu-button {
  background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
}
#menu-open:checked ~ * #menu-open-icon {
  display: none;
}
#menu-open:checked ~ * #menu-close-icon {
  display: block;
}

@media (min-width: 768px) {
  #sidebar {
    --tw-translate-x: 0;
  }
}
</style>