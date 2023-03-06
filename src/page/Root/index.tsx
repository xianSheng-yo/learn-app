import React, { useEffect } from 'react'
import {
  Link,
  LoaderFunction,
  Outlet,
  useLoaderData,
  useNavigation
} from 'react-router-dom'
import { getData } from '../D3'

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
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/d3">D3</Link>
          </li>
          <li>
            <Link to="/sortable">Sortable</Link>
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
