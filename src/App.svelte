<script lang="ts">
  import githubSvg from './assets/github.svg'
  import Generator from './lib/Generator.svelte'
  import { typewriter } from './utils/typewriter'

  let function_name = 'generateFunctionName'
</script>

<main class="flex flex-col items-center justify-center min-w-max min-h-screen px-8 py-12">
  <div class="flex gap-2 select-none">
    {#key function_name}
      <h1 in:typewriter={{ delay: 400 }} out:typewriter={{ speed: 4 }}>{function_name}</h1>
    {/key}
    <span class="suffix">();</span>
  </div>
  <p class="description">
    Generate a function name based on your function goal with
    <a href="https://cohere.ai/" target="_blank" rel="noreferrer" class="link-cohere">
      co:here AI
    </a>
  </p>
  <div class="card">
    <Generator bind:function_name />
  </div>
  <a href="https://github.com/jhormanrus/generateFunctionName" target="_blank" rel="noreferrer" class="link-code">
    <img src={githubSvg} width="22" height="22" alt="copy" title="Copy to clipboard">
    View code
  </a>
</main>

<style lang="postcss">
  h1 {
    @apply text-5xl pb-4 font-bold text-transparent animate-text bg-clip-text opacity-90;
    @apply bg-gradient-to-r from-rose-400 via-fuchsia-500 to-purple-500;
  }
  .suffix {
    @apply text-5xl pb-4 font-bold opacity-80 tracking-widest;
  }
  .description {
    @apply font-medium text-center text-2xl text-stone-300 opacity-80 max-w-lg;
  }
  .card {
    @apply relative rounded-3xl bg-white/5 p-5 shadow-xl shadow-black/5 mt-12 w-80;
    @apply after:blob1 after:top-[20%] after:left-[50%];
    @apply before:blob2 before:top-[0%] before:right-[40%];
  }
  .card::after,
  .card::before {
    @apply content-[''] absolute opacity-10 blur-3xl -z-10;
  }
  .link-cohere {
    @apply font-semibold italic text-white;
    @apply hover:underline decoration-purple-500/80;
    @apply transition-all duration-200;
  }
  .link-code {
    @apply flex items-center gap-2 mt-5 opacity-20 hover:opacity-30;
    @apply transition-opacity duration-200;
  }
</style>