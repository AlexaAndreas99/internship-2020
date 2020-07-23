export default {
  PORT: 80,
  publicFolder: 'public',
  uploadsFolder: 'uploads',
  msg: {
    uploadFail: 'Eroare la înc?rcare fisiere @errors',
    uploadSuccess: 'Fisierele XML s-au înc?rcat cu success',
  },
  db: {
    user: 'PdfAutomation',
    password: 'Indeco@2020',
    server: 'devsrv.indeco.local\\dev2012',
    database: 'PdfAutomation',
    options: { enableArithAbort: true, useUTC: false }
  },
  intervalForNextRequest: 0
}