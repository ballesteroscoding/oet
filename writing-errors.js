const incorrectTexts = [
    "the pain now is tolerable",
    "determinated",
    "supine position",
    "a carer attend him",
    "founded",
    "suffers a audition problem",
    "an history",
    "peniciline",
    "althought",
    "reported a lost of confidence",
    "reported dicrease of confidence",
    "being educated advantages exercise programms",
    "a increase in patient´s frailty",
    "esteroideal",
    "daily live",
    "he has agreed to get the visit of carer",
    "he insists continue living",
    "attend .....",
    "agreed ....",
    "loss .....",
    "increase/decrease ....",
    "educated ....",
    "insists .... + VERB (TO/-ING)",
    "responsive ----",
    "habilities",
    "a shoulder brace 4 hours per day",
    "chronic pain on the right shoulder",
    "refering",
    "taking physiotherapy",
    "an ache / ache",
    "a pain/ pain",
    "a tender/ tender",
    "fell from the stairs",
    "bruise in/on",
    "pain in/on",
    "non-alcoholic",
    "drink water",
    "presented with complaint of headache",
    "he reported he had",
    "examination revealed a lumbar lordosis",
    "bad sleep",
    "on 2008",
    "he suffer from a poor",
    "retturn to home",
    "in adition",
    "Mr X medical history",
    "is wored",
    "previous ....",
    "was under \"meals on wheels\" service",
    "recommendations of daily light exercise",
    ",however,/;however,",
    "signs of bruise",
    "is widow",
    "oxygen supply will be provided",
    "lyfe style",
    "for an ongoing care",
    "Mr X has a lack of family support",
    "since her retirement",
    "adaptacioning issues",
    "ocasional",
    "Please note that is important to monitor her adherence",
    "as well as encourage her to do exercise",
    "her bowel movement is now normal",
    "oxygen saturation",
    "1 litre per minute",
    "who has a history of type 1 diabetes mellitus since she was 7 years",
    "last episode occurred",
    "On assesment today, she reported not compliance with the diet either medication.",
    "strugeling",
    "glucemic control",
    "Please note that a follow-up visit is scheduled in a month.",
    "recommendations....",
    "aditionaly",
    "elegible",
    "long term physiotherapy",
    "a good progress",
    "a terrible pain",
    "omeprazol",
    "symbastatine",
    "wolferine",
    "clorpidrogrel",
    "hydroclorotiazid",
    "metaprolol",
    "cyprofloxacine",
    "dexametasone",
    "metotrexate",
    "excess of sweating",
    "adress",
    "a/- surgical",
    "monitoring for/to ensure",
    "in/on June 2010",
    "in/on 13 June 2010",
    "metadone",
    "cigarettes at day",
    "concernings",
    "addmitted",
    "assisstance",
    "relied .... their neighbors",
    "siting",
    "conect",
    "who suffers from a three-stage cancer",
    "he requested be assisted ",
    "his walk was slowly",
    "properly use",
    "inestable",
    "education about",
    "an/- antibiotic was administered",
    "since she was 18-year-old",
    "she has a diagnose",
    "until no needed",
    "require home visits for monitoring her compliance",
    "her blood pressure was mild raise",
    "to help her with craving",
    "X and X were prescribed",
    "Zyban has to be stopped",
    "I would appreciate if you could give",
    "although she tries to not to eat sugar",
    "instructions on the manage of the diabetes",
    "as she does not have knowledge of how to maintain",
    "he strugles with adjust to her new lifestyle",
    "she was at Royal Hospital",
    "intermitent",
    "one week ago",
    "psychiatric counseling",
    "breast feeding",
    "not being enough nourised",
    "differents opinions",
    "there were not antenatal complications",
    "in case that they continue",
    "because their different opinions",
    "routine 6 week check-up appointment",
    "throught",
    "assisted by their neighbours for some personal chores",
    "organazing",
    "mantain",
    "warfarine",
    "fluidtheraphy",
    "an advise/an advice",
    "she was advised/she was adviced",
    "he suffers from osteoarthritis since 2008",
    "has organized hiring a wedge pillow",
    "have diagnosis of dementia",
    "eposide",
    "desorientation",
    "counseling",
    "over the counter",
    "managament",
    "with a worsen of her symptoms.",
    "intracraneal",
    "a severe left side headache",
    "This time she was diagnosed",
    "proporcioned",
    "including deep breath exercises",
    "she wants to keep living",
    "type 2 diabetes, now well controlled",
    "psycotic episodes",
    "has low risk of self harm now",
    "has been increased from 15 mg to 30 mg, due to a worsening",
    "benzodiacepins",
    "was admitted due to suicidal ideation",
    "second admission in mental health trying self poisoning",
    "As he is in terminal stage",
    "provide them emotional counselling",
    "to monitor regularly his pain",
    "cese",
    "burocratic",
    "renovate",
    "looking for a job",
    "to continue in the hospital",
    "who has underwent",
    "dicreased in 5 mg daily",
    "on/in the future/past",
    "stock",
    "mood swings",
    " Walters's",
    "on hospitalization, he has been healing well",
    "panadin/panadine forte",
    "Would you kindly ensure his compliance with the discharge medication?",
    "He used a limp to mobilize.",
    "Regarding Mr. Billy’s medical history, as there are no prior admissions, his medical history is unknown.",
    "fell down the stairs and injured his leg",
    "His walking was slowly unstable, and he was helped by his wife to mobilize",
    "Ms. Vineyar admitted herself into our care.",
    "She has a poor relationship with her parents and sleeps on her friend’s sofa.",
    "Please note that his wife, Mrs. Maria Jennifer, is his emergency contact. You can find her address in the notes",
    "His condition is gradually on the decline since March 2018.",
    "Today's review she presented with poor memory along with her daughter.",
    "Her family has been already notified with the discharge.",
    "She is scheduled for a hemoglobin blood test", 
    "Two times per day",
    "personal chores",
    "Despite this fact, his family wish for him to remain in the hospital.",
    "that more of them are not prescribed",
    "it is been his second admission",
    "He has good mobility and can walk along the ward using a wheelie-walker without difficulty",
    "he suffers from 4-year-old mild chronic renal failure",
    "As he presented an episode of hyperkalemia",
    "who has been admitted",
    "Postoperatively, Mr Baker is taking Panedeine Forte eight times per day. 2 qir prn",
    "hospital aisle",
    "visited me today",
    "6-week check-up appointment",
    "In case they continue with the formula",
    "since she was a teenager",
    "STDs",
    "She might be encouraged to participate",
    "He is coping well with pain with Panadein Forte 500 mg",
    "con asistencia de una persona",
    "Relocate",
    "On 04/03/2011, Mr X was admitted to the ICU at the Prince Hospital in a comatose state. However, she recovered well due to the ventilation and dialysis she received.",
    "hydratación",
    "asses",
    "It would be appreciated if you ensure that she continues with the oxygen therapy following the level of oxygen saturation.",
    "practicioner",
    "support him in/on his process",
    "segundario",
    "after his intervention",
    "These are major cardiovascular risk factors that might lead him to a relapse.",
    "Please advise him on the importance of cutting off smoking and encourage him to participate in a quit smoking program.",
    "transfered",
    "report + ING/ TO",
    "man a widow",
    "MS relapse signs",
    "and has a diagnosis of low weight and opioid dependence. She is ready to be discharged later today into your care for follow-up.",
    "adiction",
    "adittionally/additionally/addittionally",
    "she have just gain 300 gr since her birthday",
    "Regarding Rosalia’s background, her mother, Genette, has had a heroin adiction for the last two years.",
    "During hospitalization, both Rosalind and her mother have overcome the heroin withdrawal with the instructions of the Drug and Alcohol Team",
    "Adittionally, please regularly check how is her psychosocial’s mother state and how is coping with the new situation.",
    "addmitted/addmited/admitted",
    "promove/promote",
    "he still has dry cough",
    "independent in/on/for showering",
    "dietician recommendations",
    "as per physiotherapist review",
    "He was educated on chest exercises and postures to promove drainage.",
    "died",
    "1,5 kg",
    "it would be appreciated if you continue monitoring Mr Ramamurthy’s diet regimen.",
    "aproximadamente",
    "in the last six months due to a poor diet",
    "He was educated on chest exercises and postures to promote drainage",
    "manteined/maintainaid/mantained/mantened/mainteined",
    "position/possittion/possition",
    "education on../mejor forma (dieta, ejercicio y adhererncnia)",
    "hospitalizated",
    "metformin/metformine",
    "she was prescribed with metformine",
    "inttermitent/intermittent",
    "a poor excercise",
    "Given the above, it would be appreciated if you continue monitoring",
    "amimale a cumplir con", 
    "restrained",
    "crema",
    "Pronounced a new hair loss",
    "el no acudió ( a la cita)",
    "trychology",
    "was schedule",
    "wich",
    "Wich onset is probably related", 
    "after 4 years without relapses",
    "As her niece is no longer staying overnight",
    "has been complaiant/compliant",
    "who has features of a possible relapse of her pericarditis",
    "Started on/in IV saline",
    "On assessment the next day",
    "On admission, Mr Gale reported a fall yesterday, following a sudden weakness, striking his head.",
    "He will require ongoing monitoring of his confusion episodes to asses if independent living is recommended.",
    "in a second floor without lift.",
    "promted",
    "independent for activities of daily living",
    "desorientado",
    "amoxicilin",
    "The investigation shown",
    "she had fever",
    "determinar",
    "Please ensure that he is promted to exercise at least 30 minutes daily, as his mobility has been deteriorated since the fall.",
    "if (la otra forma)",
    "(otra forma de decir regarding)",
    "engaging/enganging",
    "eagle",
    "along with",
    "la posibilidad de continuar sus estudios externamente",
    "there is still risk/t there is still a risk",
    "Apart from mild pain when walking, he is showing significant improvement",
    "is about to start to walk using walking sticks",
    "his diet is based on fatty foods such as",
    "she was advised en seguir una dieta/ she was advised en ejercicios",
    "cutting of",
    "actividad fisica"
];


