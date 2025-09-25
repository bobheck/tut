import type { CustomError, ExtendedPostgrestError } from '@/types/Error'
import type { PostgrestError } from '@supabase/supabase-js'

export const useErrorStore = defineStore('error-store', () => {
  // 1. The reactive variable type is fine.
  const activeError = ref<null | CustomError | ExtendedPostgrestError>(null)
  const isCustomError = ref(false)

  const setError = ({
    error,
    customCode
  }: {
    error: string | PostgrestError | Error
    customCode?: number
  }) => {
    // 2. Determine if it's a simple string error (custom)
    if (typeof error === 'string') {
      isCustomError.value = true

      // 3. FIX: Manually construct an object that conforms to the CustomError interface.
      // We cannot just use new Error(), as the Error object does not have 'customCode'
      activeError.value = {
        message: error, // Use the string as the message
        statusCode: customCode || 500,
        // You might need to add other properties required by CustomError here
      } as unknown as CustomError 

      return
    }

    // 4. Handle built-in Error instance (not PostgrestError)
    if (error instanceof Error) {
      isCustomError.value = true
      
      // FIX: Again, wrap the standard Error into your custom structure
      activeError.value = {
        message: error.message, // Use the built-in error message
        statusCode: customCode || 500,
        // You might need to add other properties required by CustomError here
      } as unknown as CustomError
      
      return
    }

    // 5. Handle PostgrestError (from Supabase)
    // The 'error' object here is PostgrestError, which is presumably compatible
    // with ExtendedPostgrestError (or a subset of it)
    isCustomError.value = false
    
    // FIX: Assign the error directly, but you cannot assign statusCode/customCode 
    // to it unless PostgrestError/ExtendedPostgrestError defines it.
    activeError.value = error as ExtendedPostgrestError

    // FIX: If you absolutely need to set a custom code on the PostgrestError:
    // This part is DANGEROUS unless you are sure ExtendedPostgrestError has the property.
    // Assuming ExtendedPostgrestError extends PostgrestError AND adds statusCode:
    (activeError.value as ExtendedPostgrestError).statusCode = customCode || 500
  }


  const clearError = () => {
    activeError.value = null
    isCustomError.value = false
  }

  return {
    activeError,
    setError,
    isCustomError,
    clearError
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useErrorStore, import.meta.hot))
}