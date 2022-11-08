import React from "react"
import ContentLoader from "react-content-loader"

const CategorySkeleton = (props) => (
    <ContentLoader 
    className="filter-item-list-elt"
    speed={2}
    width={235}
    height={27}
    viewBox="0 0 235 27"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="10" y="5" rx="5" ry="5" width="200" height="20" />
  </ContentLoader>
)

export default CategorySkeleton