<script lang="ts">
  import { ModeWatcher } from "mode-watcher";
  import "../app.css";
  import ModeSwitch from "$lib/components/app/mode-switch.svelte";
  import Logo from "$lib/assets/logo_main_page.svelte";

  import Mail from "lucide-svelte/icons/mail";
  import { MENU_LIST } from "$constants/layout.constants";

  let { children } = $props();
</script>

<ModeWatcher />
<nav class="sticky bg-accent">
  <div class=" border-1 mx-auto flex max-w-7xl items-center gap-8 border-red-500">
    <a href="/"><Logo /></a>
    {#each MENU_LIST as { name, slug }}
      <a class="hover:text-muted-foreground" href={slug}>{name}</a>
    {/each}
    <a href="/kontakt" class="ml-auto flex gap-2 p-4 hover:text-muted-foreground"><Mail />Kontakt</a
    >
    <ModeSwitch />
  </div>
</nav>

<main class="mx-auto max-w-7xl">{@render children()}</main>
