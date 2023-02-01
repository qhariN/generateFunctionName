<script lang="ts">
  import { generateFunctionName } from "../services/ia";

  export let function_name
  let function_goal = ''
  let loading = false

  const generate = () => {
    loading = true
    generateFunctionName(function_goal).then((response) => {
      function_name = response
      loading = false
    })
  }
</script>

<div class="flex flex-col gap-4">
  <textarea bind:value={function_goal} rows="4" placeholder="My function goal is ..." />
  <button on:click={generate}>
    {#if loading}
      Generating...
    {:else}
      Generate
    {/if}
  </button>
</div>

<style lang="postcss">
  button, textarea {
    @apply rounded-2xl px-5 py-3 backdrop-blur-md;
    @apply transition-colors duration-200;
  }
  textarea {
    @apply bg-white/5 hover:bg-white/[.07] resize-none focus:outline-none;
  }
  button {
    @apply bg-black/30 hover:bg-black/40;
  }
</style>