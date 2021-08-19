<template>
  <div class="designer-preview">
    <h3>Shop preview</h3>
    <div class="shop-background">
      <div class="navbar-area">
        <!-- Image and text -->
        <b-navbar variant="dark" type="light" class="parent">
          <b-navbar-brand href="#" class="text-white">
            <img
              src="https://placekitten.com/g/30/30"
              class="d-inline-block align-top"
              alt="Kitten"
            />
            BootstrapVue
          </b-navbar-brand>
          <b-row class="rightchild">
            <b-col class="my-auto"></b-col>
            <b-col class="my-auto" v-if="isCategoryShow"><a>Category</a></b-col>
            <b-col class="my-auto" v-if="isProductShow"><a>Products</a></b-col>
            <b-col class="my-auto" v-if="isContactShow"><a>Contact</a></b-col>
            <b-col cols="3" class="my-auto"
              ><a>Cart <i class="fas fa-shopping-bag mr-5"></i></a
            ></b-col>
          </b-row>
        </b-navbar>
      </div>
      <b-skeleton-img no-aspect height="300px"></b-skeleton-img>
      <b-row class="mt-2 mr-2 ml-2">
        <b-col cols="12" class="mt-3">
          
        </b-col>
        <b-col>
          <b-skeleton-img></b-skeleton-img>
        </b-col>
        <b-col>
          <b-skeleton-img></b-skeleton-img>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      showContact: "designer/SET_CONTACT_SHOW",
      showProduct: "designer/SET_PRODUCT_SHOW",
      showCategory: "designer/SET_CATEGORY_SHOW",
    }),
  },
  computed: {
    ...mapGetters("designer", [
      "isContactShow",
      "isCategoryShow",
      "isProductShow",
    ]),
  },
};
</script>
<style scoped>
.shop-background {
  background-color: white;
}
.designer-preview {
  background-color: rgb(231, 231, 231);
}
.parent {
  width: 100%;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  height: 4rem;
  color: white;
}
.rightchild {
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  position: absolute;
}
</style>
