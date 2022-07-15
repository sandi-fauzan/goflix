<template>
  <div class="lg:grid lg:grid-cols-6">
    <Sidebar class="h-full" />
    <router-view class="col-span-5" />
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar";
export default {
  components: { Sidebar },
};
</script>
<style>
</style>
