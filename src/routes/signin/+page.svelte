<script lang="ts">
    import * as Alert from "$lib/components/ui/alert/index.js";
    import AlertCircleIcon from "@lucide/svelte/icons/alert-circle";
    import ZxForm from "zxforms-svelte";

    import { signIn } from "$lib/auth-client";
    import { z } from "zod";

    let error: {
        code?: string | undefined;
        message?: string | undefined;
        status: number;
        statusText: string;
    } | null = null;

    let signinSchema = z
        .object({
            email: z.email(),
            password: z.string().nonempty().meta({ type: "password" }),
        })
        .meta({ title: "Log In", callback: signInCallback });

    async function signInCallback(data: z.infer<typeof signinSchema>) {
        console.log(data);
        let result = await signIn.email(data);
        console.log(result);
        if (result.error) {
            error = result.error;
        }
    }
</script>
<div class="flex items-center h-[100vh]">
<ZxForm schema={signinSchema}>
    {#snippet footer()}
        {#if error}
            <Alert.Root variant="destructive" class="mt-4">
                <AlertCircleIcon />
                <Alert.Title>{error.statusText}</Alert.Title>
            </Alert.Root>
        {/if}
    {/snippet}
</ZxForm>
</div>