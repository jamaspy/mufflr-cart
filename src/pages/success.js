import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle} from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby"
import SEO from "../components/seo"

const Home = () => (
  <main style={{height: "88vh", margin: 0,}}>
  <SEO title="Success" />
    <div style={{textAlign:"center", margin: "30px 30px", color:"green"}}>
    <FontAwesomeIcon icon={faMotorcycle} style={{fontSize:"4rem", marginTop:20, color:"darkgreen"}}/>
    <h1> Thank you for your message </h1>
    <h2>We will be in touch ASAP!  </h2>
    <Link style={{textDecoration:"none", color:"grey", marginBottom:"20px"}}
    to="/shop">Go Buy Some More Things</Link>
    </div>
  </main>
)

export default Home
