import { fetchData } from "../../utils/postgres.js";

const companies = `SELECT * FROM companies order by company_id`;

const company = `
SELECT 
        c.*,
    JSON_AGG(
         json_build_object(
        'id', com.complex_id,
        'name', com.complex_name
        )
    ) complex
FROM 
    companies c
NATURAL JOIN complex com
WHERE c.company_id = $1
GROUP BY
    c.company_id
`;

const complex = `
SELECT 
    c.complex_id,
    c.complex_name,
    JSON_AGG(
        (
       r.*
        )
    ) room
FROM 
    rooms r
NATURAL JOIN complex c
WHERE c.complex_id = $1
GROUP BY c.complex_id
`;

const room = `
SELECT 
   r.price / r.kv price,
   r.kv,
   r.room,
   c.address
FROM 
    rooms r
NATURAL JOIN complex c
WHERE r.room_id = $1
`;

const bank = `
SELECT 
    * 
FROM 
    banks b 
WHERE 
    b.bank_id =  (SELECT bank((SELECT (price) from rooms where room_id = $1)))
`;

const calc = `
SELECT
    bank_id,
    bank_name,
    limit_cost,
(SELECT price from rooms where room_id = $1) price,
(SELECT price from rooms where room_id = $1) * 0.17 starting_payment,
(SELECT price from rooms where room_id = $1) * 0.83 / $2 / 12 monthly_payment,
    $2 bank_duration
FROM
    banks
WHERE
    bank_id = (SELECT bank((SELECT price from rooms where room_id = $1)))`;

const getCompAll = () => fetchData(companies);
const getComp = (id) => fetchData(company, id);
const getComplex = (id) => fetchData(complex, id);
const getRoom = (id) => fetchData(room, id);
const getBank = (id) => fetchData(bank, id);
const getCalc = (id, year) => fetchData(calc, id, year);

export { getComp, getCompAll, getComplex, getRoom, getBank, getCalc };
