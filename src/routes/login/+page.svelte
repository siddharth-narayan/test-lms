<script>
    import { signIn } from "$lib/auth-client";
    
    let email = $state("");
    let password = $state("");

    function onsubmit() {
        console.log("logged in?");
        signIn.email({
            email: email,
            password: password,
        })
    }
</script>

<div class="flex justify-center items-center w-full h-screen">
    <form {onsubmit} class="flex flex-col gap-4 w-1/3 border-zinc-600 p-8">
        <h1>Log In</h1>
        <label>
            <span>Email:</span>
            <input type="email" placeholder="person@example.com" bind:value={email} />
        </label>

        <label>
            <span> Password: </span>
            <input type="password" placeholder="Password" bind:value={password}/>
        </label>

        <input type="submit" id="submit" value="Log In" />
    </form>
</div>

<style>
    input {
        margin-block: 0.5em;
        background-color: var(--color-zinc-800);
        color: var(--color-zinc-50);
        display: block;
        width: 100%;
        padding: 1em;
    }

    h1 {
        font-size: x-large;
        font-weight: bold;
    }

    #submit {
        transition:
            filter 0.3s ease,
            transform 0.2s ease;
    }

    #submit:hover {
        filter: brightness(125%);
        cursor: pointer;
    }
</style>
