<template>
    <div>
        <div class="page-title-area">
            <div class="container">
                <ul>
                    <li><nuxt-link to="/">Create Shop</nuxt-link></li>
                </ul>
            </div>
        </div>
        <div class="desingerContainer">
        <b-row>
            <b-col xl="3" md="3" sm="12">
                <tool-panel></tool-panel>
            </b-col>
            <b-col xl="9" md="9" sm="12">
                <shop-preview></shop-preview>
            </b-col>
        </b-row>
        </div>
    </div>
</template>
<script>
import ToolPanel from "../../../components/designer/ToolPanel.vue"
import ShopPreview from "../../../components/designer/ShopPreview.vue"
export default {
    components:{
        ToolPanel,
        ShopPreview
    },
    data(){
        return {

        }
    }
}
</script>
<style scoped>
.desingerContainer {
    margin-left: 3rem !important;
    margin-right: 3rem !important;
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
}
</style>