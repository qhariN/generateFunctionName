<script lang="ts">
  import { generateFunctionName } from "../services/ia";

  let function_goal = ''

  const generate = () => {
    generateFunctionName(function_goal).then((response) => {
      console.log(response)
    })
  }
</script>

<div class="flex flex-col">
  <textarea bind:value={function_goal} class="border" name="function goal" rows="5" placeholder="Write your function goal"></textarea>
  <button on:click={generate} class="relative overflow-hidden rounded-lg bg-black px-20 py-6 ring-red-500/50 ring-offset-black will-change-transform focus:outline-none focus:ring-1 focus:ring-offset-2">
    <span class="absolute inset-px z-10 grid place-items-center rounded-lg bg-black bg-gradient-to-t from-neutral-800 text-neutral-400">Generar nombre</span>
    <span aria-hidden class="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-[conic-gradient(var(--tw-gradient-stops))] before:from-purple-700 before:via-red-500 before:to-amber-400" />
  </button>
</div>
