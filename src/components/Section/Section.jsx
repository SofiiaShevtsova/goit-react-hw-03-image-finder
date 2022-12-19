import PropTypes from 'prop-types';

import styles from 'styles/styles'
const { SectionContainer, SectionTitle } = styles;

const Section = props => {
  const { title, children } = props;
  return (
    <SectionContainer>
      {title && (<SectionTitle>{title}</SectionTitle>)}
      {children}
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]) ,
};

export default Section;
