import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';



export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);
  
    return {
      props: {
        postData,
      },
    };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={"text-[2rem] leading-[1.3] font-extrabold tracking-tighter my-[1rem]"}>{postData.title}</h1>
          <div className={"text-gray-500 mb-[1rem]"}>
            <Date dateString={postData.date} />
          </div>
          <div className={"text-[18px] "} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    );
}