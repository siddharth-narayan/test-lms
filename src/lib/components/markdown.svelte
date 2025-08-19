<script lang="ts">
    import "./markdown.css"
    
    import { codeToHtml } from "shiki"
    import { onMount } from "svelte";

    let { src } = $props();
    let html = $state("");

    onMount(async () => {
        let res = await fetch(`/content/${src}.html`);
        html = await res.text();
    });

    $effect(() => {
        html;
        MathJax.typeset?.()
        
    //    processCodeElements(document.getElementsByTagName("code"))
    });

    // function processCodeElements(elements: HTMLCollectionOf<HTMLElement>) {
    //     for (let i = 0; i < elements.length; i++) {
    //         console.log(elements.item(i)?.innerHTML)
    //     }
    // }

    // function processCodeElement(element: HTMLElement) {
    //     HTML
    // }
</script>
<div class="flex flex-col gap-4">
{@html html}
</div>
