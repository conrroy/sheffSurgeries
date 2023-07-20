package com.czhang

class Nurse {
    String nurseName
    String qualifications
    String nurseEmail
    String nurseOffice
    String nursePhone

    static hasMany = [appointments: Appointment]
    Surgery surgery

    static constraints = {
        nurseName blank: false
//        qualifications
        nurseEmail email: true
//        nurseOffice
        nursePhone shared: "phoneNumber"
        appointments nullable: true
        surgery nullable: true
    }
}
