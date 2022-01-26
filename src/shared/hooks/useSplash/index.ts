const useSplash = (): void => {
  onMounted(() => {
    const timeoutId = setTimeout(() => {
      document.getElementById('splash')?.remove()
    }, 200)

    return () => clearTimeout(timeoutId)
  })
}

export { useSplash }
