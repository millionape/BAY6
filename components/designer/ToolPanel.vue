<template>
  <div class="designer-panel">
    <transition name="slide-fade"><icon-cropper></icon-cropper></transition>
    <h2>Designer Panel</h2>
    <br />
    <div class="d-color-picker">
      <h4>Background</h4>
      <label>Colors</label>
      <br />
      <b-row class="mx-auto">
        <b-col cols="4" class="">
          <div class="color-container">
            <v-swatches
              class="center mx-auto"
              v-model="nav_color"
              show-fallback
              fallback-input-type="color"
              popover-x="left"
            ></v-swatches>
          </div>
          <p class="small-text">Background</p>
        </b-col>
      </b-row>
    </div>
    <div class="divider"></div>
    <div class="d-color-picker">
      <h4>Navigation bar</h4>
      <div class="form-group">
        <label>Display Text</label>
        <input
          type="text"
          class="form-control"
          placeholder="Navbar Text"
          id="navtext"
          name="navtext"
        />
      </div>
      <label>Colors</label>
      <b-row class="mx-auto">
        <b-col cols="4" class="">
          <div class="color-container">
            <v-swatches
              class="center mx-auto"
              v-model="nav_color"
              show-fallback
              fallback-input-type="color"
              popover-x="left"
            ></v-swatches>
          </div>
          <p class="small-text">Navbar</p>
        </b-col>
        <b-col cols="4" class="mx-auto">
          <div class="color-container">
            <v-swatches
              class="center mx-auto"
              v-model="nav_color"
              show-fallback
              fallback-input-type="color"
              popover-x="left"
            ></v-swatches>
          </div>
          <p class="small-text">Text</p>
        </b-col>
        <b-col cols="4" class="mx-auto">
          <div class="color-container">
            <v-swatches
              class="center mx-auto"
              v-model="nav_color"
              show-fallback
              fallback-input-type="color"
              popover-x="left"
            ></v-swatches>
          </div>
          <p class="small-text">Text color</p>
        </b-col>
      </b-row>
      <div class="form-group">
        <label>Icon</label>
        <br />
        <b-row class="mx-auto">
          <b-col cols="4" class="">
            <div class="color-container">
              <b-img
                v-bind="mainProps"
                :src="img"
                rounded
                alt="Rounded image"
                class="image-upload-picker"
                @click="openImageCropper"
              ></b-img>
            </div>
            <p class="small-text">Icon</p>
          </b-col>
        </b-row>
        <br/>
        <label>Navigation Menu</label>
        

        <div><span class="my-auto mr-2">Contact</span><toggle-button class="my-auto" :value="nav_link_contact" color="#82C7EB" :labels="{checked: 'enable', unchecked: 'disable'}" width="65"/></div>
        <div class="mt-1"><span class="my-auto mr-2">Blog</span><toggle-button class="my-auto" :value="nav_link_blog" color="#82C7EB" :labels="{checked: 'enable', unchecked: 'disable'}" width="65"/></div>

        <!-- <cropper
          class="cropper"
          :src="img"
          :stencil-props="{
            aspectRatio: 10 / 12,
          }"
          @change="change"
        /> -->
      </div>
    </div>
    <br />
    <div class="divider"></div>
    <div class="d-color-picker">
      <h4>Footer</h4>
      <label>Footer Color</label>
      <br />
      <div class="form__input">
        <v-swatches
          v-model="nav_color"
          show-fallback
          fallback-input-type="color"
          popover-x="left"
        ></v-swatches>
      </div>
    </div>
    <nuxt-link to="/checkout" class="btn btn-light">Done!</nuxt-link>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import IconCropper from "../../components/designer/IconCropper.vue";
export default {
  components: {
    Cropper,
    IconCropper,
  },
  data() {
    return {
      nav_link_contact: false,
      nav_link_blog: false,
      showIconCropper: false,
      bg_color: "#000000",
      nav_color: "#000000",
      foot_color: "#000000",
      custom_img: {
        center: true,
        blank: true,
        blankColor: "#777",
        width: 20,
        height: 20,
        class: "",
      },
      mainProps: {
        center: false,
        width: 50,
        height: 50,
      },
      img: require("../../assets/img/image-upload.png"),
    };
  },
  methods: {
    onBlogRadioClicked(){
      console.log("clicked")
      this.nav_link_blog = !this.nav_link_blog;
    },
    change({ coordinates, canvas }) {
      console.log(coordinates, canvas);
    },
    ...mapMutations({
      openCropper: "designer/SET_IMAGETOOL_STATE",
    }),
    openImageCropper() {
      this.openCropper(true);
    },
  },
  //   computed: mapGetters({
  //     isImageToolShow: 'designer/isImageToolShow'
  //   }),
  computed: {
    ...mapGetters("designer", ["isImageToolShow"]),
  },
};
</script>
<style scoped>
.d-color-picker {
  margin-bottom: 1rem;
}
label {
  color: rgb(109, 109, 109);
}
.color-custom {
  color: rgb(109, 109, 109);
}
.custom-color-preview {
  margin-left: 1rem !important;
}
.custom-color-picker:hover {
  cursor: pointer;
}
.image-upload-picker:hover {
  cursor: pointer;
}
.small-text {
  font-size: 0.7rem;
  text-align: center;
}
.center {
  text-align: center;
  margin-left: auto !important;
}
.color-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-gray{
  color: rgb(95, 95, 95);
}
</style>
