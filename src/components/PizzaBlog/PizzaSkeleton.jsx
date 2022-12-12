import React from "react"
import ContentLoader from "react-content-loader"

export const PizzaSkeleton = (props) => (
  <div className='pizza-block-wrapper'>
      <ContentLoader
          className="pizza-block"
          speed={2}
          width={280}
          height={466}
          viewBox="0 0 280 466"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          {...props}
      >
          <rect x="36" y="131" rx="0" ry="0" width="0" height="2" /> 
          <circle cx="136" cy="139" r="119" /> 
          <rect x="1" y="276" rx="5" ry="5" width="274" height="25" /> 
          <rect x="1" y="317" rx="10" ry="10" width="274" height="88" /> 
          <rect x="4" y="420" rx="10" ry="10" width="112" height="27" /> 
          <rect x="134" y="420" rx="10" ry="10" width="142" height="27" />
      </ContentLoader>
  </div>
)
