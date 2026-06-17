// ============================================
// MAIN DATA EXPORT
// Combines all modular data files
// ============================================

// Import categories
import { reconCategories } from './categories/recon';
import { injectionCategories } from './categories/injection';
import { discoveryCategories } from './categories/discovery';
import { configCategories } from './categories/config';
import { cmsCategories } from './categories/cms';
import { payloadCategories } from './categories/payloads';

// Import methodologies
import { methodologies } from './methodologies';

// Import contributors
import { contributors } from './contributors';

// Import types
import { CommandCategory, AdvancedMethodology, Contributor } from '../types';

// ============================================
// COMBINED EXPORTS
// ============================================

/**
 * All command categories combined and organized
 */
export const commandCategories: CommandCategory[] = [
    // Reconnaissance
    ...reconCategories,

    // Injection Vulnerabilities (XSS, LFI, SQLi)
    ...injectionCategories,

    // Discovery (Sensitive Data, Directories, Parameters, Git)
    ...discoveryCategories,

    // CORS & Config (CORS, Open Redirect)
    ...configCategories,

    // CMS & Platform (WordPress)
    ...cmsCategories,

    // Payloads & Dorks
    ...payloadCategories,
];

/**
 * All advanced methodologies (step-by-step guides)
 */
export const advancedMethodologies: AdvancedMethodology[] = methodologies;

/**
 * Contributors data
 */
export { contributors };

// Re-export types
export type { CommandCategory, AdvancedMethodology, Contributor };
