import utilService from '../../services/utilService.js'
// const STORAGE_KEY = 'mails';
const gDefaultMails= [
    _createMail('sub1','body1'),
    _createMail('sub2','body2'),
    _createMail('sub3','body3'),
    _createMail('sub4','body4'),
    _createMail('sub5','body5')] 
var gMails = null;

_createMails();

export default {
    query,
    deleteMail
}
// getById,

function query() {
    return gMails //BAGADOL!
}

function _createMails() {
// this function will get the mails from storage later
gMails = gDefaultMails;
}

function _createMail(subject,body) {
    return { 
        id: utilService.makeId(),
        subject, body, isRead: false, sentAt : Date.now() 
    }
}

// function getById() {

// }

function deleteMail(id) {
    const idx = gMails.findIndex(mail=> mail.id===id)
    gMails.splice(idx,1)
}