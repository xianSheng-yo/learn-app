import React, { useEffect } from 'react'
import {
  NavLink,
  LoaderFunction,
  Outlet,
  useLoaderData,
  useNavigation
} from 'react-router-dom'
import { getData } from '../D3/d3'

export const loader: LoaderFunction = async (args) => {
  const url = new URL(args.request.url)
  const q = url.searchParams.get('q')
  console.log('args: ', { args, url, q })
  const data = await getData()
  return { data }
}

const Root: React.FC = () => {
  const { data } = useLoaderData() as { data: number[] }
  const navigation = useNavigation()
  useEffect(() => {
    console.log('data: ', data)
  }, [data])
  useEffect(() => {
    console.log('navigation: ', navigation)
  }, [navigation])
  return (
    <>
      <div>
        <ul
          style={{
            padding: '0 60px',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/d3">D3</NavLink>
          </li>
          <li>
            <NavLink to="/sortable">Sortable</NavLink>
          </li>
          <li>
            <NavLink to="/pixi">Pixi</NavLink>
          </li>
        </ul>
        <hr />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Root
