import React from "react"
import {Layout} from "../components"
import { Link } from "gatsby"

const ErrorPage = () => (
  <Layout>
    <main style={{ minHeight: "90vh" }} className="section sectionCenter">
      <div class="error-container">
        <h1>Oops its a dead end</h1>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </div>
    </main>
  </Layout>
)

export default ErrorPage
