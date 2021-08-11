<template>
    <div>
        <div class="page-title-area">
            <div class="container">
                <ul>
                    <li><nuxt-link to="/">Create Shop</nuxt-link></li>
                </ul>
            </div>
        </div>

        <section class="signup-area ptb-60">
            <div class="container">
                <div class="signup-content">
                    <div class="section-title">
                        <h2><span class="dot"></span> Create your own shop !</h2>
                    </div>

                    <form class="signup-form">
                        <div class="form-group">
                            <label>Shop Name</label>
                            <input type="text" class="form-control" placeholder="Enter your shop name" id="shopname" name="shopname">
                        </div>
                        
                        <div class="form-group">
                            <label>Description</label>
                            <textarea name="message" id="message" cols="30" rows="8" class="form-control" placeholder="Enter your Message"></textarea>
                        </div>

                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" class="form-control" placeholder="Enter your name" id="name" name="name">
                        </div>

                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" placeholder="Enter your password" id="password" name="password">
                        </div>

                        <nuxt-link to="/create/store-designer"><button type="" class="btn btn-primary">Next</button></nuxt-link>

                        <nuxt-link to="/" class="return-store">or Return to Store</nuxt-link>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    }
}
</script>