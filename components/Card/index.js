import PropTypes from 'prop-types';
import Button from '@/components/Button';


function Card(props) {
  const {
    customclass,
    Text,
    paragraph,
    url
  } = props;


  return (
    <div className="card">
      <div className="boxes">
        <div className={`${customclass} imgCards`}>
          <h1 className="title">
            {Text}
          </h1>
        </div>
        <div>
          <p className="paragraph">
            {paragraph}
          </p>
          <div>
            <div className="driver"></div>
            <Button
              textBtn='Read More' 
              url={url}/>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  customclass: PropTypes.string.isRequired,
  Text: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};


export default Card;
