import React from "react"
import ContentLoader from "react-content-loader"

const CardSkeleton = (props) => (
  <ContentLoader 
    className="card-item__content"
    speed={2}
    width={250}
    height={450}
    viewBox="0 0 250 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="10" y="268" rx="10" ry="10" width="86" height="35" /> 
    <rect x="126" y="268" rx="2" ry="2" width="114" height="35" /> 
    <rect x="10" y="317" rx="5" ry="5" width="230" height="40" /> 
    <rect x="10" y="394" rx="2" ry="2" width="230" height="30" /> 
    <rect x="10" y="14" rx="2" ry="2" width="230" height="244" /> 
    <rect x="10" y="369" rx="5" ry="5" width="125" height="6" />
  </ContentLoader>
)

export default CardSkeleton