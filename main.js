// taken from https://codepen.io/stylelist24/pen/PKKrja
function generateEmail() {
    const strValues = 'abcdefg12345';
    let strEmail = '';
    let strTmp;

    for (let i = 0; i < 10; i += 1) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail += strTmp;
    }

    strTmp = '';
    strEmail += '@';

    for (let j = 0; j < 8; j += 1) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail += strTmp;
    }

    strEmail += '.com';
    return strEmail;
}

const inputContainer = document.querySelector('#input-container');
const emailsInput = new EmailsInput(inputContainer);
emailsInput.addNewEmail('new.user@test.com');

const addEmailButton = document.querySelector('#add-email');
addEmailButton.addEventListener('click', () => {
    emailsInput.addNewEmail(generateEmail());
});

const getEmailsCountButton = document.querySelector('#emails-count');
getEmailsCountButton.addEventListener('click', () => {
    alert(`${emailsInput.getValidEmailsCount()} valid email(s)`);
});
