import Layout from '../../components/layout'
import { getAllProjectsIds, getProjectData } from '../../lib/projects'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Project({ projectData }){
    return (
    <Layout>
        <Head>
        {projectData.title}
        </Head>
        <article>
            <h1 className={utilStyles.headingX}>{projectData.title}</h1>
            <div className={utilStyles.lightText}>
                <Date dateString={projectData.date} />
            </div>
            <div className={utilStyles.img}>
                <a href={projectData.url} target="_blank"><img src={projectData.coverImage} title="Visit Website"/></a>
            </div>
            <div dangerouslySetInnerHTML={{__html: projectData.contentHtml}} />
        </article>
    </Layout>
  )
}

export async function getStaticPaths() {
    //Return a list of possible value for id
    const paths = getAllProjectsIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }){
   // Fetch necessary data for the blog post using params.id
    const projectData = await getProjectData(params.id)
    return {
        props: {
            projectData
        }
    }
}