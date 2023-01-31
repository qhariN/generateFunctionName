<script lang="ts">
  import { generateFunctionName } from "../services/ia";

  let function_goal = ''
  let function_name = ''

  const generate = () => {
    generateFunctionName(function_goal).then((response) => {
      function_name = response
    })
  }
</script>

<div class="flex flex-col gap-4">
  <textarea bind:value={function_goal} class="rounded-2xl bg-white/5 resize-none px-5 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/30" rows="4" placeholder="My function goal is ..." />
  <button on:click={generate} class="rounded-2xl bg-black/30 px-20 py-3 hover:bg-black/40 transition-all duration-200">
    Generate
  </button>
  {#if function_name}
    <div class="rounded-2xl bg-white/5 px-5 py-3">
      <p class="text-lg font-bold text-neutral-400">{function_name}</p>
    </div>
  {/if}
</div>
