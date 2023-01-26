import { useState } from 'react'
import { Language } from '../models/Languages'
import { APP_CONFIG } from '../config/config'

const useSupportedLanguages = (onSuccess: (languages: Array<Language>) => void) => {
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
                .then(onSuccess)
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