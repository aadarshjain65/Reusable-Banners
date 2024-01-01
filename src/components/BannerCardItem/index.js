import './index.css'

const ReusableBanners = props => {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards

  return (
    <li className={className}>
      <div>
        <h1 className="header-text">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button">Show More</button>
      </div>
    </li>
  )
}

export default ReusableBanners
