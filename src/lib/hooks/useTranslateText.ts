import { useState } from 'react'
import { APP_CONFIG } from '../config/config'
import { SelectedLanguages } from '../types/selectedLanguages'

const useTranslateText = (onSuccess: (translatedText: string) => void) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [hasError, setHasError] = useState<boolean>(false)

    return {
        isLoading,
        hasError,
        fetch: (query: string, selectedLanguages: SelectedLanguages) => {
            setIsLoading(true)
            setHasError(false)

            fetch(`${APP_CONFIG.API_URL}translate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify({
                    q: query,
                    source: selectedLanguages.source,
                    target: selectedLanguages.target,
                    format: 'text'
                })
            })
                .then(response => {
                    if (response.ok) {
                        return response
                    }
                    throw response
                })
                .then(response => response.json())
                .then(({ translatedText }) => onSuccess(translatedText))
                .catch(() => {
                    setHasError(true)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }
    }

}

export default useTranslateText