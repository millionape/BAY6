<template>
  <div v-if="isImageToolShow">
    <div class="modal-backdrop"></div>
    <transition name="slide-fade">
      <!-- Start Products QuickView Modal Area -->
      <div
        class="modal fade productQuickView"
        id="productQuickView"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
              <button 
                            type="button" 
                            class="close" 
                            @click="openCropper(false)"
                        >
                            <span aria-hidden="true"><i class="fas fa-times"></i></span>
                        </button>
            <div class="mx-auto" v-if="!isFileUploaded">
              <h4>Upload your shop icon</h4>
              <p></p>
              <br/>
              <b-img
                    center
                    :src="blankIngae"
                    alt="Center image"
                  ></b-img>
              <div class="mx-auto">
                <button
                  type="submit"
                  class="btn btn-primary mx-auto upload-button w-100"
                >
                  <i class="fa fa-upload"></i> Upload File
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Products QuickView Modal Area -->
    </transition>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      isFileUploaded: false,
      blankIngae: require('../../assets/img/upload.png')
    };
  },
  methods: {
    ...mapMutations({
      openCropper: "designer/SET_IMAGETOOL_STATE",
    }),
  },
  computed: {
    ...mapGetters("designer", ["isImageToolShow"]),
  },
};
</script>
<style scoped>
.upload-button {
    margin-top: 2rem;
  /* margin-left: 3rem !important; */
  /* margin-right: auto; */
}
</style>
