import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

function Members({auth}) {
  return (
    <AppLayout user={auth.user}>
      <Head title='Members' />
      <div>Members</div>
    </AppLayout>
  )
}

export default Members