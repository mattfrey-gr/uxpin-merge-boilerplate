import PropTypes from 'prop-types';
import React from 'react';
import {
  BadgeContainer,
  FlexItemContainer,
  FooterText,
  IconContainer,
  ListItemContainer,
  PrimaryText,
  SecondaryText,
  TextContainer,
} from './ListItem.styles';
import Icon from '../Icon/Icon';
import Badge from '../Badge/Badge';
import colors from '../../styles/colors';

const ListItem = (props) => (
  <ListItemContainer highlight={props.highlight}>
    <FlexItemContainer>
      {props.icon && (
        <IconContainer>
          <Icon
            icon={props.icon}
            size={props.iconSize}
          />
        </IconContainer>
      )}
      <TextContainer>
        {props.primaryText && (
          <PrimaryText>
            {props.primaryText}
          </PrimaryText>
        )}
        {props.secondaryText && (
          <SecondaryText>
            {props.secondaryText}
          </SecondaryText>
        )}
        {props.highlight && (
          <BadgeContainer>
            <Badge theme="highlight">
              {props.highlightText}
            </Badge>
          </BadgeContainer>
        )}
        {props.footer && !props.highlight && (
          <FooterText>
            {props.footer}
          </FooterText>
        )}
      </TextContainer>
    </FlexItemContainer>
    {props.includeChevron && (
      <FlexItemContainer>
        <Icon
          color={colors.grandrounds.lightGrey}
          icon="ChevronRightSvg"
          size={props.chevronSize}
        />
      </FlexItemContainer>
    )}
  </ListItemContainer>
);

