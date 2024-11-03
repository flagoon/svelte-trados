<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";

  let { data } = $props();
  const {
    page: { fields },
  } = data;
</script>

<h1>{"title"}</h1>
<Button class="ml-2" variant="destructive" size="sm">Click me</Button>
<p>Visit <a href={fields.slug}>svelte.dev/docs/kit</a> to read the documentation</p>
