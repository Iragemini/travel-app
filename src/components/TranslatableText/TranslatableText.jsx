import {LanguageConsumer} from '../../context';
import PropTypes from 'prop-types';

const TranslatableText = ({dictionary}) => (
  <LanguageConsumer>{({language}) => dictionary[language]}</LanguageConsumer>
);

TranslatableText.propTypes = {
  dictionary: PropTypes.objectOf(PropTypes.string).isRequired
}

export default TranslatableText;
