<script lang="ts">
  import checkSvg from '../assets/check.svg'
  import copySvg from '../assets/copy.svg'
  import { fade } from 'svelte/transition'
  import { generateFunctionName } from '../services/ia'

  export let function_name: string

  let function_goal = ''
  let loading = false
  let copied = false

  const eg = 'Translate a given text from one language to another'
  
  const unnecessaryWords = [
    'my function',
    'my function goal',
    'my function goal is',
    'my function goal is to'
  ]

  const removeUnnecessaryWords = (text: string) => {
    unnecessaryWords.forEach((word) => {
      text = text.toLowerCase().replace(word, '')
    })
    return text
  }

  const generate = () => {
    loading = true
    const goal = removeUnnecessaryWords(function_goal)
    generateFunctionName(goal || eg).then((response) => {
      function_name = response
      loading = false
    }).catch(() => {
      alert('Something went wrong. Please try again.')
      loading = false
    })
  }

  let copiedTimer: NodeJS.Timeout
  
  const copyToClipboard = () => {
    clearTimeout(copiedTimer)
    copied = true
    navigator.clipboard.writeText(function_name)
    copiedTimer = setTimeout(() => {
      copied = false
    }, 1000)
  }
</script>

<div class="flex flex-col gap-4">
  <textarea bind:value={function_goal} rows="4" placeholder="Insert your function goal here (e.g. {eg})" class="text-sm"></textarea>
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
    <button on:click={copyToClipboard} class="min-w-[50px] !px-0" title="Copy to clipboard">
      {#if copied}
        <img src={checkSvg} class="opacity-80" width="24" height="24" alt="copy" in:fade={{ duration: 100, delay: 100 }}>
      {:else}
        <img src={copySvg} class="opacity-80" width="20" height="20" alt="check" in:fade={{ duration: 100, delay: 100 }}>
      {/if}
    </button>
  </div>
</div>

<style lang="postcss">
  button, textarea {
    @apply rounded-2xl px-5 backdrop-blur-md text-white/80;
    @apply transition-colors duration-200;
  }
  textarea::placeholder {
    @apply text-white/30 text-base;
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