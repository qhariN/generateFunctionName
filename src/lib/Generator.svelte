<script lang="ts">
  import copySvg from '../assets/copy.svg'
  import { generateFunctionName } from '../services/ia'

  export let function_name: string

  let function_goal = ''
  let loading = false

  const eg = 'Translate a given text from one language to another'

  const generate = () => {
    loading = true
    generateFunctionName(function_goal || eg).then((response) => {
      function_name = response
      loading = false
    })
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(function_name)
  }
</script>

<div class="flex flex-col gap-4">
  <textarea bind:value={function_goal} rows="4" placeholder="My function goal is ... (e.g. {eg})" />
  <div class="flex gap-2">
    <button on:click={generate} class="w-full">
      {#if loading}
        Generating...
      {:else}
        Generate
      {/if}
    </button>
    <button on:click={copyToClipboard} class="!px-4">
      <img src={copySvg} class="opacity-80" width="22" height="22" alt="copy" title="Copy to clipboard">
    </button>
  </div>
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
    @apply text-white/80 bg-black/30 hover:bg-black/40 active:bg-black/50;
  }
</style>