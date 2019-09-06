import styled from '@emotion/styled';
import colors from '../../styles/colors';

const backgroundColor = (theme) => {
  switch (theme) {
    case 'primary':
      return colors.grandrounds.primaryBrand;
    case 'highlight':
      return colors.grandrounds.blueHighlight;
    case 'success':
      return colors.success;
    case 'error':
      return colors.error;
    case 'warning':
      return colors.warning;
    default:
      return colors.grandrounds.primaryBrand;
  }
};

const BadgeContainer = styled.div((props) => ({
  'background-color': backgroundColor(props.theme),
  'border-radius': '5px',
  color: 'white',
  display: 'inline-block',
  padding: '5px 10px',
}));

export default BadgeContainer;
