
import Layout from "@/components/layout";
import Partners from "@/components/parnert";
import TeamSect from './components/team'
import HeroTeam from './components/heroTeam'

export default function Team() {
    return (
        <>
            <Layout>
                <HeroTeam />
                <TeamSect />
                <Partners />
            </Layout>
        </>
    );
}