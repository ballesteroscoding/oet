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
    "proporcioned"
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
    "provided"
];
// console.log(correctTexts.length);
// console.log(incorrectTexts.length);
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
