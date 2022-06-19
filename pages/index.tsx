import { ReactElement } from "react"
import Layout from "../components/layout"
import Logo from "../components/logo"
import type { NextPageWithLayout } from "./_app"

const IndexPage: NextPageWithLayout = () => {
    return (
      <>
        <Logo color={"white"} />
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