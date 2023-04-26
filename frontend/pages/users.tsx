import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

import Head from 'next/head'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Layout from '@/components/Layout'

import ManageUsers from '@/components/ManageUsers';
import AdminOnly from '@/components/Layout/AdminOnly';

const Users:NextPageWithLayout = () => {

  return (
    <>
      <Head>
        <title>Manage Users | fs interview task</title>
        <meta name="description" content="Manage Users | Interview Task" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminOnly>
        <ManageUsers />
      </AdminOnly>
    </>
  )

}

Users.getLayout = function getLayout(page: ReactElement){
  return <Layout>
      {page}
  </Layout>
}

export const getServerSideProps = withPageAuthRequired();
export default Users
