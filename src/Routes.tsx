import { Fragment } from 'react'
import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import PageLayout from './layouts/PageLayout'

const BASIC: Record<string, { [key: string]: any }> = import.meta.glob('/src/pages/(_app|404).tsx', { eager: true })
const COMPONENTS: Record<string, { [key: string]: any }> = import.meta.glob('/src/pages/**/[a-z[]*.tsx', { eager: true })

const basics = Object.keys(BASIC).reduce((basic, file) => {
  const key = file.replace(/\/src\/pages\/|\.tsx$/g, '')
  return { ...basic, [key]: BASIC[file].default }
}, {})

const components = Object.keys(COMPONENTS).map((component) => {
  const path = component
    .replace(/\/src\/pages|index|\.tsx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1')

  return { path, component: COMPONENTS[component].default }
})

export const Routes = () => {
  const App = basics['_app'] || Fragment
  // const NotFound = basics?.['404'] || Fragment

  return (
    <App>
      <ReactRouterRoutes>
        <Route element={<PageLayout />}>
          {components.map(({ path, component: Component = Fragment }) => (
            <Route key={path} path={path} element={Component} />
          ))}
          {/* <Route path="*" element={NotFound} /> */}
        </Route>
      </ReactRouterRoutes>
    </App>
  )
}