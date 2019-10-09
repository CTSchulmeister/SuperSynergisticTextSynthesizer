const MAXIMUM_NUMBER_OF_PARAGRAPHS = 30;
const MINIMUM_NUMBER_OF_SENTENCES = 3;
const MAXIMUM_NUMBER_OF_SENTENCES = 7 - MINIMUM_NUMBER_OF_SENTENCES;

const NUMBER_CHANGE = ['increase', 'decrease', 'grow', 'cut', 'shrink'];
const PAST_TENSE_NUMBER_CHANGE = ['increased', 'decreased', 'grown', 'shrunk'];
const ABSOLUTE_NUMBER_CHANGE = ['double', 'triple', 'half'];
const NUMBER_CHANGING = ['up', 'down', 'increasing', 'decreasing', 'doubling', 'tripling', 'shrinking'];
const PLURAL_PEOPLE_NOUNS = ['owners', 'customers', 'employees', 'executives', 'shareholders'];
const DEPARTMENT_NAMES = ['accounting', 'sales', 'marketing', 'engineering', 'QA', 'R&D'];
const FEELING = ['acceptable', 'unacceptable', 'encouraging', 'discouraging', 'disastrous', 'appealing', 'promising'];
const FEELING_ADVERBS = ['completely', 'very', 'absolutely', 'minimally'];
const BUZZ_WORDS = ['advertainment', 'Big Data', 'customer connection', 'SEO', 'freemium content', 'influencer marketing', 'blockchain'];

const BUSINESS_GOALS = [
    'increasing employee synergy', 
    'becoming a green company', 
    'world domination',
    'growth hacking',
    'moving the needle',
    'thought leadership',
    'disrupting the market',
    'revolutionizing the industry'
];
const BODY_TRANSITIONS = [
    'On to our next topic.',
    'Moving on.',
    'Next on today\'s agenda...'
];

const SENTENCE_TEMPLATES = [
    [
        '  In order to ', '$numberChange', ' our marketshare by ', '$percentage', 
        ', we must ', '$numberChange', ' our ', '$pluralPeopleNoun',
        '\' salary by ', '$percentage', ' by the year ', '$futureYear', '.'
    ], [
        '  As you know, our ', '$departmentName', ' numbers have been ', '$numberChanging', 
        ' since ', '$pastYear', ', and this is ', '$feelingAdverb', ' ', '$feeling', '.'
    ], [
        '  In allignment with our goal of ', '$businessGoal', ', our ', '$pluralPeopleNoun',
        ' feel it necessary to ', '$absoluteNumberChange', ' our ', '$departmentName',
        ' department\'s budget by ', '$futureYear', ' in order to achieve maximum ', 
        '$buzzWord', ' ', '$buzzWord', '.'
    ], [
        '  Here at Company Co., ', '$buzzWord', 
        ' is very important to us; however, we must never forget our roots in ', '$buzzWord',
        ', lest we repeat the mistakes of ', '$pastYear', '.'
    ], [
        '  According to our quarterly projections, our ', '$buzzWord', ' has ', 
        '$pastTenseNumberChange', ' ', '$percentage',
        ' from ', '$pastYear', '.'
    ], [
        '  If we are to reach the European Market by ', '$futureYear', ', we must ', '$numberChange',
        ' our amount of ', '$buzzWord', '.'
    ], [
        '  This is vital to ', '$businessGoal', '.'
    ]
]

const getPercentage = () => {
    let percentage = Math.floor((Math.random() * 100) + 1);

    return percentage.toString() + '%';
};

const getFutureYear = () => {
    let year = Math.floor((Math.random() * 100) + 2020);
    
    return year.toString();
};

const getPastYear = () => {
    let year = Math.floor((Math.random() * 300) + 1700);

    return year.toString();
};

