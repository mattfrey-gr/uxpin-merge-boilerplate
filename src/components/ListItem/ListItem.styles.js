import styled from '@emotion/styled';
import borders from '../../styles/borders';
import colors from '../../styles/colors';
import typography from '../../styles/typography';

export const ListItemContainer = styled('div')`
  padding: 10px;
  border-bottom: ${`${borders.borderStandard} ${colors.grandrounds.lighterGrey}`};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  background-color: white;
`;

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
`;

export const FooterText = styled('div')`
  font-size: ${`${typography.size.s}px`};
  color: ${colors.grandrounds.grey};
  font-weight: ${typography.weight.bold};
`;
