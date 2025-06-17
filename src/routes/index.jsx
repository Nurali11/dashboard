import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { pageRouteLists } from '../hooks/paths.jsx'

const PageRoutes = () => {
  return (
        <Routes>
        {pageRouteLists.map((item) => <Route path={item.path} element={item.element}></Route>)}
      </Routes>
  )
}

export default PageRoutes