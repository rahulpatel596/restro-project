<template>
  <div class="home overflow-x-hidden">
    <ContentHeader />
    <Collection />
    <Reason />
    <HowItWorks />
    <Footer class="lg:mt-44" />
  </div>
</template>

<script>
// @ is an alias to /src

import ContentHeader from "../components/Home/ContentHeader.vue";
import Collection from "../components/Home/Collection";
import Reason from "../components/Home/Reason";
import HowItWorks from "../components/Home/HowItWorks";
import Footer from "../components/Footer";
export default {
  name: "Home",
  components: {
    ContentHeader,
    Collection,
    Reason,
    HowItWorks,
    Footer,
  },
};
</script>
