const URL = "https://api.valantis.store:41000/";let password = "Valantis";let header = { "Content-Type": "application/json", "X-Auth": generateMD5HASH() };let request = JSON.stringify({    "action": "get_ids",    "params": {"offset": 10, "limit": 3}});const options = { method: "POST", headers: header, body: request };console.log("Hello Aleksey!");function generateTimeStamp() {    const currentDate = new Date();    const dateFormat = new Intl.DateTimeFormat('en-CA');    return dateFormat.format(currentDate).split('-').join("");}function generateMD5HASH() {    let md5hash = CryptoJS.MD5(`${password}_${generateTimeStamp()}`);    return md5hash.toString();}fetch(URL, options).then(res => res.json())    .then(res => console.log(res));