const correctTexts = [
    "the pain is tolerable now",
    "determined",
    "a supine position",
    "a carer attends to him",
    "found",
    "suffers from an audition problem",
    "a history",
    "penicillin",
    "although",
    "reported a lost of confidence",
    "reported a decrease in confidence",
    "being educated on the advantages of exercise programs",
    "a increase in the patient´s frailty",
    "steroidal",
    "daily life",
    "he has agreed to carers visiting three times a day",
    "he insists on continuing to live",
    "attend to",
    "agreed to",
    "loss of",
    "increase/decrease in",
    "educated on",
    "insist on + verb -ing",
    "responsive to",
    "ability",
    "a shoulder brace for 4 hours per day",
    "chronic pain in the right shoulder",
    "referring- to refer",
    "undergoing/receiving physiotherapy",
    "an ache",
    "pain",
    "a tender",
    "fell down the stairs",
    "bruise on",
    "pain in",
    "non-drinker",
    "increase her fluid intake",
    "presented with complaints of headache",
    "he reported that he had",
    "examination revealed lumbar lordosis",
    "poor sleep",
    "in 2008",
    "he suffers from poor",
    "return home (es un idiom)",
    "in addition",
    "Mr X´s medical history",
    "is worn",
    "previous to",
    "was under the \"meals on wheels\" service",
    "daily light exercise recommendations",
    ";however,",
    "signs of bruising",
    "is a widow",
    "an oxygen supply will be provided",
    "lifestyle",
    "for ongoing care",
    "Mr X lacks family support",
    "since retiring",
    "adjustment/adaptational issues",
    "occasional",
    "Please note that it is important to monitor her adherence",
    "as well as encourage her exercise",
    "her bowel movements are now normal",
    "oxygen saturation level",
    "1 liter per minute",
    "who has had a history of type 1 diabetes mellitus since she was 7 years",
    "the last episode occurred",
    "On assessment today, she reported not compliance with the diet or medication.",
    "struggling",
    "glycemic control",
    "Please note that a follow-up visit is scheduling in a month.",
    "recommendations for",
    "additionally",
    "eligible",
    "long-term physiotherapy",
    "good progress",
    "terrible pain",
    "omeprazole",
    "simbastatin",
    "warfarin",
    "clopidogrel",
    "hydrochlorothiazide",
    "metoprolol",
    "ciprofloxacin",
    "dexamethasone",
    "methotrexate",
    "excessive sweating",
    "address",
    "surgical",
    "to ensure",
    "in",
    "on",
    "methadone",
    "cigarettes a day",
    "concerns",
    "admitted",
    "assistance",
    "relied on their neighbors",
    "sitting",
    "connect",
    "who suffers from three-stage cancer",
    "he requested to be assisted/ assistance",
    "his walk was slow",
    "proper use",
    "unstable",
    "education on/instructions on",
    "an antibiotic was administered",
    "since she was 18 years old",
    "she has a diagnosis",
    "until not needed",
    "require home visits to monitor her compliance",
    "her blood pressure was mildly raise",
    "to help her with cravings",
    "a prescription of X and X was given",
    "Mr X should stop taking Zyban",
    "I would appreciate it if you could give",
    "although she tries not to eat sugar",
    "instructions on the management of diabetes",
    "As she does not know how to maintain",
    "he struggles to adjust to her new lifestyle",
    "she was at the Royal Hospital",
    "intermittent",
    "a week ago",
    "psychiatric counselling",
    "breastfeeding",
    "not being well-nourished",
    "different opinions",
    "there were no antenatal complications",
    "in case they continue",
    "because of their different opinions",
    "routine 6-week check-up appointment",
    "through",
    "assisted by their neighbours with some personal chores",
    "organising/zing",
    "maintain",
    "warfarin",
    "fluid therapy",
    "an advice",
    "she was advised",
    "he has suffered from osteoarthritis since 2008",
    "has organized the hiring of a wedge pillow",
    "have a diagnosis of dementia",
    "episode",
    "disorientation",
    "counselling",
    "over-the-counter",
    "management",
    "with a worsening of her symptoms.",
    "intracranial",
    "a severe left-side headache",
    "This time, she was diagnosed",
    "provided",
    "including deep-breathing exercises",
    "she wants to continue living",
    "type 2 diabetes, which is now well controlled",
    "psychotic episodes",
    "has a low risk of self-harm now",
    "has been increased from 15 mg to 30 mg due to a worsening",
    "benzodiazepines",
    "was admitted due to a suicidal ideation",
    "second admission in mental health for self poisoning/after trying/after attenting",
    "As he is in the terminal stage",
    "provide them with emotional counselling",
    "to monitor his pain regularly",
    "cessation",
    "bureaucratic",
    "renew",
    "seek employment",
    "to remain in the hospital",
    "who has undergone",
    "decreased to 5 mg daily",
    "in the past/in the future",
    "stocking",
    "unstable mood",
    "Walters'",
    "during his hospital stay, he recovered well (tiene ser ser pasado)",
    "panadeine forte",
    "Please ensure that he adheres to his prescribed medication regimen.",
    "He walks with a limp due to left-sided weakness.",
    "Regarding his medical background, Mr. Billy has no prior hospitalizations. However, he has a 30-year history of heavy smoking and alcohol consumption, which may impact his recovery",
    "fell while descending the stairs and sustained a knee injury",
    "His gait remains unsteady, and he relies on his wife for support while moving around",
    "Ms. Vineyard self-admitted to our facility.",
    "She is estranged from her parents and currently couch-surfing.",
    "Please note that his wife, Mrs. Maria Jennifer, is his emergency contact. You will find her address in the attached notes",
    "His condition has been gradually declining since March 2018",
    "In today’s consultation, Mrs. Welshman, accompanied by her daughter, exhibited significant memory challenges.",
    "Her family has already been informed about her discharge",
    "She is scheduled for a hemoglobin blood test on Day 8 post-discharge",
    "twice daily",
    "activities of daily living (ADLs)",
    "Despite this, his family wishes for him to remain in the hospital.",
    "that are avoided",
    "this is his second psychiatric admission",
    "He is ambulatory and walks independently with a wheelie-walker.",
    "Mr. Walters has a four-year history of mild chronic renal failure",
    "Given his recent episode of hyperkalemia",
    "who was admitted",
    "Postoperatively, Mr. Baker has been prescribed Panadeine Forte, 2 tablets up to four times a day, as needed",
    "hospital corridor",
    "attended the clinic",
    "routine six-week check-up",
    "If formula feeding continues",
    "since adolescence",
    "sexually transmitted infections",
    "It is recommended that she be referred",
    "His post-operative pain has been well-managed with Panadeine Forte 500 mg.",
    "with assistance of one person",
    "transfer",
    "On 4 March 2011, Mrs. LaPaglia was admitted to the ICU in a comatose state secondary to renal failure and severe dehydration. She required ventilation and dialysis for stabilization and has since shown (a) significant improvement.",
    "hydration",
    "assess",
    "It would be appreciated if you continue oxygen therapy as per her oxygen saturation levels and adjust as needed.",
    "practitioner",
    "support him in his process",
    "secondary",
    "after his procedure",
    "As he is overweight and a smoker, his cardiovascular risk remains high, increasing the likelihood of future complications",
    "Please emphasize the importance of smoking cessation and encourage him to participate in a structured program.",
    "transferred",
    "report feeLING",
    "man a widower",
    "signs of MS relapse",
    "with low birth weight and neonatal opioid withdrawal. She is now ready for discharge and requires ongoing monitoring support. //for follow-up care and assistance.",
    "addiction",
    "additionally",
    "she has just gained 300 gr since her birth",
    "Rosalind’s mother, Genette Keating, 22, has been heroin-dependent for two years and is currently in recovery",
    "During hospitalization, both Rosalind and her mother successfully completed heroin withdrawal under the supervision of the Drug and Alcohol Team",
    "Additionally, please monitor her mother's psychosocial state and assess how she is coping with the new situation.",
    "admitted",
    "promote",
    "he still has a dry cough",
    "independent in showering",
    "the dietitian's recommendations",
    "as per the physiotherapist's review",
    "He was instructed on chest physiotherapy and postural drainage techniques to aid in his recovery.",
    "passed away",
    "1.5 kg",
    "please ensure ongoing monitoring of Mr. Ramamurthy’s diet",
    "approximately",
    "in the past six months due to poor dietary intake",
    "he was maintained in a sitting position more than lying to ensure postural drainage",
    "maintained",
    "position",
    "He would benefit from assistance in sustaining a healthy diet, engaging in a suitable exercise routine, and complying with his prescribed medication plan.",
    "hospitalised",
    "metformin",
    "she was prescribed metformin",
    "intermittent",
    "poor exercise",
    "Given the above, please provide regular monitoring",
    "encourage him to comply with",
    "restricted",
    "cream",
    "led to a new hair loss",
    "he did not attend",
    "trichology",
    "was scheduled",
    "which",
    "which likely started after",
    "After the condition remained stable for 4 years",
    "She lives alone, and her niece, who initially stayed with her, is no longer available to provide care.",
    "has been compliant",
    "who has symptoms suggestive of a relapse of pericarditis.",
    "Started on IV saline",
    "On assessment the following day",
    "On admission, Mr Gale reported falling the previous day after experiencing sudden weakness, which resulted in a headstrike.",
    "Further assessment is required to determine whether independent living remains a safe option",
    "on the second floor without a lift.",
    "prompted",
    "independent in activities of daily living",
    "disoriented",
    "amoxicillin",
    "The investigation showed",
    "she had a fever",
    "determine",
    "Please encourage him to engage in at least 30 minutes of daily physical activity, as his mobility has declined since the fall.",
    "whether",
    "In terms of Mr X' medical history",
    "engaging",
    "eager",
    "as well as",
    "the possibility of continuing her studies externally",
    "there is still a risk",
    "Aside from mild pain during walking, he has shown significant improvement",
    "he has recently started using walking sticks.",
    "His diet consists primarily on high-fat foods including",
    "advised on + noun/ advise to + verv",
    "quitting/ceasing",
    "physical activity"
];
console.log(correctTexts.length);
console.log(incorrectTexts.length);
let randomIndices = createRandomArray();

