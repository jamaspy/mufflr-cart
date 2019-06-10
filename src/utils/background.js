import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "bg.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
     render={data => {
       // Set ImageData.
       const imageData = data.desktop.childImageSharp.fluid
       return (
     
          <BackgroundImage Tag="section"
                           className={className}
                           fluid={imageData}
                           backgroundColor={`#040e18`}
          >
          <div style={{
            background:"linear-gradient(#243B55  0, #141E30 100%)",width:"50vh", 
            height:"100%", 
            display:"inline-block",
            marginTop:"-1px",
            clipPath: "polygon(0 0, 100% 0, 75% 100%, 0% 100%)",
            color:"white",
            fontWeight:300,
            }}></div>
         
          </BackgroundImage>
        
       )
     }
     }
    />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: repeat-y;
  background-size: cover;
  z-index: 999;
`

export default StyledBackgroundSection