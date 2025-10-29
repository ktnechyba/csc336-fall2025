async function getWorldInfo(url){
    if (url.charAt(url.length-1) === "/"){
        url = url.slice(0, url.length-1)
    }
    let response = await fetch(`${url}/world`);
    let json = await response.json();
    console.log(json);
}



const SHEET_ID = "11XhA5zlgcSNtbhrCKjInq330YgjbAxXrl41rbtzc8Yw";
//"https://docs.google.com/spreadsheets/d/11XhA5zlgcSNtbhrCKjInq330YgjbAxXrl41rbtzc8Yw/edit?usp=sharing"
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`;

async function fetchAndParseSheet(){
    try{
        const res = await fetch(SHEET_URL);
        const text = await res.text();
        let lines = text.split("\n")

        let headers = lines[0].split(',')
        // for (let header of headers){
        //     console.log(header)
        // }
        
        let studentInfos = [];
        for (let i=0; i<lines.length; i++){
            let line = lines[i].trim();
            let entries=line.split(',');
            let student={}
            for (let j=0; j<entries.length; j++){
                student[headers[j].trim()] = entries[j]
                
            }
            studentInfos.push(student)
        }
        // console.log(studentInfos)

        for (let student of studentInfos){
            console.log(student["render "])
            if (student["render "] !== ''&& student["cors"]==="1"){
                console.log(`${student["First"]}'s World`)
                let response = await getWorldInfo(student["render "]);
                let worldJSON = response.json()
                console.log(worldJSON)
            }
        }
    } catch {
        console.log("cors issue")
    }
}

fetchAndParseSheet()


// //clever
// const line = text.trim().split('\n')
// const headers = line[0].split(',')//get everythig in lines array and ignore the headers

// const data = line.slice[1].map( line=> { //make new array, but transform each entry in some way
//     const values = line.split(",") //array of strings

//     //h = thing, i = index
//     return Object.fromEntries(headers.map((h,i) => [h, values[i]])) //build an object from the array of arrays - map from the ehaders and make 1st 
    
    

// })


// console.log("Parsed data:", data);


// //npm install csv-parse -> do import parse from csv-parse

// import {parse} from "csv-parse/sync"

// const records = parse(text, {
//     columns: true,
//     skip_empty_lines: true
// })


import {} from ""

const ai = new {
    apiKey
}

async function generateText(prompt){
    const respon = await ai.models.generateContent({
        model: "",
        contents: prompt
    })

    return respon.text
}

let prompt
let llmText = await generateText(prompt)

console.log(llmText)