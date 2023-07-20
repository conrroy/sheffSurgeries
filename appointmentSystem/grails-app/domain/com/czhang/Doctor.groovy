package com.czhang

class Doctor {
    String doctorName
    String qualifications
    String position
    String doctorEmail
    String password
    String doctorOffice
    String doctorPhone
    String bio   // Biography of doctor

    static hasMany = [prescriptions: Prescription, appointments: Appointment]
    Surgery surgery

    static constraints = {
        doctorName blank: false
        qualifications blank: true
        position blank: true
        doctorEmail blank: false, email: true, unique: true
        password blank: false
//        doctorOffice
        doctorPhone shared: "phoneNumber"
        bio blank: true, nullable: true
        prescriptions nullable: true
        appointments nullable: true
        surgery nullable: true
    }
}
