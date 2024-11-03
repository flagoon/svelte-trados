<script lang="ts">
  import { Header } from "$lib/components/app/header";
  import { ModeWatcher } from "mode-watcher";
  import "../app.css";
  import ModeSwitch from "$lib/components/app/mode-switch.svelte";

  let { children } = $props();
  const menuList = [
    {
      name: "Trados",
      slug: "/trados",
    },
    {
      name: "Szkolenia",
      slug: "/szkolenia",
    },
    {
      name: "Blog",
      slug: "/blog",
    },
    {
      name: "Pomoc",
      slug: "/pomoc",
    },
  ];
</script>

<ModeWatcher />
<Header {menuList} />
{@render children()}
<footer>footer</footer>
