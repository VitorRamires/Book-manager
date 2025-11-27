import PropTypes from "prop-types";

/**
 * Component to display a icon navigation pages
 *
 * @param {Object} props - React component props
 * @param {Object} props.iconSrc - image icon page
 *  @param {Object} props.navPage - text icon page
 * @returns {JSX.Element}
 */

export function NavIcon({ iconSrc, navPage }) {
  

  return (
    <div className="navIcon-wrapper">
      <img src={iconSrc} />
      <p>{navPage}</p>
    </div>
  );
}

NavIcon.propTypes = {
  ref: PropTypes.any,
  iconSrc: PropTypes.string,
  navPage: PropTypes.string,
};
