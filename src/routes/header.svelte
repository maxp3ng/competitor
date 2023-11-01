<script>
    const today = new Date();
    const seconds = today.getUTCSeconds();
</script>

<div class="header place-content-center flex my-20">
    <a href="http://localhost:5173/" class="inline-flex bg-gradient-to-r from-blue-300 to-purple-600"> competitor </a>
    <div class="inline-flex"> <p> {seconds}</p> </div>
</div>

<style>
    .header {
        height: auto;
        width: 100%;
        background-size: cover;
        overflow: hidden;
        z-index: 1;
    }
    a {
        font-size: 3rem;
    }
</style>