window.onload = function() {
    updateCard();
}

const card = document.querySelector(".card");
card.addEventListener("click", flipCard);

const listenButton = document.getElementById("listen-button");
listenButton.addEventListener("click", readText);

const nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", nextCard);

function readText() {
    if ('speechSynthesis' in window) {
        const msg = new SpeechSynthesisUtterance();
        msg.lang = "en-US";
        if (card.classList.contains("is-flipped")) {
            msg.text = document.getElementById("correct-text").innerText;
            window.speechSynthesis.speak(msg);
        }
        // else {
        //     msg.lang = "en-GB";
        //     msg.text = document.getElementById("correct-text").innerText;
        //     window.speechSynthesis.speak(msg);
        // }
    }
    else {
        alert("Sorry, your browser does not support text to speech!");
    }
}

function flipCard() {
    //adds and removes class
    card.classList.toggle('is-flipped'); 
}

function nextCard() {
    if (card.classList.contains("is-flipped")) {
        flipCard();
        listenButton.disabled = true;
        nextButton.disabled = true;
        setTimeout(updateCard, 1000);
    }
    else {
        updateCard(); 
    }
}   

function updateCard() {
    if (randomIndices.length == 0) {
        randomIndices = createRandomArray();
    }
    const i = randomIndices.pop();
    document.getElementById("incorrect-text").innerText = incorrectTexts[i];
    document.getElementById("correct-text").innerText = correctTexts[i];;
    listenButton.disabled = false;
    nextButton.disabled = false;
}

function shuffleArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let j = Math.floor(Math.random() * arr.length); // (0-1) * 52 => (0-51.9999)
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

function createRandomArray() {
    const randomIndices = [];
    for (let i = 0; i < correctTexts.length; i++) {
        randomIndices.push(i);
    }
    const repetitions = Math.floor(Math.random()*correctTexts.length);
    for (let i = 0; i < repetitions; i++) {
        shuffleArray(randomIndices);
    }
    return randomIndices;
}
