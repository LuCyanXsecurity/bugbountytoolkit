import { CommandCategory } from '../../types';

// ============================================
// CORS & CONFIG COMMANDS
// ============================================

export const configCategories: CommandCategory[] = [
    {
        id: 'cors-testing',
        title: 'CORS Testing',
        commands: [
            {
                name: 'Basic CORS Check',
                command: ['curl -H "Origin: http://{target}" -I https://{target}/wp-json/'],
                description: 'Checks the Cross-Origin Resource Sharing (CORS) policy of a website.'
            },
            {
                name: 'CORScanner',
                command: ['python3 CORScanner.py -u https://{target} -d -t 10'],
                description: 'Fast CORS misconfiguration scanner that helps identify potential CORS vulnerabilities.'
            },
            {
                name: 'CORS Nuclei Scan',
                command: ['cat {target}s.txt | httpx -silent | nuclei -t nuclei-templates/vulnerabilities/cors/ -o cors_results.txt'],
                description: 'Uses Nuclei to scan for CORS misconfigurations across multiple domains.'
            },
            {
                name: 'CORS Origin Reflection Test',
                command: ['curl -H "Origin: https://evil.com" -I https://{target}/api/data | grep -i "access-control-allow-origin: https://evil.com"'],
                description: 'Tests for origin reflection vulnerability in CORS configuration.'
            },
            {
                name: 'CORS with Corsy',
                command: [`python3 corsy.py -i subdomains_alive.txt -t 10 --headers 'User-Agent: GoogleBot\\nCookie: SESSION=Hacked'`],
                description: 'CORS misconfiguration scanner using Corsy.'
            },
            {
                name: 'CORS Check with Curl',
                command: [
                    `curl -H 'Origin: http://example.com' -I https://etoropartners.com/wp-json/`,
                    `curl -H 'Origin: http://example.com' -I https://etoropartners.com/wp-json/ | grep -i -e 'access-control-allow-origin' -e 'access-control-allow-methods' -e 'access-control-allow-credentials'`
                ],
                description: 'Manual CORS check using curl.'
            },
            {
                name: 'CORS Nuclei Template',
                command: [`nuclei -list subdomains_alive.txt -t /nuclei-templates/http/vulnerabilities/generic/cors-misconfig.yaml`],
                description: 'CORS check using Nuclei template.'
            }
        ]
    },
    {
        id: 'open-redirect',
        title: 'Open Redirect',
        commands: [
            {
                name: 'Open Redirect Step By Step',
                command: [
                    `subfinder -d domain.com -all -o subs.txt`,
                    `cat subs.txt | httpx-toolkit -o filter.txt`,
                    `cat subs.txt | httpx-toolkit -t 100 -o filter.txt`,
                    `echo https://example.com/ | gau --threads 100 | tee urls.txt`,
                    `cat urls.txt | gf redirect | sed 's/=.*/=/' | grep '?returnUrl' | uro > open.txt`
                ],
                description: 'Step by step open redirect testing.'
            },
            {
                name: 'One-Liner Open Redirect',
                command: [`cat file.txt |gf url | tee redirect payload.txt && cat redirect -payload.txt | parallerl -j 10 curl --proxy http://127.0.0.1:8080 -sk > /dev/null`],
                description: 'Quick open redirect testing one-liner.'
            },
            {
                name: 'Open Redirect with Nuclei',
                command: [`subfinder -d example.com -all | nuclei -t /nuclei-templates/openRedirect.yaml -rl 100`],
                description: 'Open redirect scanning with Nuclei.'
            }
        ]
    }
];
