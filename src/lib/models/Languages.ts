export type Language = {
    code: LanguageCode,
    name: string,
    targets: string[]
}

export enum LanguageCode {
    English = 'en',
    Chinese = 'zh',
    German = 'de',
    Polish = 'pl',
    Spanish = 'es',
}