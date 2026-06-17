import { CommandCategory } from '../../types';

// ============================================
// RECONNAISSANCE COMMANDS
// ============================================

export const reconCategories: CommandCategory[] = [
    {
        id: 'subdomain-enumeration',
        title: 'Subdomain Enumeration',
        commands: [
            {
                name: 'Basic Subdomain Discovery',
                command: ['subfinder -d {target} -all -recursive > subdomain.txt'],
                description: 'Discovers subdomains using subfinder with recursive enumeration and saves results to a file.'
            },
            {
                name: 'Live Subdomain Filtering',
                command: ['cat subdomain.txt | httpx-toolkit -ports 80,443,8080,8000,8888 -threads 200 > subdomain_alive.txt'],
                description: 'Filters discovered subdomains using httpx and saves the alive ones to a file.'
            },
            {
                name: 'Subdomain Takeover Check',
                command: ['subzy run --targets subdomain.txt --concurrency 100 --hide_fails --verify_ssl'],
                description: 'Checks for subdomain takeover vulnerabilities using subzy.'
            }
        ]
    },
    {
        id: 'url-collection',
        title: 'URL Collection',
        commands: [
            {
                name: 'Passive URL Collection',
                command: ['katana -u subdomain_alive.txt -d 5 -ps -pss waybackarchive,commoncrawl,alienvault -kf -jc -fx -ef woff,css,png,svg,jpg,woff2,jpeg,gif,svg -o allurls.txt'],
                description: 'Collects URLs from various sources and saves them to a file.'
            },
            {
                name: 'Advanced URL Fetching',
                command: [`echo {target} | katana -d 5 -ps -pss waybackarchive,commoncrawl,alienvault -f qurl | urldedupe >output.txt
katana -u https://{target} -d 5 | grep '=' | urldedupe | anew output.txt
cat output.txt | sed 's/=.*/=/' >final.txt`],
                description: 'Collects URLs from various sources and saves them to a file.'
            },
            {
                name: 'GAU URL Collection',
                command: [`echo {target} | gau --mc 200 | urldedupe >urls.txt
cat urls.txt | grep -E ".php|.asp|.aspx|.jspx|.jsp" | grep '=' | sort > output.txt
cat output.txt | sed 's/=.*/=/' >final.txt`],
                description: 'Collects URLs using GAU and saves them to a file'
            },
            {
                name: 'Effective Way To Crawl Katana',
                command: [`katana -u vulnweb.com -d 5 -ps -pss waybackarchive,commoncrawl,alienvault -f qurl -jc -xhr -kf -fx -fs dn -ef woff,css,png,svg,jpg,woff2,jpeg,gif,svg`],
                description: 'Advanced katana crawling with all options enabled.'
            },
            {
                name: 'Katana Command To Crawl',
                command: [`katana -u target.com -d 5 -ef woff,css,png,jpg,jpeg,woff2,gif,svg -o allurls`],
                description: 'Simple katana crawling command.'
            }
        ]
    },
    {
        id: 'network-scanning',
        title: 'Network Scanning',
        commands: [
            {
                name: 'Naabu Scan',
                command: [`naabu -list ip.txt -c 50 -nmap-cli 'nmap -sV -SC' -o naabu-full.txt`],
                description: 'Scans for open ports and services using Naabu.'
            },
            {
                name: 'Nmap Full Scan',
                command: ['nmap -p- --min-rate 1000 -T4 -A {target} -oA fullscan'],
                description: 'Performs a full port scan using Nmap.'
            },
            {
                name: 'Masscan',
                command: ['masscan -p0-65535 {target} --rate 100000 -oG masscan-results.txt'],
                description: 'Scans for open ports and services using Masscan.'
            }
        ]
    },
    {
        id: 'js-analysis',
        title: 'JavaScript Analysis',
        commands: [
            {
                name: 'JS File Hunting with Nuclei',
                command: [`echo example.com | katana -d 5 | grep -E '\\.js$' | nuclei -t nuclei-templates/http/exposures/ -c 30`],
                description: 'Find exposed secrets in JavaScript files using Nuclei.'
            },
            {
                name: 'JS File Nuclei Scan',
                command: ['cat alljs.txt | nuclei -t /home/coffinxp/nuclei-templates/http/exposures/'],
                description: 'Scan JS files for sensitive information.'
            },
            {
                name: 'Find Hidden GET Parameters In JS',
                command: [
                    `assetfinder example.com | gau | egrep -v '(.css|.png|.jpeg|.jpg|.svg|.gif|.wolf)' | while read url; do vars=$(curl -s $url | grep -Eo "var [a-zA-Z0-9]+" | sed -e 's,'var','"$url"?',g' -e 's/ //g' | grep -v '.js' | sed 's/.*/&=xss/g'); echo -e "\\e[1;33m$url\\n\\e[1;32m$vars"; done`
                ],
                description: 'Extract hidden parameters from JavaScript files.'
            }
        ]
    }
];
