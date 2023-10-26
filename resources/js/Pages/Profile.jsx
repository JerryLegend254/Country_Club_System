import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

function Profile({auth}) {
  return (
    <AppLayout user={auth.user}>
      <Head title='Profile' />
      <div>Profile</div>

    </AppLayout>
  )
}

export default Profile