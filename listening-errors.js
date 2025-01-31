const correctTexts = [
    "adipose tissue",
    "appendix",
    "bronchi",
    "dura mater",
    "pituitary gland",
    "pineal gland",
    "ureter",
    "ovaries",
    "testes",
    "prostate",
    "gastrointestinal track",
    "acupuncture",
    "ayurbeda",
    "craniosacral therapy",
    "energy healing",
    "feldenkrais method",
    "homeopathy",
    "hypnothrerapy",
    "Kampo",
    "cupping therapy",
    "biofeedback",
    "crippling",
    "gnawing",
    "biting",
    "dizzying",
    "shooting",
    "unrelenting",
    "torturous",
    "unyielding",
    "darting",
    "drenching",
    "gripping",
    "piercing",
    "bobsleigh",
    "cricket",
    "canoeing",
    "fencing",
    "footsal",
    "horseback riding",
    "mountaineering",
    "rowing",
    "ultimate frisbee",
    "wrestling",
    "appetite",
    "halitosis",
    "bloodshot eyes",
    "choking sensation",
    "cold sweats",
    "delayed wound healing",
    "drooling",
    "excessive gas",
    "hand tremors",
    "hoarseness",
    "nosebleeds",
    "blurred speech",
    "coughing up blood",
    "ear ringing (tinnitus)",
    "excessive hunger",
    "excessive sleepliness",
    "hip pain",
    "hives",
    "jaw pain",
    "light sensivity",
    "weight gain",
    "librarian",
    "archaeologist",
    "surveyor",
    "archivist",
    "ophthalmology",
    "pneumonia",
    "rheumatoid",
    "myocardial infarction",
    "cervical spondylosis",
    "arrhythmia",
    "nephrolithiasis",
    "hypoglycaemia",
    "haematuria",
    "laryngitis",
    "atheroesclerosis",
    "tachycardia",
    "polyuria",
    "lymphanedopaty",
    "cystitis",
    "pharyngitis",
    "emphysema",
    "hydrazaline",
    "eszopiclone",
    "pantoprazole",
    "duloxetine",
    "amitriptyline",
    "metylphenidate",
    "haemoglobin A1c test",
    "pap smear",
    "lipid panel",
    "stress test",
    "dexa scan",
    "urinalysis",
    "serum electrolyte test",
    "cardiac catheterization",
    "treadmill stress test",
    "thrombofilia test",
    "fecal occult",
    "immunodeficiency",
    "arthroscopy",
    "hepatitis panel",
    "creatinine clearance",
    "frequent thirst",
    "chest tightness",
    "hot flashes",
    "loss of appetite",
    "numbness"
];

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
        msg.lang = "en-GB";
        msg.text = document.getElementById("correct-text").innerText;
        window.speechSynthesis.speak(msg);
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
    const i = Math.floor(Math.random()*correctTexts.length);
    document.getElementById("correct-text").innerText = correctTexts[i];;
    listenButton.disabled = false;
    nextButton.disabled = false;
}