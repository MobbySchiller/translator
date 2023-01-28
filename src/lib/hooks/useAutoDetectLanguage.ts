import { useState } from 'react'
import { AutoDetectedLanguage } from '../models/AutoDetectedLanguage'
import { APP_CONFIG } from '../config/config'

const useAutoDetectLanguage = (onSuccess: (autoDetectedLanguage: AutoDetectedLanguage) => void) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [hasError, setHasError] = useState<boolean>(false)

    return {
        isLoading,
        hasError,
        fetch: (query: string) => {
            setIsLoading(true)
            setHasError(false)

            fetch(`${APP_CONFIG.API_URL}detect`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify({
                    q: query
                })
            })
                .then(response => {
                    if (response.ok) {
                        return response
                    }
                    throw response
                })
                .then(response => response.json())
                .then(([autoDetectedLanguage]) => onSuccess(autoDetectedLanguage))
                .catch(() => {
                    setHasError(true)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }
    }

}

export default useAutoDetectLanguage