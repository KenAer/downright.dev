import { ReactElement } from "react"
import Layout from "../components/layout"
import Logo from "../components/logo"
import type { NextPageWithLayout } from "./_app"
import EmailIcon from "../components/icons/email"
import TwitterIcon from "../components/icons/twitter"

const IndexPage: NextPageWithLayout = () => {
    return (
      <>
        <Logo />
        <div className="flex justify-center text-neutral-400">
            <div className="grid grid-flow-col gap-4">
                <EmailIcon />
                <TwitterIcon />
            </div>    
        </div>
      </>
    )
}

IndexPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default IndexPage