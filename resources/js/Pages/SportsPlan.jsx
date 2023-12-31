import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

function SportsPlan({auth}) {
  return (
    <AppLayout user={auth.user}>
      <Head title='Sports Plan' />
      <div>SportsPlan</div>
    </AppLayout>
  )
}

export default SportsPlan