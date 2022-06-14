import * as React from "react"
import {graphql} from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import * as containerStyles from '../styles/container.module.css'

const IndexPage = ({data}) => {
return (
        <main>
            <title>Home Page</title>



        <div className={containerStyles.container}>

                      <h1>GatsbyJS Blog Example</h1>
        

            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                      <hr></hr>
                        <h2>{node.frontmatter.title}</h2>
                        <p>Posted: {node.frontmatter.date}</p>
                        
                        <MDXRenderer>
                            {node.body}
                        </MDXRenderer>
                    </article>

                ))

                
            }

</div>
        
        </main>
    )
}

export const query = graphql`
query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }

`




export default IndexPage
