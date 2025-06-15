'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getToken } from '../utils/auth'

export const withAuth = (Component: any) => {
  return function ProtectedPage(props: any) {
    const router = useRouter()
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
      if (!getToken()) {
        router.replace('/login')
      } else {
        setAuthenticated(true)
      }
    }, [])

    if (!authenticated) return null
    return <Component {...props} />
  }
}
