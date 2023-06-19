import PropTypes from 'prop-types';


import "./index.css"



const Button = ({title}) => {
    Button.propTypes = {
        title: PropTypes.node.isRequired,
      };

  return (
    <button className="btn">{title}</button>
  )
}

export default Button