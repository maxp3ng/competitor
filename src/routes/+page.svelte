<script>
    import Header from  './header.svelte';
    import WebappWrapper from './webappWrapper.svelte';
</script>

<!-- gradient bg -->
<!-- <div id="background" class="bg-gradient-to-br from-m-gray to-m-pink h-full w-full absolute"> -->

<!-- solid bg -->
<!-- <div id="background" class="bg-gray-50 h-full w-full absolute"> -->
        <Header />
<!-- <h1 class="text-4xl text-center"> high school competitions. everything you've ever needed as a competitor.</h1> -->
<WebappWrapper />


<!-- </div> -->




<style>
    /*https://coolors.co/palette/ea7af4-b43e8f-6200b3-3b0086-290628  */
    
    :root {
        --pink: #EA7AF4;
        --magenta: #B43E8F;
        --light-purple: #6200B3;
        --violet: #3B0086;
        --dark-purple: #290628;
    }
    * {
        font-family: 'Karla', sans-serif;
    }
</style>