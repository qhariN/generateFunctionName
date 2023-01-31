<script lang="ts">
  import Generator from './lib/Generator.svelte'
</script>

<div class="w-96 h-52 bg-indigo-500/10 blur-3xl absolute bottom-[50%] right-[50%] -z-10"></div>
<div class="w-96 h-52 bg-purple-500/10 blur-3xl absolute top-[50%] left-[50%] -z-10"></div>
<div class="w-52 h-80 bg-violet-500/10 blur-3xl absolute top-[35%] right-[45%] -z-10"></div>
<main class="flex flex-col items-center min-h-screen justify-center">
  <div class="flex gap-2">
    <h1>generateFunctionName</h1>
    <span class="suffix">();</span>
  </div>
  <p class="description text-center">
    Generate a function name based on your function goal with
    <a href="https://cohere.ai/" target="_blank" rel="noreferrer" class="font-semibold italic underline decoration-wavy decoration-purple-500/90 hover:text-white transition-all duration-200">co:here AI</a>
  </p>
  <div class="rounded-3xl bg-white/5 p-5 shadow-xl shadow-black/5 mt-12 w-96">
    <Generator />
  </div>
</main>

<style lang="postcss">
  h1 {
    @apply text-5xl font-bold text-transparent animate-text bg-clip-text opacity-90;
    @apply bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 h-16;
  }
  .suffix {
    @apply text-5xl font-bold opacity-80 tracking-widest;
  }
  .description {
    @apply text-2xl font-medium text-stone-300 opacity-80;
  }
</style>