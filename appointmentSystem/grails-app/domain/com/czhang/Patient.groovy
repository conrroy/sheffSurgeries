package com.czhang

class Patient {
    String patientName
    String patientAddress
    String patientResidence //Name of village, town, city where patient resides
    Date patientDob // Date of birth
    String patientID
    Date dateRegistered
    String patientPhone

    static constraints = {
        patientName blank: false
//        patientAddress
//        patientResidence
        patientDob blank: false, max: new Date()
        patientID blank: false
        dateRegistered blank: false
        patientPhone shared: "phoneNumber"
    }
}
