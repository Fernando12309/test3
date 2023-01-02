import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Fernando Carvalho';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div className={"max-w-xl py-[1rem] mt-[3rem] mb-[5rem] mx-auto"}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={"flex flex-col items-center"}>
        {home ? (
          <>
            <Image
              priority
              src='/profile.jpg'
              className={"rounded-full"}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={"text-4xl leading-[1.2] font-extrabold tracking-tighter my-[18px]"}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/profile.jpg"
                className={"rounded-full"}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={"text-[1.5rem] font-extrabold leading-[1.4] my-[1rem]"}>
              <Link href="/" className={"text-inherit "}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={"mt-[3rem]"}>
          <Link className={"text-[#0070f3] text-[18px]  hover:underline"} href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}