const generateSentence = (previousIndex = null) => {
    let sentenceIndex = Math.floor(Math.random() * SENTENCE_TEMPLATES.length);

    while(sentenceIndex === previousIndex) {
        sentenceIndex = Math.floor(Math.random() * SENTENCE_TEMPLATES.length);
    }

    let sentenceTemplate = SENTENCE_TEMPLATES[sentenceIndex];

    let sentence = '';
    let index;

    sentenceTemplate.forEach(word => {
        if(word.charAt(0) !== '$') {
            sentence += word;
        } else {
            switch(word) {
                case '$pluralPeopleNoun':
                    index = Math.floor(Math.random() * PLURAL_PEOPLE_NOUNS.length);
                    sentence += PLURAL_PEOPLE_NOUNS[index];
                    break;
                case '$numberChange':
                    index = Math.floor(Math.random() * NUMBER_CHANGE.length);
                    sentence += NUMBER_CHANGE[index];
                    break;
                case '$absoluteNumberChange':
                    index = Math.floor(Math.random() * ABSOLUTE_NUMBER_CHANGE.length);
                    sentence += ABSOLUTE_NUMBER_CHANGE[index];
                    break;
                case '$pastTenseNumberChange':
                    index = Math.floor(Math.random() * PAST_TENSE_NUMBER_CHANGE.length);
                    sentence += PAST_TENSE_NUMBER_CHANGE[index];
                    break;
                case '$numberChanging':
                    index = Math.floor(Math.random() * NUMBER_CHANGING.length);
                    sentence += NUMBER_CHANGING[index];
                    break;
                case '$departmentName':
                    index = Math.floor(Math.random() * DEPARTMENT_NAMES.length);
                    sentence += DEPARTMENT_NAMES[index];
                    break;
                case '$feeling':
                    index = Math.floor(Math.random() * FEELING.length);
                    sentence += FEELING[index];
                    break;
                case '$feelingAdverb':
                    index = Math.floor(Math.random() * FEELING_ADVERBS.length);
                    sentence += FEELING_ADVERBS[index];
                    break;
                case '$businessGoal':
                    index = Math.floor(Math.random() * BUSINESS_GOALS.length);
                    sentence += BUSINESS_GOALS[index];
                    break;
                case '$buzzWord':
                    index = Math.floor(Math.random() * BUZZ_WORDS.length);
                    sentence += BUZZ_WORDS[index];
                    break;
                case '$futureYear':
                    sentence += getFutureYear();
                    break;
                case '$pastYear':
                    sentence += getPastYear();
                    break;
                case '$percentage':
                    sentence += getPercentage();
                    break;
                default:
                    sentence += '!!ERROR: CHECK TEMPLATE!!';
            }
        }
    });

    return { sentence, sentenceIndex };
};

const generateNumberOfSentences = () => {
    return Math.floor((Math.random() * MAXIMUM_NUMBER_OF_SENTENCES) + MINIMUM_NUMBER_OF_SENTENCES);
};

const generateSingleParagraph = () => {
    let numberOfSentences = generateNumberOfSentences();

    let generatedText = 'Hello, friends.';

    let sentenceIndex = null;
    
    for(let sentence = 0; sentence < numberOfSentences; sentence++) {
        let sentenceObject = generateSentence(sentenceIndex);
        sentenceIndex = sentenceObject.sentenceIndex;
        generatedText += sentenceObject.sentence;
    }

    generatedText += ' Thank you for attending today\'s meeting.';

    return generatedText;
};

const generateIntroductionParagraph = () => {
    let numberOfSentences = generateNumberOfSentences();

    let generatedText = 'Hello, friends.';

    let sentenceIndex = null;

    for(let sentence = 0; sentence < numberOfSentences; sentence++) {
        let sentenceObject = generateSentence(sentenceIndex);
        sentenceIndex = sentenceObject.sentenceIndex;
        generatedText += sentenceObject.sentence;
    }

    return generatedText;
};

const generateBodyParagraph = (previousTransitionIndex = null) => {
    let numberOfSentences = generateNumberOfSentences();

    let transitionIndex = Math.floor(Math.random() * BODY_TRANSITIONS.length);

    while(transitionIndex === previousTransitionIndex) {
        transitionIndex = Math.floor(Math.random() * BODY_TRANSITIONS.length);
    }

    let paragraph = BODY_TRANSITIONS[transitionIndex];

    let sentenceIndex = null;

    for(let sentence = 0; sentence < numberOfSentences; sentence++) {
        let sentenceObject = generateSentence(sentenceIndex);
        sentenceIndex = sentenceObject.sentenceIndex;
        paragraph += sentenceObject.sentence;
    }

    return {
        paragraph,
        transitionIndex
    };
};

const generateConclusionParagraph = () => {
    let numberOfSentences = generateNumberOfSentences();

    let generatedText = 'Let me conclude.';

    let sentenceIndex = null;

    for(let sentence = 0; sentence < numberOfSentences; sentence++) {
        let sentenceObject = generateSentence(sentenceIndex);
        sentenceIndex = sentenceObject.sentenceIndex;
        generatedText += sentenceObject.sentence;
    }

    generatedText += ' Thank you for attending today\'s meeting.';

    return generatedText;
};

const generateText = (numberOfParagraphs) => {
    if(numberOfParagraphs > MAXIMUM_NUMBER_OF_PARAGRAPHS) {
        throw new Error(`The number of paragraphs generated cannot exceed ${ MAXIMUM_NUMBER_OF_PARAGRAPHS}.`);
    }
    if(numberOfParagraphs < 1) numberOfParagraphs = 1;

    if(numberOfParagraphs === 1) {
        return generateSingleParagraph();
    }

    let generatedText = generateIntroductionParagraph();

    let previousTransitionIndex = null;

    for(let paragraph = 2; paragraph < numberOfParagraphs; paragraph++) {
        let bodyParagraphObject = generateBodyParagraph(previousTransitionIndex);
        generatedText += '\n' + bodyParagraphObject.paragraph;
        previousTransitionIndex = bodyParagraphObject.transitionIndex;
    };

    generatedText += '\n' + generateConclusionParagraph();

    return generatedText;
};

export default generateText;
