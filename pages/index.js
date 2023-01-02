import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={"text-xl leading-6 "}>
        <p className={"my-[20px] font-["}>Hello, I'm Fernando. I'm a Web Developer.</p>
        <p className={"my-[20px] "}>
          (This is a sample website - you’ll be building a site like this in {' '}
          <a className={"text-[#0070f3] no-underline hover:underline"} href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={"text-xl leading-[1.5] pt-[1px]"}>
        <h2 className={"font-bold text-2xl leading-[1.4] my-4"}>Blog</h2>
        <ul className={" p-0 m-0 list-none"}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={"mb-[1.5rem] list-none text-gray-500 "} key={id}>
              <Link className={"text-[#0070f3] no-underline hover:underline"} href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={"text-gray-500 leading-6 "}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}