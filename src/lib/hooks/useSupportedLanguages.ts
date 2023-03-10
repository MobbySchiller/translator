import { useState } from 'react'
import { Language, LanguageCode } from '../models/Languages'
import { APP_CONFIG } from '../config/config'
import useTranslations from './useTranslations'

const useSupportedLanguages = (onSuccess: (languages: Array<Language>) => void) => {
    const T = useTranslations()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [hasError, setHasError] = useState<boolean>(false)

    return {
        isLoading,
        hasError,
        fetch: () => {
            setIsLoading(true)
            setHasError(false)

            fetch(`${APP_CONFIG.API_URL}languages`)
                .then(response => {
                    if (response.ok) {
                        return response
                    }
                    throw response
                })
                .then(response => response.json())
                .then(languages => {
                    const allLanguages: Array<Language> = [
                        {
                            code: LanguageCode.Auto,
                            name: T.common.autoTranslate,
                            targets: []
                        }
                    ].concat(languages)

                    onSuccess(allLanguages)
                })
                .catch(() => {
                    setHasError(true)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }
    }
}

export default useSupportedLanguages