<script>
    let competitions = [
        {name: "United States of America Computing Olympiad"},
        {name: "United States of America Mathematical Olympiad"},
        {name: "United States Physics Olympiad"},
        {name: "United States National Chemistry Olympiad"},
        {name: "Science Olympiad"}
    ]

</script>

{#each competitions as competition, i}
	<li>{i + 1}: {competition.name}</li>
{/each}


<style>

</style>