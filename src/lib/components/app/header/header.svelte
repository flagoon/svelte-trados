<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import ModeSwitch from "../mode-switch.svelte";

  let {
    menuList,
  }: {
    menuList: {
      name: string;
      slug: string;
    }[];
  } = $props();

  const menuLinks = menuList.map((product) => {
    return {
      name: product.name,
      slug: product.slug,
    };
  });
</script>

<div class="flex gap-2 p-4">
  <a class="mr-4" href="/">LOGO</a>
  {#each menuLinks as { name, slug }}
    <Button href={slug}>{name}</Button>
  {/each}
  <div class="ml-auto">Kontakt</div>
  <ModeSwitch />
</div>
