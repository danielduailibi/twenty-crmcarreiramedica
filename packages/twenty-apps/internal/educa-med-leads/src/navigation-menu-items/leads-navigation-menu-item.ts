import { NavigationMenuItemType } from 'twenty-shared/types';
import { defineNavigationMenuItem } from 'twenty-sdk/define';

import { ALL_INFLUENCER_LEADS_VIEW_UNIVERSAL_IDENTIFIER } from '../views/all-influencer-leads-view';

export default defineNavigationMenuItem({
  universalIdentifier: '3ed295b6-b747-444d-98b4-bdb662b48d8a',
  name: 'educa-med-influencer-leads',
  icon: 'IconTargetArrow',
  color: 'orange',
  position: 0,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: ALL_INFLUENCER_LEADS_VIEW_UNIVERSAL_IDENTIFIER,
});
