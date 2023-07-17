
import Layout from "@/components/layout";
import Partners from "@/components/parnert";
import BlogPost from './components/post'
import HeroBlog from './components/heroBlog'

export default function Blog() {
    return (
        <Layout>
            <HeroBlog />
            <BlogPost />
            <Partners />
        </Layout>
    );
}