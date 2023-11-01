<script>
    let myList = [
        {name: "United States of America Computing Olympiad"},
        {name: "United States of America Mathematical Olympiad"},
        {name: "United States Physics Olympiad"},
        {name: "United States National Chemistry Olympiad"},
        {name: "Science Olympiad"}
    ]
    myList.push({name: "test"});

    for (let i=0; i<10; i++){
        setTimeout(() => {
            myList.push({name: "test"});

            console.log(i);
        }, "1000");
    }
</script>





{#each myList as competition, i (competition.name)}
    <!-- bar -->
    <div class="h-16 bg-white  border-m-violet  my-6"> 
        <div class="h-2 w-full bg-m-violet rounded-tl-lg"></div> 
        <!-- text -->
        <div class="h-full w-full flex items-center	">
            <!-- emoji identifier -->
            <h1 class="align-middle text-3xl">📍</h1>

            <!-- title -->
            <h1 class="align-middle"> {competition.name} </h1>
        </div>
    </div>
{/each}



<style>

</style>