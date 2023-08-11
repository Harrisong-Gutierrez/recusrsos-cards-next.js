import PropTypes from 'prop-types';

function Button(props) {

  const {
    textBtn,
    url
  } = props;

  return (
    <a href={url}>
      <button className="button">
        {textBtn}
      </button>
    </a>

  );
}

Button.propTypes = {

  textBtn: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired

};

export default Button;


