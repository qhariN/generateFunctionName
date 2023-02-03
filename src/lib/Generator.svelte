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
    <button on:click={generate} class="w-full" class:pointer-events-none={loading}>
      {#if loading}
        <span class="inline-flex items-center gap-1">
          <span class="dot animate-blink"></span>
          <span class="dot animate-blink animation-delay-150"></span>
          <span class="dot animate-blink animation-delay-300"></span>
        </span>
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
    @apply rounded-2xl px-5 backdrop-blur-md text-white/80;
    @apply transition-colors duration-200;
  }
  textarea::placeholder {
    @apply text-white/30;
  }
  textarea {
    @apply py-3;
    @apply bg-white/5 hover:bg-white/[.07] resize-none focus:outline-none;
  }
  button {
    @apply h-12 flex items-center justify-center;
    @apply bg-black/30 hover:bg-black/40 active:bg-black/50;
  }
  button .dot {
    @apply h-1.5 w-1.5 rounded-full bg-white/80;
  }
</style>