ListItem.propTypes = {
  chevronSize: PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']),
  footer: PropTypes.string,
  highlight: PropTypes.bool,
  highlightText: PropTypes.string,
  icon: PropTypes.oneOf([
    'ActionAddToFavoritesSvg',
    'ActionArchiveSvg',
    'ActionArrangeLeftSvg',
    'ActionArrangeRightSvg',
    'ActionArrangeVerticalCenterSvg',
    'ActionBreakSymbolSvg',
    'ActionChangeProjectGroupSvg',
    'ActionCloneSvg',
    'ActionCloseSvg',
    'ActionDetachingHandlerSvg',
    'ActionDisableSvg',
    'ActionDistributeVerticallySvg',
    'ActionDuplicateSvg',
    'ActionElementAlignCenterSvg',
    'ActionElementAlignSvg',
    'ActionElementFlipSvg',
    'ActionEnableSvg',
    'ActionExitSvg',
    'ActionFullScreenSvg',
    'ActionInsertDataSvg',
    'ActionLogOutSvg',
    'ActionMoveBehindSvg',
    'ActionMoveBySvg',
    'ActionMoveForwardSvg',
    'ActionMoveToBackSvg',
    'ActionMoveToFrontSvg',
    'ActionMoveToSvg',
    'ActionMultipropertyLockSvg',
    'ActionMultipropertyUnlockBordersSvg',
    'ActionMultipropertyUnlockCornersSvg',
    'ActionNextStateSvg',
    'ActionPathBreakSvg',
    'ActionPathDefaultSvg',
    'ActionPathDifferenceSvg',
    'ActionPathIntersectSvg',
    'ActionPathSubtractSvg',
    'ActionPathUnionSvg',
    'ActionPreviousStateSvg',
    'ActionRemoveFromGroupSvg',
    'ActionSetContentSvg',
    'ActionSwitchSvg',
    'ActionSymbolSyncSvg',
    'ActionUnarchiveSvg',
    'AdjustSettingsSvg',
    'AdvancedAnimationSvg',
    'AngleSvg',
    'ArrowAxisSvg',
    'ArrowEnterSvg',
    'ArrowGoBackSvg',
    'ArrowPlaySvg',
    'ArrowRedoSvg',
    'ArrowRepeatSvg',
    'ArrowReplaceSvg',
    'ArrowRetrieveSvg',
    'ArrowRotateSvg',
    'ArrowShowSvg',
    'ArrowSizeSvg',
    'ArrowThinSvg',
    'ArrowUndoSvg',
    'ArrowSvg',
    'BrandAppleSvg',
    'BrandGoogleSimpleSvg',
    'BrandGoogleSvg',
    'BrandSketchSvg',
    'BrandSlackSvg',
    'BrandTwitterSvg',
    'BrandTypekitSvg',
    'BrandUxpinSvg',
    'BrandWindowsSvg',
    'BuildingSvg',
    'CalendarSvg',
    'ChangelogSvg',
    'ChevronRightSvg',
    'ChevronSvg',
    'ClockSvg',
    'CodeBlockSvg',
    'CodeInlineSvg',
    'ColorDropSvg',
    'ColorsDropperSvg',
    'ColorsSchemesSvg',
    'ColorsSwatchesSvg',
    'ConnectionConnectedSvg',
    'ConnectionDisconnectedSvg',
    'CursorCrosshairSvg',
    'CursorDefaultSvg',
    'CursorPointerSvg',
    'DesktopAppSvg',
    'DotsSvg',
    'ElementsBoxSvg',
    'ElementsButtonSvg',
    'ElementsCheckboxSvg',
    'ElementsCircleSvg',
    'ElementsCodeComponentSvg',
    'ElementsElementSvg',
    'ElementsGenericSvg',
    'ElementsGroupingSvg',
    'ElementsHotspotSvg',
    'ElementsIconSvg',
    'ElementsImageSvg',
    'ElementsInputSvg',
    'ElementsMultiSelectSvg',
    'ElementsMultistatesEditSvg',
    'ElementsMultistatesSvg',
    'ElementsPathSvg',
    'ElementsRadioSvg',
    'ElementsSelectListSvg',
    'ElementsSliceSvg',
    'ElementsSymbolSvg',
    'ElementsTableSvg',
    'ElementsTextBlockSvg',
    'ElementsTextElementSvg',
    'ElementsTextareaSvg',
    'ElementsUngroupingSvg',
    'ElementsVideoSvg',
    'EndpointEmptyCircleSvg',
    'EndpointEmptyRectangleSvg',
    'EndpointEmptyRhombSvg',
    'EndpointEmptyTriangleSvg',
    'EndpointFilledArrowSvg',
    'EndpointFilledCircleSvg',
    'EndpointFilledRectangleSvg',
    'EndpointFilledRhombSvg',
    'EndpointFilledTriangleSvg',
    'EndpointLineSvg',
    'EndpointMirroredTriangleSvg',
    'EndpointNoneSvg',
    'EndpointOpenedTriangleSvg',
    'ExternalLinkSvg',
    'FeatureAnimationsSvg',
    'FeatureApprovalSvg',
    'FeatureChatSvg',
    'FeatureCommentsSvg',
    'FeatureDocumentationSvg',
    'FeatureGridSvg',
    'FeatureIterationSvg',
    'FeatureLayersSvg',
    'FeatureLivePresentationSvg',
    'FeatureMobileSvg',
    'FeatureResponsiveSvg',
    'FeatureSitemapSvg',
    'FeatureUsabilityTestingSvg',
    'FilesDownloadCloudSvg',
    'FilesUploadSvg',
    'FolderClosedOutlineSvg',
    'FolderClosedSvg',
    'FolderOpenedSvg',
    'GearSvg',
    'HeartSvg',
    'InfoSimpleSvg',
    'InfoWarningSvg',
    'LaptopSvg',
    'LayoutListSvg',
    'LayoutMediumTileSvg',
    'LayoutSmallTileSvg',
    'LibrariesDesignLibrariesSvg',
    'LibrariesMoreSvg',
    'LibrariesSimpleSvg',
    'LinkChainBreakSvg',
    'LinkChainSvg',
    'ListIndentationAddSvg',
    'ListIndentationRemoveSvg',
    'ListOrderedSvg',
    'ListUnorderedSvg',
    'MailSvg',
    'MaskSvg',
    'MinusOutlineSvg',
    'OpacitySvg',
    'OptionsViewSvg',
    'PadlockBrokenSvg',
    'PadlockLockedSvg',
    'PadlockUnlockedSvg',
    'PenToolSvg',
    'PencilSvg',
    'PersonSvg',
    'PiggyBankSvg',
    'PinMapSolidSvg',
    'PinMapSvg',
    'PinSimpleSvg',
    'PluginsSvg',
    'PlusOutlineSvg',
    'PlusSvg',
    'QuestionMarkSolidSvg',
    'QuestionMarkSvg',
    'ScrollToSvg',
    'SearchSvg',
    'ShapeDiamondSvg',
    'ShapeRhombusSvg',
    'ShapeStarSvg',
    'ShapeTriangleRightAngledSvg',
    'ShapeTriangleSvg',
    'ShareClosedSvg',
    'ShareOpenedSvg',
    'ShoppingCartSvg',
    'SoundMuteSvg',
    'SoundUnmuteSvg',
    'StateBaseSvg',
    'StatusApprovedSvg',
    'StatusPausedSvg',
    'StatusProgressSvg',
    'StatusRejectedSvg',
    'StatusWaitingSvg',
    'StrokeEndButtSvg',
    'StrokeEndRoundSvg',
    'StrokeEndSquareSvg',
    'StrokeJoinBevelSvg',
    'StrokeJoinMiterSvg',
    'StrokeJoinRoundSvg',
    'StrokePointAsymmetricSvg',
    'StrokePointDisconnectedSvg',
    'StrokePointMirroredSvg',
    'StrokePointStraightSvg',
    'ThunderSvg',
    'TickerSvg',
    'ToggleSvg',
    'TooltipLeftSvg',
    'TooltipTopSvg',
    'TrashSvg',
    'TypographyAlignCenterSvg',
    'TypographyAlignJustifySvg',
    'TypographyAlignLeftSvg',
    'TypographyCustomFontSvg',
    'TypographyFontSizeSvg',
    'TypographyLetterSpacingSvg',
    'TypographyLineHeightSvg',
    'UserAddSvg',
    'UserSimpleSvg',
    'VariableSvg',
    'VisibilityOutlineHiddenSvg',
    'VisibilityOutlineVisibleSvg',
    'VisibilitySolidHiddenSvg',
    'VisibilitySolidVisibleSvg',
  ]),
  iconSize: PropTypes.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']),
  includeChevron: PropTypes.bool,
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string,
};

ListItem.defaultProps = {
  chevronSize: 'l',
  highlight: false,
  iconSize: 'xxl',
};

export default ListItem;
