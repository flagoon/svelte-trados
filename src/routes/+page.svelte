<script lang="ts">
  let { data } = $props();
  const {
    page: { fields },
  } = data;
</script>

<h1>{"title"}</h1>
<pre>{JSON.stringify(fields, undefined, 2)}</pre>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
