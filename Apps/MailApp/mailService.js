import utilService from '../../services/utilService.js'
import storageService from '../../services/storageService.js'

// const STORAGE_KEY = 'mails';

const gDefaultMails = [
    _createMail('sub1', 'body1'),
    _createMail('sub2', 'body2'),
    _createMail('sub3', 'body3'),
    _createMail('sub4', 'body4'),
    _createMail('sub5', 'body5')]

var gMails = null;

_createMails();

export default {
    query,
    deleteMail,
    save,
    getById,
}

function query() {
    if (!gMails) gMails = storageService.load('mails', gDefaultMails)
    return gMails //BAGADOL!
}

function _createMails() {
    // this function will get the mails from storage later
    gMails = gDefaultMails;
}

function _createMail(subject, body) {
    return {
        id: utilService.makeId(),
        subject,
        body,
        isRead: false,
        sentAt: Date.now()
    }
}

function save(mailToSave) {
    if (mailToSave.id) {
        const mailIdx = _getIdxById(mailToSave.id)
        gMails[mailIdx] = mailToSave;

    } else {
        const newMail = _createMail(mailToSave.subject, mailToSave.body)
        gMails.push(newMail)
    }
    storageService.store('mails', gMails)
}

function getById(mailId) {
    const mail = gMails.find(mail => mail.id === mailId)
    return mail;
}

function _getIdxById(mailId) {
    return gMails.findIndex(mail => mail.id === mailId)
}

function deleteMail(id) {
    const idx = gMails.findIndex(mail => mail.id === id)
    gMails.splice(idx, 1)
}