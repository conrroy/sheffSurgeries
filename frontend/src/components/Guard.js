import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { RootStore } from '../store'

export default function Guard({ role, children }) {
  const { account } = RootStore
  const navigation = useLocation()
  if (role === account.role) {
    return <>
      {children}
    </>
  }
  toast.error('You do not have permission to access this page')
  return <Navigate to={-1} />
}
