import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
//import { getSortedPostsData, PostData } from '../lib/posts'
//import Link from 'next/link'
//import Date from '../components/date'
//import { GetStaticProps } from 'next'

//export default function Home({
//  allPostsData
//}: {
//  allPostsData:PostData[]
//}): React.ReactNode {
export default function Home(): React.ReactNode {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <h1>KetoPal</h1>
        <h2>A modern application for managing medical keto diets</h2>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>We are under construction</h2>
        <p>We are working to bring this application to public availability as quickly as we can. We appreciate your patience in the interim.</p>
      </section>
    </Layout>
  )
}

//export const getStaticProps: GetStaticProps = async () => {
//  const allPostsData = getSortedPostsData()
//  return {
//    props: {
//      allPostsData
//    }
//  }
//}
