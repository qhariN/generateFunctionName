<script lang="ts">
  import { generateFunctionName } from "../services/ia";

  let function_goal = ''

  const generate = () => {
    generateFunctionName(function_goal).then((response) => {
      console.log(response)
    })
  }
</script>

<textarea bind:value={function_goal} class="border" name="function goal" rows="5" placeholder="Write your function goal"></textarea>

<button on:click={generate}>
  Generar nombre
</button>
