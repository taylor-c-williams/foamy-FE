import { useContext, createContext, useState } from 'react'

const PageContext = createContext()

const PageProvider = ({ children }) => {
  const [pageNumber, setPageNumber] = useState(1)

  return (
    <PageContext.Provider value={{ pageNumber, setPageNumber }}>
      {children}
    </PageContext.Provider>
  )
}

const usePage = () => {
  const context = useContext(PageContext)
  if (context === undefined) {
    throw new Error('usePage needs to be defined inside the Page Provider')
  }
  return context
}

export { PageContext, PageProvider, usePage }
