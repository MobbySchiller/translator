export type Dictionary = {
    appName: string,
    components: {
        header: {
            title: string,
            api: string,
            github: string,
        },
        input: {
            placeholder: string,
        },
        message: {
            tryAgain: string,
            error: string,
            empty: string,
        },
        footer: {
            credits: string,
        },
    }
}