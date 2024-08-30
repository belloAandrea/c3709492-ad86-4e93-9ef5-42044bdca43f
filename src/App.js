import React from 'react';\nimport Home from './pages/Home';\nimport ProjectCreation from './pages/ProjectCreation';\nimport Header from './components/Header';\nimport Footer from './components/Footer';\n\nfunction App() {\n  return (\n    <div>\n      <Header />\n      <main>\n        <Home />\n        <ProjectCreation />\n      </main>\n      <Footer />\n    </div>\n  );\n}\n\nexport default App;