import Head from 'next/head'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Layout from '@/components/Layout'
import TodoList from '@/components/TodoList'

export default function Home() {
  return (
    <>
      <Head>
        <title>fs interview task</title>
        <meta name="description" content="Interview Task" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <TodoList />
      </Layout>
      
      
    </>
  )
}

export const getServerSideProps = withPageAuthRequired();
