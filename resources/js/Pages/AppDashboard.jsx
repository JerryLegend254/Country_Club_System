import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

function AppDashboard({auth}) {
  return (
    <AppLayout user={auth.user}>
      <Head title='Dashboard' />
      <div>AppDashboard</div>
    </AppLayout>
  )
}

export default AppDashboard