export const useUiState = () => {
  const stickyMenu = useState('stickyMenu', () => false)
  const navigationOpen = useState('navigationOpen', () => false)
  const modalNewsletter = useState('modalNewsletter', () => false)
  const modalSearch = useState('modalSearch', () => false)
  const scrollTop = useState('scrollTop', () => false)

  return {
    stickyMenu,
    navigationOpen,
    modalNewsletter,
    modalSearch,
    scrollTop
  }
}
