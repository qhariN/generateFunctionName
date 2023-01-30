<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import Generator from './lib/Generator.svelte'
</script>

<div class="w-96 h-52 bg-fuchsia-500/10 blur-3xl absolute bottom-[50%] right-[50%]"></div>
<div class="w-96 h-52 bg-purple-500/10 blur-3xl absolute top-[50%] left-[50%]"></div>
<div class="w-52 h-80 bg-pink-500/10 blur-3xl absolute top-[35%] right-[45%]"></div>
<main class="flex flex-col items-center min-h-screen justify-center">

  <div>
    <div class="relative space-y-5 overflow-hidden rounded-2xl bg-white/5 p-4 shadow-xl shadow-black/5">
      <div class="h-36 rounded-lg bg-white/5 flex items-center">
        <div class="flex items-center">
          <div>
            <span class="left-bracket">&#123;</span>
          </div>
          <div class="flex gap-3">
            <div class="eye"></div>
            <div class="eye invisible"></div>
            <div class="eye"></div>
          </div>
          <div>
            <span class="left-bracket">&#125;</span>
          </div>
        </div>
      </div>
      <Generator />
    </div>
  </div>
</main>

<style lang="postcss">
  .left-bracket {
    @apply font-semibold text-transparent text-9xl bg-clip-text bg-gradient-to-b from-rose-400 via-fuchsia-500 to-indigo-500;
    @apply !leading-[.3];
    text-shadow: #fb7185 0 0 10px;
  }
  .eye {
    @apply bg-white;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
</style>