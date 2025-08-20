<script lang="ts">
    import { page } from '$app/stores';
    import Markdown from "$lib/components/markdown.svelte";

    let { slug } = $page.params
    console.log(slug)
</script>

<div class="p-8">
    <Markdown src="index" />
</div>
