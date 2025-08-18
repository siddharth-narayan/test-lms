<svelte:head>
    <script>
		MathJax = {
			tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] }
		};
	</script>
	<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js" defer></script>
    
</svelte:head>
<script lang="ts">
    import { afterNavigate } from "$app/navigation";
    import { onMount } from "svelte";

    let { src } = $props()
    let html = $state("")

    afterNavigate(() => MathJax.Hub.Queue(['Typeset', MathJax.Hub]));
    onMount( async () => {
        console.log(MathJax)
        let res = await fetch(`/content/${src}.html`)
        html = await res.text()
        
    })
</script>

{@html html}
