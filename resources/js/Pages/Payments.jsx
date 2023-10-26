import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

function Payments({auth}) {
  return (
    <AppLayout user={auth.user}>
      <Head title='Payments' />
      <div>Payments</div>

    </AppLayout>
  )
}

export default Payments