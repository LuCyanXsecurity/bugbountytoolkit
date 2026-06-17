import { CommandCategory } from '../../types';

// ============================================
// CMS & PLATFORM SCANNING
// ============================================

export const cmsCategories: CommandCategory[] = [
    {
        id: 'wordpress-scanning',
        title: 'WordPress Scanning',
        commands: [
            {
                name: 'Aggressive WordPress Scan',
                command: ['wpscan --url https://{target} --disable-tls-checks --api-token YOUR_TOKEN -e at -e ap -e u --enumerate ap --plugins-detection aggressive --force'],
                description: 'Scans a WordPress website for vulnerabilities and saves the results to a file.'
            },
            {
                name: 'WPScan Full Enumeration',
                command: ['wpscan --url https://site.com --disable-tls-checks --api-token <here> -e at -e ap -e u --enumerate ap --plugins-detection aggressive --force'],
                description: 'Comprehensive WordPress scanning with all enumeration options.'
            }
        ]
    }
];
