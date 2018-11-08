import SidebarUtils from '../SidebarUtils';
import * as skillUtils from '../Skills/skillUtils';

describe('components/ContentSidebar/SidebarUtil', () => {
    describe('canHaveSidebar()', () => {
        test('should return false when nothing is wanted in the sidebar', () => {
            expect(SidebarUtils.canHaveSidebar({})).toBeFalsy();
        });
        test('should return true when skills should render', () => {
            expect(
                SidebarUtils.canHaveSidebar({ hasSkills: true }),
            ).toBeTruthy();
        });
        test('should return true when properties should render', () => {
            expect(
                SidebarUtils.canHaveSidebar({
                    detailsSidebarProps: { hasProperties: true },
                }),
            ).toBeTruthy();
        });
        test('should return true when access stats should render', () => {
            expect(
                SidebarUtils.canHaveSidebar({
                    detailsSidebarProps: { hasAccessStats: true },
                }),
            ).toBeTruthy();
        });
        test('should return true when metadata should render', () => {
            expect(
                SidebarUtils.canHaveSidebar({ hasMetadata: true }),
            ).toBeTruthy();
        });
        test('should return true when classification should render', () => {
            expect(
                SidebarUtils.canHaveSidebar({
                    detailsSidebarProps: { hasClassification: true },
                }),
            ).toBeTruthy();
        });
        test('should return true when activity feed should render', () => {
            expect(
                SidebarUtils.canHaveSidebar({ hasActivityFeed: true }),
            ).toBeTruthy();
        });
        test('should return true when versions should render', () => {
            expect(
                SidebarUtils.canHaveSidebar({
                    detailsSidebarProps: { hasVersions: true },
                }),
            ).toBeTruthy();
        });
        test('should return true when notices should render', () => {
            expect(
                SidebarUtils.canHaveSidebar({
                    detailsSidebarProps: { hasNotices: true },
                }),
            ).toBeTruthy();
        });
    });
    describe('canHaveDetailsSidebar()', () => {
        test('should return false when nothing is wanted in the details sidebar', () => {
            expect(SidebarUtils.canHaveDetailsSidebar({})).toBeFalsy();
        });
        test('should return true when properties should render', () => {
            expect(
                SidebarUtils.canHaveDetailsSidebar({
                    detailsSidebarProps: { hasProperties: true },
                }),
            ).toBeTruthy();
        });
        test('should return true when access stats should render', () => {
            expect(
                SidebarUtils.canHaveDetailsSidebar({
                    detailsSidebarProps: { hasAccessStats: true },
                }),
            ).toBeTruthy();
        });
        test('should return true when classification should render', () => {
            expect(
                SidebarUtils.canHaveDetailsSidebar({
                    detailsSidebarProps: { hasClassification: true },
                }),
            ).toBeTruthy();
        });
        test('should return true when versions should render', () => {
            expect(
                SidebarUtils.canHaveDetailsSidebar({
                    detailsSidebarProps: { hasVersions: true },
                }),
            ).toBeTruthy();
        });
        test('should return true when notices should render', () => {
            expect(
                SidebarUtils.canHaveDetailsSidebar({
                    detailsSidebarProps: { hasNotices: true },
                }),
            ).toBeTruthy();
        });
    });
    describe('shouldRenderSkillsSidebar()', () => {
        test('should return false when nothing is wanted in the skills sidebar', () => {
            expect(SidebarUtils.shouldRenderSkillsSidebar({})).toBeFalsy();
        });
        test('should return false when no file', () => {
            expect(
                SidebarUtils.shouldRenderSkillsSidebar({ hasSkills: true }),
            ).toBeFalsy();
        });
        test('should return false when hasSkills is false', () => {
            expect(
                SidebarUtils.shouldRenderSkillsSidebar(
                    { hasSkills: false },
                    {},
                ),
            ).toBeFalsy();
        });
        test('should return false when no skill data', () => {
            skillUtils.hasSkills = jest.fn().mockReturnValueOnce(false);
            expect(
                SidebarUtils.shouldRenderSkillsSidebar(
                    { hasSkills: true },
                    'file',
                ),
            ).toBeFalsy();
            expect(skillUtils.hasSkills).toHaveBeenCalledWith('file');
        });
        test('should return true when hasSkills is true and there is skills data', () => {
            skillUtils.hasSkills = jest.fn().mockReturnValueOnce(true);
            expect(
                SidebarUtils.shouldRenderSkillsSidebar(
                    { hasSkills: true },
                    'file',
                ),
            ).toBeTruthy();
            expect(skillUtils.hasSkills).toHaveBeenCalledWith('file');
        });
    });
    describe('canHaveActivitySidebar()', () => {
        test('should return false when hasActivityFeed is false', () => {
            expect(
                SidebarUtils.canHaveActivitySidebar({ hasActivityFeed: false }),
            ).toBeFalsy();
        });
        test('should return true when hasActivityFeed is true', () => {
            expect(
                SidebarUtils.canHaveActivitySidebar(
                    { hasActivityFeed: true },
                    {},
                ),
            ).toBeTruthy();
        });
    });
    describe('canHaveMetadataSidebar()', () => {
        test('should return false when hasMetadata is false', () => {
            expect(
                SidebarUtils.canHaveMetadataSidebar({ hasMetadata: false }),
            ).toBeFalsy();
        });
        test('should return true when hasMetadata is true', () => {
            expect(
                SidebarUtils.canHaveMetadataSidebar({ hasMetadata: true }, {}),
            ).toBeTruthy();
        });
    });
    describe('shouldRenderMetadataSidebar()', () => {
        test('should return false when nothing is wanted in the metadata sidebar', () => {
            expect(SidebarUtils.shouldRenderMetadataSidebar({})).toBeFalsy();
        });
        test('should return false when nothing is wanted in the metadata sidebar', () => {
            expect(
                SidebarUtils.shouldRenderMetadataSidebar({
                    hasMetadata: false,
                }),
            ).toBeFalsy();
        });
        test('should return true by default when we dont know availability of metadata feature', () => {
            expect(
                SidebarUtils.shouldRenderMetadataSidebar({ hasMetadata: true }),
            ).toBeTruthy();
        });
        test('should return false when hasMetadata is false', () => {
            expect(
                SidebarUtils.shouldRenderMetadataSidebar(
                    { hasMetadata: false },
                    ['foo'],
                ),
            ).toBeFalsy();
        });
        test('should return false when hasMetadata is false', () => {
            expect(
                SidebarUtils.shouldRenderMetadataSidebar(
                    {
                        hasMetadata: false,
                        metadataSidebarProps: { isFeatureEnabled: true },
                    },
                    ['foo'],
                ),
            ).toBeFalsy();
        });
        test('should return false when no metadata and no feature', () => {
            expect(
                SidebarUtils.shouldRenderMetadataSidebar(
                    {
                        hasMetadata: true,
                        metadataSidebarProps: { isFeatureEnabled: false },
                    },
                    [],
                ),
            ).toBeFalsy();
        });
        test('should return true when no metadata and feature enabled', () => {
            expect(
                SidebarUtils.shouldRenderMetadataSidebar(
                    {
                        hasMetadata: true,
                        metadataSidebarProps: { isFeatureEnabled: true },
                    },
                    [],
                ),
            ).toBeTruthy();
        });
        test('should return true when metadata and feature is not enabled', () => {
            expect(
                SidebarUtils.shouldRenderMetadataSidebar(
                    {
                        hasMetadata: true,
                        metadataSidebarProps: { isFeatureEnabled: false },
                    },
                    ['foo'],
                ),
            ).toBeTruthy();
        });
    });
    describe('shouldRenderSidebar()', () => {
        test('should return false when nothing is wanted in the sidebar', () => {
            expect(SidebarUtils.shouldRenderSidebar({})).toBeFalsy();
        });
        test('should return false when no file', () => {
            expect(
                SidebarUtils.shouldRenderSidebar({ hasSkills: true }),
            ).toBeFalsy();
        });
        test('should return true when we can render details sidebar', () => {
            SidebarUtils.canHaveDetailsSidebar = jest
                .fn()
                .mockReturnValueOnce(true);
            SidebarUtils.shouldRenderSkillsSidebar = jest
                .fn()
                .mockReturnValueOnce(false);
            SidebarUtils.canHaveActivitySidebar = jest
                .fn()
                .mockReturnValueOnce(false);
            SidebarUtils.shouldRenderMetadataSidebar = jest
                .fn()
                .mockReturnValueOnce(false);
            expect(
                SidebarUtils.shouldRenderSidebar('props', 'file'),
            ).toBeTruthy();
            expect(SidebarUtils.canHaveDetailsSidebar).toHaveBeenCalledWith(
                'props',
            );
        });
        test('should return true when we can render metadata sidebar', () => {
            SidebarUtils.canHaveDetailsSidebar = jest
                .fn()
                .mockReturnValueOnce(false);
            SidebarUtils.shouldRenderSkillsSidebar = jest
                .fn()
                .mockReturnValueOnce(false);
            SidebarUtils.canHaveActivitySidebar = jest
                .fn()
                .mockReturnValueOnce(false);
            SidebarUtils.shouldRenderMetadataSidebar = jest
                .fn()
                .mockReturnValueOnce(true);
            expect(
                SidebarUtils.shouldRenderSidebar('props', 'file', 'editors'),
            ).toBeTruthy();
            expect(
                SidebarUtils.shouldRenderMetadataSidebar,
            ).toHaveBeenCalledWith('props', 'editors');
        });
        test('should return true when we can render activity sidebar', () => {
            SidebarUtils.canHaveDetailsSidebar = jest
                .fn()
                .mockReturnValueOnce(false);
            SidebarUtils.shouldRenderSkillsSidebar = jest
                .fn()
                .mockReturnValueOnce(false);
            SidebarUtils.canHaveActivitySidebar = jest
                .fn()
                .mockReturnValueOnce(true);
            SidebarUtils.shouldRenderMetadataSidebar = jest
                .fn()
                .mockReturnValueOnce(false);
            expect(
                SidebarUtils.shouldRenderSidebar('props', 'file'),
            ).toBeTruthy();
            expect(SidebarUtils.canHaveActivitySidebar).toHaveBeenCalledWith(
                'props',
            );
        });
        test('should return true when we can render skills sidebar', () => {
            SidebarUtils.canHaveDetailsSidebar = jest
                .fn()
                .mockReturnValueOnce(false);
            SidebarUtils.shouldRenderSkillsSidebar = jest
                .fn()
                .mockReturnValueOnce(true);
            SidebarUtils.canHaveActivitySidebar = jest
                .fn()
                .mockReturnValueOnce(false);
            SidebarUtils.shouldRenderMetadataSidebar = jest
                .fn()
                .mockReturnValueOnce(false);
            expect(
                SidebarUtils.shouldRenderSidebar('props', 'file'),
            ).toBeTruthy();
            expect(SidebarUtils.shouldRenderSkillsSidebar).toHaveBeenCalledWith(
                'props',
                'file',
            );
        });
    });
});
