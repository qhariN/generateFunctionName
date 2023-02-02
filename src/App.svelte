<script lang="ts">
  import githubSvg from './assets/github.svg'
  import Generator from './lib/Generator.svelte'
  import { typewriter } from './utils/typewriter'

  let function_name = 'generateFunctionName'
</script>

<div class="bg-blob blob3 bottom-[30%] right-[45%]"></div>
<div class="bg-blob blob1 top-[52%] left-[50%]"></div>
<div class="bg-blob blob2 top-[60%] right-[50%]"></div>

<main class="flex flex-col items-center min-h-screen justify-center">
  <div class="flex gap-2 select-none">
    {#key function_name}
      <h1 in:typewriter={{ delay: 400 }} out:typewriter={{ speed: 4 }}>{function_name}</h1>
    {/key}
    <span class="suffix">();</span>
  </div>
  <p class="description">
    Generate a function name based on your function goal with
    <a href="https://cohere.ai/" target="_blank" rel="noreferrer" class="font-semibold italic underline decoration-wavy decoration-purple-500/90 hover:text-white transition-all duration-200">co:here AI</a>
  </p>
  <div class="card">
    <Generator bind:function_name />
  </div>
  <a href="https://github.com/jhormanrus/generateFunctionName" target="_blank" rel="noreferrer" class="flex items-center gap-2 mt-5 opacity-30">
    <img src={githubSvg} width="22" height="22" alt="copy" title="Copy to clipboard">
    View code
  </a>
</main>

<style lang="postcss">
  h1 {
    @apply text-5xl font-bold text-transparent animate-text bg-clip-text opacity-90;
    @apply bg-gradient-to-r from-rose-400 via-fuchsia-500 to-purple-500 h-16;
  }
  .suffix {
    @apply text-5xl font-bold opacity-80 tracking-widest;
  }
  .description {
    @apply font-medium text-center text-2xl text-stone-300 opacity-80 max-w-lg;
  }
  .card {
    @apply rounded-3xl bg-white/5 p-5 shadow-xl shadow-black/5 mt-12 w-96;
  }
  .bg-blob {
    @apply opacity-10 bg-cover bg-no-repeat blur-3xl absolute -z-10;
  }
  .blob1 {
    width: 332.3399658203125px;
    height: 258.9972229003906px;
    background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22432.34%22 height=%22358.997%22 viewBox=%22336.171 231.228 432.34 358.997%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M660.5 574Q415 648 348 384.5t245.5-74Q906 500 660.5 574Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23fb7185%22 d=%22M660.5 574Q415 648 348 384.5t245.5-74Q906 500 660.5 574Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  }
  .blob2 {
    width: 348.44647216796875px;
    height: 237.813720703125px;
    background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22348.446%22 height=%22237.814%22 viewBox=%22396.777 399.749 348.446 237.814%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M622.5 601q-238.5 101-225-77T636 423q225 77-13.5 178Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23d946ef%22 d=%22M622.5 601q-238.5 101-225-77T636 423q225 77-13.5 178Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  }
  .blob3 {
    width: 330.75px;
    height: 468.75px;
    background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%22330.75%22 height=%22468.75%22 viewBox=%22295.25 245 330.75 468.75%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M584 642.5q-84 142.5-220.5 0t0-312.5Q500 160 584 330t0 312.5Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23a855f7%22 d=%22M584 642.5q-84 142.5-220.5 0t0-312.5Q500 160 584 330t0 312.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  }
</style>