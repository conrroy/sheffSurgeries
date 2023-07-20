package com.czhang

class Patient {
    String patientName
    String patientAddress
    String patientResidence //Name of village, town, city where patient resides
    Date patientDob // Date of birth
    String patientID
    Date dateRegistered
    String patientPhone
    String patientEmail // Additional attribute

    static  hasMany = [precsciptions: Prescription, appointments: Appointment]

    static constraints = {
        patientName blank: false
//        patientAddress
//        patientResidence
        patientDob blank: false
        patientID blank: false
        dateRegistered blank: false
        patientPhone shared: "phoneNumber", nullable: true
        patientEmail email: true
    }
}
