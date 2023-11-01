<script>
    import Compete from "./compete.svelte";
    import Discover from "./discover.svelte";
    import Description from "./description.svelte";
</script>

<div class="wrapper rounded-md min-h-screen mx-64 my-12 py-4 px-0  flex justify-items-center items-stretch bg-gray-50 hover:bg-slate-100">
    <div class="basis-1/3 px-4 py-4	" > 
        <!-- <div class="border-b-2 border-m-pink h-fit w-full py-2">  -->
            <h1 class="indent-4 text-2xl font-bold "> compete </h1> 
        <!-- </div> -->
        <div>        
            <!-- <Compete />         -->
        </div>
    </div>
    <div class="basis-1/3 px-6 py-4 " > 
        <!-- <div class="border-b-2 border-m-pink h-fit w-full py-2">  -->
            <h1 class="text-2xl font-bold "> compete </h1> 
        <!-- </div> -->
        <div>        
            <Compete />        
        </div>
    </div>
    <div class="basis-1/3 px-4 py-4	" > 
        <!-- <div class="border-b-2 border-m-pink h-fit w-full py-2">  -->
            <h1 class="indent-4 text-2xl font-bold "> discover </h1> 
        <!-- </div> -->
        <div>        
            <Discover />        
        </div>
    </div>


</div>

 
<style>
    /* * {   } */
</style>