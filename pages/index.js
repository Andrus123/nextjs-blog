import Link from "next/link";
import Date from "../components/date";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { getSortedProjectsData } from "../lib/projects";

export default function Home({ allPostsData, allProjectsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <strong>Kadir</strong> (My second and memorable name), I'm
          a Full-Stack Developer and Translator (English/Spanish)
        </p>
        <p>
          My Approach to work is with the MERN Stack, also like to test new languages or
          tecnologies.
        </p>
        <p>
          (This portfolio is build with{" "}
          <a href="https://nextjs.org/">Next.js</a>.)
        </p>
        <h4>Background: </h4>
        <p>
          I'm a Computer Science Student, i am halfway through my career, also
          Business graduate, (Commercial Engineering Degree) but self-taught in
          React and Web Development.
        </p>
        <strong>more info:</strong>{" "}
        <a href="https://drive.google.com/file/d/1vDQMDziRWz8oCk8_igX5qtwWrvE9BTUv/view?usp=sharing">
          CV English
        </a>{" "}
        | <spacer> </spacer>
        <a href="https://drive.google.com/file/d/1K9ubMGUyD8EYiNObcnGQYc9uA5F8u-q0/view?usp=sharing">
          {" "}
          CV Español
        </a>
        <h4>Skills:</h4>
        <p>
          {" "}
          <span>HTML</span>: 90% | <span>CSS</span>: 90% |{" "}
          <span>JavaScript</span>:75% | <span>ReactJs</span>: 60%
        </p>
        <p>
          {" "}
          <span>React Native</span>: 60% | <span>GraphQL</span>: 50% |{" "}
          <span>Node Js</span>: 65%
        </p>
        <p>
          {" "}
          <span>NPM</span>: 70% | <span>Git</span>: 70% | <span>Java</span>: 60%
          | <span>C#</span>: 50%
        </p>
        <p>
          {" "}
          <span>MongoDB</span>: 60% | <span>NextJs</span>: 50% |{" "}
          <span>Excel</span>: 70%
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingMd}>Projects</h2>
        <ul className={utilStyles.list}>
          {allProjectsData.map(({ id, date, title, coverImage }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/projects/${id}`}>
                <a>{title}</a>
              </Link>
              <Link href={`/projects/${id}`}>
                <a>
                  <img src={coverImage} />
                </a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingMd}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allPostsData,
      allProjectsData,
    },
  };
}
