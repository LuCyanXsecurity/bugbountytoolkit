import { CommandCategory } from '../../types';

// ============================================
// DISCOVERY COMMANDS
// ============================================

export const discoveryCategories: CommandCategory[] = [
    {
        id: 'sensitive-data',
        title: 'Sensitive Data Discovery',
        commands: [
            {
                name: 'Sensitive File Detection',
                command: ['cat allurls.txt | grep -E "\\.xls|\\.xml|\\.xlsx|\\.json|\\.pdf|\\.sql|\\.doc|\\.docx|\\.pptx|\\.txt|\\.zip|\\.tar\\.gz|\\.tgz|\\.bak|\\.7z|\\.rar|\\.log|\\.cache|\\.secret|\\.db|\\.backup|\\.yml|\\.gz|\\.config|\\.csv|\\.yaml|\\.md|\\.md5"'],
                description: 'Detects sensitive files on the web server.'
            },
            {
                name: 'Information Disclosure Dork',
                command: ['site:*.{target} (ext:doc OR ext:docx OR ext:odt OR ext:pdf OR ext:rtf OR ext:ppt OR ext:pptx OR ext:csv OR ext:xls OR ext:xlsx OR ext:txt OR ext:xml OR ext:json OR ext:zip OR ext:rar OR ext:md OR ext:log OR ext:bak OR ext:conf OR ext:sql)'],
                description: 'Searches for information disclosure vulnerabilities using a dork.'
            },
            {
                name: 'Git Repository Detection',
                command: ['cat subdomains.txt | grep "SUCCESS" | gf urls | httpx-toolkit -sc -server -cl -path "/.git/" -mc 200 -location -ms "Index of" -probe'],
                description: 'Detects Git repositories on the web server.'
            },
            {
                name: 'Information Disclosure Scanner',
                command: ['echo https://{target} | gau | grep -E "\\.(xls|xml|xlsx|json|pdf|sql|doc|docx|pptx|txt|zip|tar\\.gz|tgz|bak|7z|rar|log|cache|secret|db|backup|yml|gz|config|csv|yaml|md|md5|tar|xz|7zip|p12|pem|key|crt|csr|sh|pl|py|java|class|jar|war|ear|sqlitedb|sqlite3|dbf|db3|accdb|mdb|sqlcipher|gitignore|env|ini|conf|properties|plist|cfg)$"'],
                description: 'Checks for information disclosure vulnerabilities using a scanner.'
            },
            {
                name: 'AWS S3 Bucket Finder',
                command: ['s3scanner scan -d {target}'],
                description: 'Searches for AWS S3 buckets associated with the target.'
            },
            {
                name: 'API Key Finder',
                command: [`cat allurls.txt | grep -E "\\.js$" | httpx-toolkit -mc 200 -content-type | grep -E "application/javascript|text/javascript" | cut -d' ' -f1 | xargs -I% curl -s % | grep -E "(API_KEY|api_key|apikey|secret|token|password)"`],
                description: 'Searches for exposed API keys and tokens in JavaScript files.'
            },
            {
                name: 'Find Information Disclosure Bugs',
                command: [
                    `echo https://example.com/ | gau | grep -E "\\.(xls|xml|xlsx|json|pdf|sql|doc|docx|pptx|txt|zip|tar\\.gz|tgz|bak|7z|rar|log|cache|secret|db|backup|yml|gz|config|csv|yaml|md|md5|tar|xz|7zip|p12|pem|key|crt|csr|sh|pl|py|java|class|jar|war|ear|sqlitedb|sqlite3|dbf|db3|accdb|mdb|sqlcipher|gitignore|env|ini|conf|properties|plist|cfg)$"`,
                    `echo https://example.com/ | gau | grep -E "\\.xls|\\.xml|\\.xlsx|\\.json|\\.pdf|\\.sql|\\.doc|\\.docx|\\.pptx|\\.txt|\\.zip|\\.tar\\.gz|\\.tgz|\\.bak|\\.7z|\\.rar|\\.log|\\.cache|\\.secret|\\.db|\\.backup|\\.yml|\\.gz|\\.config|\\.csv|\\.yaml|\\.md|\\.md5"`
                ],
                description: 'Comprehensive information disclosure detection.'
            },
            {
                name: 'Discover Sensitive Info via OTX',
                command: [
                    `curl -s "https://otx.alienvault.com/api/v1/indicators/domain/example.com/url_list?limit=100&page=1" | jq -r '.url_list[].url'`,
                    `curl -s "https://otx.alienvault.com/api/v1/indicators/domain/TARGET/url_list?limit=100&page=1" | jq`
                ],
                description: 'Discover sensitive information via AlienVault OTX.'
            }
        ]
    },
    {
        id: 'directory-bruteforce',
        title: 'Directory Bruteforce',
        commands: [
            {
                name: 'Dirsearch Command',
                command: ['dirsearch -u https://example.com -e php,cgi,htm,html,shtm,shtml,js,txt,bak,zip,old,conf,log,pl,asp,aspx,jsp,sql,db,sqlite,mdb,tar,gz,7z,rar,json,xml,yml,yaml,ini,java,py,rb,php3,php4,php5 --random-agent --recursive -R 3 -t 20 --exclude-status=404 --follow-redirects --delay=0.1'],
                description: 'Comprehensive directory bruteforce with dirsearch.'
            },
            {
                name: 'FFUF Directory Scan',
                command: [`ffuf -w seclists/Discovery/Web-Content/directory-list-2.3-big.txt -u https://example.com/FUZZ -fc 400,401,402,403,404,429,500,501,502,503 -recursion -recursion-depth 2 -e .html,.php,.txt,.pdf,.js,.css,.zip,.bak,.old,.log,.json,.xml,.config,.env,.asp,.aspx,.jsp,.gz,.tar,.sql,.db -ac -c -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:91.0) Gecko/20100101 Firefox/91.0' -H 'X-Forwarded-For: 127.0.0.1' -H 'X-Originating-IP: 127.0.0.1' -H 'X-Forwarded-Host: localhost' -t 100 -r -o results.json`],
                description: 'Advanced directory bruteforce with FFUF.'
            },
            {
                name: 'Dirsearch Extended',
                command: [`dirsearch -u https://www.example.com -e conf,config,bak,backup,swp,old,db,sql,asp,aspx,aspx~,asp~,py,py~,rb,rb~,php,php~,bak,bkp,cache,cgi,conf,csv,html,inc,jar,js,json,jsp,jsp~,lock,log,rar,old,sql,sql.gz,http://sql.zip,sql.tar.gz,sql~,swp,swp~,tar,tar.bz2,tar.gz,txt,wadl,zip,.log,.xml,.js.,.json`],
                description: 'Extended dirsearch with more extensions.'
            }
        ]
    },
    {
        id: 'hidden-parameters',
        title: 'Hidden Parameters Discovery',
        commands: [
            {
                name: 'Arjun Passive Discovery',
                command: [`arjun -u https://site.com/endpoint.php -oT arjun_output.txt -t 10 --rate-limit 10 --passive -m GET,POST --headers 'User-Agent: Mozilla/5.0'`],
                description: 'Passive parameter discovery using Arjun.'
            },
            {
                name: 'Arjun with Wordlist',
                command: [`arjun -u https://site.com/endpoint.php -oT arjun_output.txt -m GET,POST -w /usr/share/wordlists/seclists/Discovery/Web-Content/burp-parameter-names.txt -t 10 --rate-limit 10 --headers 'User-Agent: Mozilla/5.0'`],
                description: 'Parameter discovery using Arjun with custom wordlist.'
            },
            {
                name: 'ParamSpider',
                command: ['paramspider -d example.com --subs'],
                description: 'Discover parameters with ParamSpider.'
            }
        ]
    },
    {
        id: 'git-exposure',
        title: 'Git & Source Exposure',
        commands: [
            {
                name: 'Bug Bounty Find .GIT',
                command: [`cat domains.txt | grep "SUCCESS" | gf urls | httpx-toolkit -sc -server -cl -path "/.git/" -mc 200 -location -ms "Index of" -probe`],
                description: 'Find exposed .git directories.'
            },
            {
                name: 'Sensitive Files in URLs',
                command: [`cat allurls.txt | grep -E "\\.txt|\\.log|\\.cache|\\.secret|\\.db|\\.backup|\\.yml|\\.json|\\.gz|\\.rar|\\.zip|\\.config"`],
                description: 'Find sensitive files from collected URLs.'
            }
        ]
    }
];
