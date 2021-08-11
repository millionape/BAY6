<template>
  <div class="designer-preview">
    <h3>Designer Panel</h3>

    <ul>
      <li>Subtotal <span>111111</span></li>
      <li>Shipping <span>$10.00</span></li>
      <li>
        Total
        <span><b>55555</b></span>
      </li>
    </ul>
    <nuxt-link to="/checkout" class="btn btn-light"
      >Proceed to Checkout</nuxt-link
    >
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
