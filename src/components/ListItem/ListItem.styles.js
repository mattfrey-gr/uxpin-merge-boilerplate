import styled from '@emotion/styled';
import borders from '../../styles/borders';
import colors from '../../styles/colors';
import typography from '../../styles/typography';

export const ListItemContainer = styled.div((props) => ({
  'align-items': 'center',
  'background-color': 'white',
  'border-bottom': `${borders.borderStandard} ${colors.grandrounds.lighterGrey}`,
  'border-left': props.highlight ? `5px solid ${colors.grandrounds.blueHighlight}` : 'none',
  'border-top-left-radius': props.highlight ? '2px' : 'none',
  display: 'flex',
  'flex-direction': 'row',
  'flex-wrap': 'nowrap',
  'justify-content': 'space-between',
  padding: '15px',
}));

export const IconContainer = styled('div')`
  padding-right: 20px;
`;

export const TextContainer = styled('div')`
  color: ${colors.grandrounds.primaryText};
  font-family: "Open Sans";
`;

export const FlexItemContainer = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
`;

export const PrimaryText = styled('div')`
  font-size: ${`${typography.size.l}px`};
`;

export const SecondaryText = styled('div')`
  font-size: ${`${typography.size.l}px`};
  color: ${colors.grandrounds.grey};
  margin-top: 3px;
`;

export const BadgeContainer = styled('div')`
  font-size: ${`${typography.size.s}px`};
  margin-top: 7px;
`;

export const FooterText = styled('div')`
  font-size: ${`${typography.size.s}px`};
  color: ${colors.grandrounds.grey};
  font-weight: ${typography.weight.bold};
  margin-top: 7px;
`;
